# hardhat-local-eth-node
Local Ethereum node using Hardhat + Viem with TypeScript script to query and mine blocks
# Local Ethereum Node + Block Querying Demo

A simple Hardhat project demonstrating:
- Running a local Ethereum node
- Querying block details using Viem + TypeScript
- Manually mining new blocks

## Tech used;
- Hardhat
- Viem
- TypeScript

## How to Run

1. Clone and install
```bash
-git clone https://github.com/kvntrn-ds/hardhat-local-eth-node.git
-cd hardhat-local-eth-node
-npm install
Open terminal 1 and run:
-npx hardhat node
Open terminal 2 and run:
npx hardhat run query-blocks.ts --network localhost
