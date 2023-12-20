
import { useCommitVote } from "@/hooks/use-commit-vote";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { useChoices } from "@/hooks/use-choices";
import { useCommitRevealState } from "@/hooks/use-commit-reveal-state";

export default function CommitVote() {
    const {choice1, choice2, error: choicesError} = useChoices()
    const [secret, setSecret] = useState('')
    const yes = useCommitVote({option: 1, secret})
    const no = useCommitVote({option: 2, secret})
    const { 
      numberOfVotesCast,
      votesForChoice1,
      votesForChoice2,
      error: stateError
    } = useCommitRevealState()

    // const isLoading = yes.isLoading || no.isLoading
    // const data = yes.data || no.data

    if(choicesError) return <p>Error reading choices from contract</p>

    if(stateError) return <p>Error reading choices from contract</p>

  return (
    <>
        <h1 className="mb-4 text-4xl font-bold">Vote Now</h1>
        <p className="mb-10 text-center text-gray-500">Let your voice be heard! Cast your vote below.</p>
        <h2 className="mb-2 text-2xl font-semibold">Should we hire him?</h2>
        <input
          className="w-full p-2 mb-6 bg-white border border-gray-300 rounded-md shadow-sm md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your voting secret"
          type="text"
          onChange={(e)=>setSecret(e.target.value)}
          value={secret}
        />
        <section className="flex flex-col justify-center gap-8 md:flex-row md:gap-16">
        
              <div className="flex flex-col items-center w-full md:w-1/3">
                <Button disabled={!secret} className="w-full mb-6 overflow-hidden text-white bg-green-500 whitespace-nowrap" onClick={()=>yes.vote()}>{choice1}</Button>
              </div>
              <div className="flex flex-col items-center w-full md:w-1/3">
                <Button disabled={!secret} className="w-full mb-6 overflow-hidden text-white bg-red-500 whitespace-nowrap" onClick={()=>no.vote()}>{choice2}</Button>
              </div>
     
          <pre>
            <p>Yes request</p>
            <code>{JSON.stringify(yes)}</code>
      
            <p>No request</p>
            <code>{JSON.stringify(no)}</code>

            <p>Contract State</p>
            <code>{JSON.stringify({ numberOfVotesCast,
      votesForChoice1,
      votesForChoice2,})}</code>

             
          </pre>
        </section>
    </>
  )
}
