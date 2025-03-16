
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useWeb3 } from "@/lib/web3/Web3Provider";
import ConnectWalletButton from "@/components/blockchain/ConnectWalletButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ShieldCheck, AlertTriangle, Wallet, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedAppear from "@/components/ui/AnimatedAppear";

const Account = () => {
  const { isConnected, address, isWrongNetwork, chainId } = useWeb3();
  
  // Mock donation history data
  const mockDonations = [
    { 
      id: "don1", 
      projectName: "Clean Water Initiative", 
      amount: "0.5", 
      currency: "ETH", 
      date: "2023-09-15",
      txHash: "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
    },
    { 
      id: "don2", 
      projectName: "Education for All", 
      amount: "100", 
      currency: "USDC", 
      date: "2023-08-22",
      txHash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24 px-6 pt-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-display font-medium mb-8">My Account</h1>
          
          {!isConnected ? (
            <AnimatedAppear animation="fade-up">
              <Card className="mb-8">
                <CardHeader className="pb-3">
                  <CardTitle>Connect Your Wallet</CardTitle>
                  <CardDescription>
                    Connect your wallet to view your account and donations
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center py-6">
                  <ConnectWalletButton size="lg" />
                </CardContent>
              </Card>
            </AnimatedAppear>
          ) : (
            <AnimatedAppear animation="fade-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Wallet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <Wallet className="h-5 w-5 mr-2 text-primary" />
                      <span className="font-mono">{address?.slice(0, 10)}...{address?.slice(-8)}</span>
                    </div>
                    {isWrongNetwork ? (
                      <div className="mt-3 flex items-center text-red-500 text-sm">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        Unsupported network (Chain ID: {chainId})
                      </div>
                    ) : (
                      <div className="mt-3 flex items-center text-green-600 text-sm">
                        <ShieldCheck className="h-4 w-4 mr-1" />
                        Connected to supported network
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Donations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{mockDonations.length}</div>
                    <p className="text-gray-500 text-sm">Projects supported</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full justify-between">
                        Find Projects <ArrowRight className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-between">
                        Proof Verification <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Tabs defaultValue="donations" className="mb-8">
                <TabsList>
                  <TabsTrigger value="donations">My Donations</TabsTrigger>
                  <TabsTrigger value="favorites">Saved Projects</TabsTrigger>
                  <TabsTrigger value="transactions">Blockchain Transactions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="donations" className="p-4">
                  {mockDonations.length > 0 ? (
                    <div className="space-y-4">
                      {mockDonations.map((donation) => (
                        <Card key={donation.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <h3 className="font-medium">{donation.projectName}</h3>
                                <div className="flex items-center mt-1 text-sm text-gray-500">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {donation.date}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium">
                                  {donation.amount} {donation.currency}
                                </div>
                                <a 
                                  href={`https://etherscan.io/tx/${donation.txHash}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-primary hover:underline"
                                >
                                  View on Etherscan
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 mb-4">You haven't made any donations yet</p>
                      <Link to="/opportunities">
                        <Button>Find Projects to Support</Button>
                      </Link>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="favorites" className="p-4">
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">You haven't saved any projects yet</p>
                    <Link to="/opportunities">
                      <Button>Browse Projects</Button>
                    </Link>
                  </div>
                </TabsContent>
                
                <TabsContent value="transactions" className="p-4">
                  <div className="space-y-4">
                    {mockDonations.map((donation) => (
                      <Card key={`tx-${donation.id}`}>
                        <CardContent className="p-4">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div className="mb-2 md:mb-0">
                              <h3 className="font-medium text-sm font-mono">{donation.txHash.slice(0, 16)}...{donation.txHash.slice(-8)}</h3>
                              <div className="flex items-center mt-1 text-sm text-gray-500">
                                <Clock className="h-4 w-4 mr-1" />
                                {donation.date}
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">
                                Details
                              </Button>
                              <a 
                                href={`https://etherscan.io/tx/${donation.txHash}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button size="sm">
                                  Etherscan
                                </Button>
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
              
              <Card>
                <CardHeader>
                  <CardTitle>Blockchain Features</CardTitle>
                  <CardDescription>
                    Fuel My Dream leverages blockchain technology for transparency and trust
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="rounded-full bg-primary/10 p-2 w-fit mb-3">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-medium mb-1">Smart Contract Donations</h3>
                      <p className="text-sm text-gray-600">
                        All donations are processed via smart contracts, ensuring transparent and direct fund distribution.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="rounded-full bg-primary/10 p-2 w-fit mb-3">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-medium mb-1">Immutable Proof Storage</h3>
                      <p className="text-sm text-gray-600">
                        Project proof and evidence are stored on decentralized storage, ensuring they can't be altered.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="rounded-full bg-primary/10 p-2 w-fit mb-3">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-medium mb-1">Future DAO Governance</h3>
                      <p className="text-sm text-gray-600">
                        Coming soon: Decentralized governance allowing platform users to vote on key decisions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedAppear>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
