import { ethers } from "hardhat";

async function main() {
  const ComomitReveal = await ethers.getContractFactory("CommitReveal")
  const commitReveal = await ComomitReveal.deploy(12000, "YES", "NO");

  console.log(
    `Deployed CommitReveal at ${commitReveal.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
