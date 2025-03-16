
import React from "react";
import { Button } from "@/components/ui/button";
import { useWeb3 } from "@/lib/web3/Web3Provider";
import { Wallet, AlertTriangle } from "lucide-react";

interface ConnectWalletButtonProps {
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  fullWidth?: boolean;
  className?: string;
}

const ConnectWalletButton: React.FC<ConnectWalletButtonProps> = ({
  variant = "default",
  size = "default",
  fullWidth = false,
  className = "",
}) => {
  const { isConnected, address, connectWallet, disconnectWallet, isWrongNetwork, switchToCorrectNetwork, isMounted } = useWeb3();

  if (!isMounted) {
    return <Button 
      variant={variant} 
      size={size} 
      className={className}
      disabled
      style={fullWidth ? { width: '100%' } : {}}
    >
      Loading...
    </Button>;
  }

  if (isWrongNetwork) {
    return (
      <Button 
        variant="destructive" 
        size={size} 
        onClick={switchToCorrectNetwork}
        className={className}
        style={fullWidth ? { width: '100%' } : {}}
      >
        <AlertTriangle className="mr-2 h-4 w-4" />
        Switch Network
      </Button>
    );
  }

  if (isConnected && address) {
    return (
      <Button 
        variant="outline" 
        size={size} 
        onClick={disconnectWallet}
        className={className}
        style={fullWidth ? { width: '100%' } : {}}
      >
        <Wallet className="mr-2 h-4 w-4" />
        {address.slice(0, 6)}...{address.slice(-4)}
      </Button>
    );
  }

  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={connectWallet}
      className={className}
      style={fullWidth ? { width: '100%' } : {}}
    >
      <Wallet className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;
