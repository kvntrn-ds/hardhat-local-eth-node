// scripts/query-blocks.ts

import { createPublicClient, http } from "viem";
import { hardhat } from "viem/chains";

// Create a client that connects to your local Hardhat node
const client = createPublicClient({
  chain: hardhat,
  transport: http("http://127.0.0.1:8547"), // Explicit localhost when node is running
});

async function main() {
  console.log("🔗 Querying local Hardhat Ethereum node...\n");

  try {
    // Get current block number
    const blockNumber = await client.getBlockNumber();
    console.log(`Latest Block Number: ${blockNumber}\n`);

    // Get full details of the latest block
    const block = await client.getBlock();
    console.log("Latest Block Details:");
    console.log(`   Hash:        ${block.hash}`);
    console.log(`   Miner:       ${block.miner}`);
    console.log(`   Timestamp:   ${new Date(Number(block.timestamp) * 1000).toLocaleString()}`);
    console.log(`   Gas Used:    ${block.gasUsed}`);
    console.log(`   Gas Limit:   ${block.gasLimit}`);
    console.log(`   Transactions: ${block.transactions.length}`);

    // Show genesis block if chain has blocks
    if (blockNumber > 0n) {
      const genesis = await client.getBlock({ blockNumber: 0n });
      console.log("\nGenesis Block (Block 0):");
      console.log(`   Hash:      ${genesis.hash}`);
      console.log(`   Timestamp: ${new Date(Number(genesis.timestamp) * 1000).toLocaleString()}`);
    }

    // Mine one new empty block to demonstrate chain progress
    console.log("\n⛏️  Mining a new empty block...");
    await client.request({ method: "evm_mine", params: [] });

    const newBlockNumber = await client.getBlockNumber();
    console.log(`✅ New Latest Block Number: ${newBlockNumber}`);
  } catch (error: any) {
    console.error("❌ Error querying block:", error.shortMessage || error.message);
  }
}

main();