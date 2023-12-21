/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5hX1ycYMUPz
 */


import { ConnectButton } from '@rainbow-me/rainbowkit';
import CommitVote from './components/commit-vote';


export default function Component() {

  return (
        <div className="min-h-screen bg-[#f0f0f0]">
      <nav className="flex items-center justify-between p-6 bg-white shadow-md">
        <div className="flex items-center">
          <span className="text-xl font-semibold">Blind Voting App</span>
        </div>
        <ConnectButton />
      </nav>
     <main className="flex flex-col items-center justify-center py-12">
        <CommitVote/>
        <p className="mt-10 text-center text-gray-500">
          Have more questions? Check out our litepaper
        </p>
      </main>
    </div>
  )
}

