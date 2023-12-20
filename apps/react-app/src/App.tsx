/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5hX1ycYMUPz
 */

import { Button } from "@/components/ui/button"
import { ConnectButton } from '@rainbow-me/rainbowkit';

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
          <h1 className="mb-4 text-4xl font-bold">Vote Now</h1>
        <p className="mb-10 text-center text-gray-500">Let your voice be heard! Cast your vote below.</p>
        <h2 className="mb-2 text-2xl font-semibold">Votation Topic</h2>
        <input
          className="w-full p-2 mb-6 bg-white border border-gray-300 rounded-md shadow-sm md:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your voting secret"
          type="text"
        />
        <section className="flex flex-col justify-center gap-8 md:flex-row md:gap-16">
          <div className="flex flex-col items-center w-full md:w-1/3">
            <Button className="w-full mb-6 overflow-hidden text-white bg-green-500 whitespace-nowrap">Vote Yes</Button>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/3">
            <Button className="w-full mb-6 overflow-hidden text-white bg-red-500 whitespace-nowrap">Vote No</Button>
          </div>
        </section>
        <p className="mt-10 text-center text-gray-500">
          Have more questions? Check out our litepaper
        </p>
      </main>
    </div>
  )
}

