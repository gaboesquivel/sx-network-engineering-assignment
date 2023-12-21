import { commitReveal } from "@/contracts/commit-reveal"
import {  useContractReads } from 'wagmi'

const readFunctions = ['numberOfVotesCast', 'votesForChoice1', 'votesForChoice2']

export function useCommitRevealState(){
  const state = useContractReads({
    contracts: readFunctions.map(functionName => ({functionName, ...commitReveal, watch: true}))
  })
  
  const numberOfVotesCast = state.data && state.data[0].result as bigint
  const votesForChoice1 = state.data && state.data[1].result as bigint
  const votesForChoice2 = state.data && state.data[2].result as bigint

  return {
    numberOfVotesCast: numberOfVotesCast?.toString(),
    votesForChoice1: votesForChoice1?.toString(),
    votesForChoice2: votesForChoice2?.toString(),
    ...state
  }
}
