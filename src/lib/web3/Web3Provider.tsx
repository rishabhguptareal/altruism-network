
import React, { createContext, useContext, useEffect, useState } from "react";
import { useWeb3Modal } from "@web3modal/react";
import { ethers } from "ethers";
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from "wagmi";
import { Web3ContextProps, DonationTransaction } from "./types";
import { DONATION_CONTRACT_CONFIG, SUPPORTED_CHAIN_ID, CHAIN_NAMES } from "./constants";
import { useToast } from "@/hooks/use-toast";

const Web3Context = createContext<Web3ContextProps | null>(null);

export const useWeb3 = (): Web3ContextProps => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error("useWeb3 must be used within a Web3Provider");
  }
  return context;
};

export const Web3Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { toast } = useToast();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isWrongNetwork = isConnected && chain?.id !== SUPPORTED_CHAIN_ID;

  const connectWallet = async (): Promise<void> => {
    try {
      await open();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      toast({
        title: "Connection Failed",
        description: "Could not connect to your wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  const disconnectWallet = async (): Promise<void> => {
    try {
      disconnect();
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
    }
  };

  const switchToCorrectNetwork = async (): Promise<void> => {
    if (!switchNetwork) {
      toast({
        title: "Network Switch Unavailable",
        description: "Unable to switch networks automatically. Please switch manually in your wallet.",
        variant: "destructive",
      });
      return;
    }

    try {
      await switchNetwork(SUPPORTED_CHAIN_ID);
    } catch (error) {
      console.error("Failed to switch network:", error);
      toast({
        title: "Network Switch Failed",
        description: `Failed to switch to ${CHAIN_NAMES[SUPPORTED_CHAIN_ID]}. Please try manually.`,
        variant: "destructive",
      });
    }
  };

  const donate = async (
    opportunityId: string,
    amount: string,
    recipientAddress: string
  ): Promise<DonationTransaction | null> => {
    if (!window.ethereum) {
      toast({
        title: "Wallet Not Found",
        description: "Please install a Web3 wallet like MetaMask to make donations.",
        variant: "destructive",
      });
      return null;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      
      // Create contract instance
      const contract = new ethers.Contract(
        DONATION_CONTRACT_CONFIG.address,
        DONATION_CONTRACT_CONFIG.abi,
        signer
      );

      // Convert amount to wei
      const amountInWei = ethers.utils.parseEther(amount);
      
      // Call donate function on smart contract
      const tx = await contract.donate(opportunityId, recipientAddress, {
        value: amountInWei,
      });
      
      // Wait for transaction to be mined
      const receipt = await tx.wait();
      
      const donationTransaction: DonationTransaction = {
        opportunityId,
        amount,
        currency: "ETH",
        recipientAddress,
        timestamp: Math.floor(Date.now() / 1000),
        transactionHash: receipt.transactionHash,
        status: "confirmed",
      };
      
      toast({
        title: "Donation Successful",
        description: "Your donation has been processed successfully.",
      });
      
      return donationTransaction;
    } catch (error) {
      console.error("Donation failed:", error);
      toast({
        title: "Donation Failed",
        description: "There was an error processing your donation. Please try again.",
        variant: "destructive",
      });
      return null;
    }
  };

  // Function to upload proof to IPFS
  const uploadProof = async (files: File[], metadata: Record<string, any>): Promise<string[]> => {
    // In a real implementation, this would connect to IPFS via a service like Pinata or nft.storage
    // For this example, we're simulating the upload
    
    try {
      // Simulate IPFS upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate mock CIDs for the uploaded files
      const cids = files.map((_, index) => 
        `Qm${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`
      );
      
      toast({
        title: "Proof Uploaded",
        description: `Successfully uploaded ${files.length} file(s) to decentralized storage.`,
      });
      
      return cids;
    } catch (error) {
      console.error("Failed to upload proof:", error);
      toast({
        title: "Upload Failed",
        description: "Failed to upload proof to decentralized storage.",
        variant: "destructive",
      });
      return [];
    }
  };

  // Function to verify a proof from IPFS
  const verifyProof = async (proofCid: string): Promise<boolean> => {
    // In a real implementation, this would verify the proof by checking its existence and integrity
    // For this example, we're simulating the verification
    
    try {
      // Simulate verification delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Always return true for this example
      return true;
    } catch (error) {
      console.error("Failed to verify proof:", error);
      return false;
    }
  };

  const contextValue: Web3ContextProps = {
    isConnected,
    address: address || null,
    chainId: chain?.id || null,
    connectWallet,
    disconnectWallet,
    donate,
    uploadProof,
    verifyProof,
    isWrongNetwork,
    switchToCorrectNetwork,
    isMounted,
  };

  return <Web3Context.Provider value={contextValue}>{children}</Web3Context.Provider>;
};
