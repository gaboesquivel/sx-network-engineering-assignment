import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat"
import "@nomicfoundation/hardhat-chai-matchers";
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  typechain: {
    outDir: "typechain",
    target: "ethers-v6",
  },
  networks:{
    testnet: {
      url: 'https://rpc.sepolia.org',
      chainId: 11155111,
      accounts: [process.env.TESTNET_PRIVATE_KEY??'']
    },
  }
};

export default config;
