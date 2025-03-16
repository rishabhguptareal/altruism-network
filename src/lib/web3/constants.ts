
import { SmartContractConfig, StorageConfig } from "./types";

// Chain configuration - using Mumbai Testnet as an example
export const SUPPORTED_CHAIN_ID = 80001; // Mumbai Testnet
export const CHAIN_NAMES: Record<number, string> = {
  1: "Ethereum Mainnet",
  5: "Goerli Testnet",
  11155111: "Sepolia Testnet",
  80001: "Mumbai Testnet",
  137: "Polygon Mainnet",
};

// Smart contract configuration
export const DONATION_CONTRACT_CONFIG: SmartContractConfig = {
  address: "0x0000000000000000000000000000000000000000", // Replace with actual contract address
  abi: [
    // Basic ABI for a donation contract
    {
      "inputs": [
        { "internalType": "string", "name": "opportunityId", "type": "string" },
        { "internalType": "address", "name": "recipient", "type": "address" }
      ],
      "name": "donate",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "string", "name": "opportunityId", "type": "string" }],
      "name": "getDonationAmount",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  chainId: SUPPORTED_CHAIN_ID,
};

// IPFS configuration
export const STORAGE_CONFIG: StorageConfig = {
  ipfsGateway: "https://ipfs.io/ipfs/",
};

// Mapping of cryptocurrency symbols to their contract addresses (for tokens)
export const TOKEN_ADDRESSES: Record<string, { address: string; decimals: number }> = {
  ETH: { address: "0x0000000000000000000000000000000000000000", decimals: 18 },
  USDC: { address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", decimals: 6 }, // Polygon USDC
  DAI: { address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", decimals: 18 }, // Polygon DAI
};
