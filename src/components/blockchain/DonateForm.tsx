
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useWeb3 } from "@/lib/web3/Web3Provider";
import { useToast } from "@/hooks/use-toast";
import { DonationOpportunity } from "@/lib/types";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ConnectWalletButton from "./ConnectWalletButton";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  amount: z.string().min(1, "Amount is required").refine(
    (val) => {
      const num = parseFloat(val);
      return !isNaN(num) && num > 0;
    },
    { message: "Amount must be greater than 0" }
  ),
  currency: z.string().min(1, "Currency is required"),
});

interface DonateFormProps {
  opportunity: DonationOpportunity;
  onSuccess?: () => void;
}

const DonateForm: React.FC<DonateFormProps> = ({ opportunity, onSuccess }) => {
  const { isConnected, donate } = useWeb3();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      currency: "ETH",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!isConnected) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet to make a donation.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await donate(
        opportunity.id,
        values.amount,
        opportunity.recipientAddress
      );
      
      if (result) {
        toast({
          title: "Donation Successful",
          description: `You've donated ${values.amount} ${values.currency} to ${opportunity.title}.`,
        });
        form.reset();
        if (onSuccess) onSuccess();
      }
    } catch (error) {
      console.error("Donation error:", error);
      toast({
        title: "Donation Failed",
        description: "There was an error processing your donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {!isConnected ? (
        <div className="text-center py-4">
          <p className="mb-4 text-gray-600">Connect your wallet to make a donation</p>
          <ConnectWalletButton variant="default" fullWidth />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Donation Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="0.1" type="number" step="0.01" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="currency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Currency</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select cryptocurrency" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ETH">ETH</SelectItem>
                      <SelectItem value="USDC">USDC</SelectItem>
                      <SelectItem value="DAI">DAI</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Donate Now"
              )}
            </Button>
          </form>
        </Form>
      )}
      
      <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
        <p className="font-medium mb-2">How it works:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Your donation is processed via a smart contract</li>
          <li>95% goes directly to the recipient's wallet</li>
          <li>5% platform fee to support Fuel My Dream</li>
          <li>All transactions are recorded on the blockchain</li>
        </ul>
      </div>
    </div>
  );
};

export default DonateForm;
