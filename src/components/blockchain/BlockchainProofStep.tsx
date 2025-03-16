
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useWeb3 } from "@/lib/web3/Web3Provider";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProofUploader from "./ProofUploader";
import ConnectWalletButton from "./ConnectWalletButton";
import { ChevronRight, Info, Check } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  walletAddress: z.string().min(26, { message: "Please enter a valid wallet address" }),
});

interface BlockchainProofStepProps {
  onNext: (data: any) => void;
  onPrevious: () => void;
  defaultValues?: any;
}

const BlockchainProofStep: React.FC<BlockchainProofStepProps> = ({
  onNext,
  onPrevious,
  defaultValues = {}
}) => {
  const { isConnected, address } = useWeb3();
  const [uploadedProofs, setUploadedProofs] = useState<string[]>([]);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      walletAddress: defaultValues.walletAddress || address || "",
    },
  });

  const handleUploadComplete = (cids: string[]) => {
    setUploadedProofs(cids);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onNext({
      ...values,
      proofCids: uploadedProofs
    });
  };

  return (
    <div className="space-y-6">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Blockchain Integration</AlertTitle>
        <AlertDescription>
          Your project proof will be stored on decentralized storage, making it immutable and verifiable by donors.
        </AlertDescription>
      </Alert>

      {!isConnected ? (
        <Card className="p-6 text-center">
          <h3 className="text-lg font-medium mb-4">Connect Your Wallet</h3>
          <p className="text-gray-600 mb-6">
            Connect your wallet to verify your identity and upload proof to the blockchain.
          </p>
          <ConnectWalletButton />
        </Card>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="walletAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wallet Address for Receiving Donations</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="0x..." 
                      {...field}
                      value={field.value || address || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-4">Upload Proof to Blockchain</h3>
              <p className="text-gray-600 mb-6">
                Upload documentation or evidence of your project. These files will be stored on decentralized storage (IPFS) 
                and be permanently linked to your project.
              </p>
              
              <ProofUploader 
                opportunityId="new-project"
                onUploadComplete={handleUploadComplete}
              />
              
              {uploadedProofs.length > 0 && (
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center text-green-700">
                    <Check size={16} className="mr-2" />
                    <span className="font-medium">Proof successfully uploaded to blockchain</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    {uploadedProofs.map((cid, index) => (
                      <div key={index} className="text-xs font-mono text-gray-600">
                        IPFS CID: {cid}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onPrevious}
              >
                Back
              </Button>
              
              <Button type="submit">
                Continue <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default BlockchainProofStep;
