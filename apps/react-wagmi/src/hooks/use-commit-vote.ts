import { commitReveal } from "@/contracts/commit-reveal"
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { stringToHex, } from 'viem'

export function useCommitVote({option, secret}:{option: 1 | 2, secret: string }){
  const commit = stringToHex(`${option}~${secret}`, {size: 32})
  console.log({option, secret, commit})

  const { config } = usePrepareContractWrite({
    ...commitReveal,
    functionName: 'commitVote',
    args: [commit]
  })

  const { data, write,  isLoading, isSuccess  } = useContractWrite(config)
 
  return { data, isLoading, isSuccess, vote: write! } 
}

