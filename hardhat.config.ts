import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-viem";

const config: HardhatUserConfig = {
  solidity: "0.8.28",  // Updated to match the Counter.sol pragma

  networks: {
    hardhat: {
      type: "edr-simulated",
    },
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
};

export default config;
