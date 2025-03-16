
import { BigNumber } from "ethers";

export interface TransactionReceipt {
  to: string;
  from: string;
  contractAddress: string;
  transactionIndex: number;
  blockHash: string;
  transactionHash: string;
  blockNumber: number;
  status?: number;
}

export interface DonationTransaction {
  opportunityId: string;
  amount: string;
  currency: string;
  recipientAddress: string;
  timestamp: number;
  transactionHash: string;
  status: "pending" | "confirmed" | "failed";
}

export interface SmartContractConfig {
  address: string;
  abi: any[];
  chainId: number;
}

export interface StorageConfig {
  ipfsGateway: string;
}

export interface Web3ContextProps {
  isConnected: boolean;
  address: string | null;
  chainId: number | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  donate: (opportunityId: string, amount: string, recipientAddress: string) => Promise<DonationTransaction | null>;
  uploadProof: (files: File[], metadata: Record<string, any>) => Promise<string[]>;
  verifyProof: (proofCid: string) => Promise<boolean>;
  isWrongNetwork: boolean;
  switchToCorrectNetwork: () => Promise<void>;
  isMounted: boolean;
}
