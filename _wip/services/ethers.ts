import { commitReveal } from '@/contracts/commit-reveal';
import { ethers, type Eip1193Provider, type InterfaceAbi } from 'ethers';

declare global {
  interface Window{
    ethereum?: Eip1193Provider
  }
}

export async function commitVoteWithEthers({option, secret}:{option: 1 | 2, secret:string}) {
  if(!window.ethereum) throw new Error("window.ethereum not found");
  
  // Connect to MetaMask
  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send('eth_requestAccounts', []);
  const signer = await provider.getSigner();

  // Create a new Contract instance
  const contract = new ethers.Contract(commitReveal.address, commitReveal.abi as InterfaceAbi, signer);

  // Construct the commit string and convert to bytes32
  const commit = ethers.encodeBytes32String(`${option}~${secret}`);
console.log(commit)
  // Call commitVote function on the Contract
  const transactionResponse = await contract.commitVote(commit);
  console.log(transactionResponse);
}

// Example usage: commitVote(1, 'your_secret');
