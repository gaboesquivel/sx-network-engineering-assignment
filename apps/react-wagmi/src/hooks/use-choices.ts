import { commitReveal } from "@/contracts/commit-reveal"
import {  useContractReads } from 'wagmi'

const readFunctions = ['choice1', 'choice2']

export function useChoices(){
  const choices = useContractReads({
    contracts: readFunctions.map(functionName => ({functionName, ...commitReveal}))
  })

  return {
    choice1: choices.data && choices.data[0].result as string,
    choice2: choices.data && choices.data[1].result as string,
    ...choices
  }
}


