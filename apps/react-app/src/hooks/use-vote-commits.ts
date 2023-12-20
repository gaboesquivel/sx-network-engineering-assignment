import { commitReveal } from "@/contracts/commit-reveal"
import {  useContractRead } from 'wagmi'

export function useVoteCommits(){
  return useContractRead({
    ...commitReveal,
    functionName: 'choice1',
  })
}


