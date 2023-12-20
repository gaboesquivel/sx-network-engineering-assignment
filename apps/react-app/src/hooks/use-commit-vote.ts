import { commitReveal } from "@/contracts/commit-reveal"
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { stringToHex, } from 'viem'

export function useCommitVote({option, secret}:{option: 1 | 2, secret: string }){

  // const { config } = usePrepareContractWrite({
  //   ...commitReveal,
  //   functionName: 'commitVote',
  //   args: ['0x317e6d7962696773656372657400000000000000000000000000000000000000']
  // })

  const commit = stringToHex(`${option}~${secret}`, {size: 32})
  console.log(commit)
  const { data, write,  isLoading, isSuccess  } = useContractWrite({
    ...commitReveal,
    functionName: 'commitVote',
    args: [commit]
  })

 
  return { data, isLoading, isSuccess, vote: write! } 
}

