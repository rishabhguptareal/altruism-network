
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, ChevronRight, UserPlus, FileText, CreditCard, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue, 
} from "@/components/ui/select";
import { DonationCategory, ProofType } from "@/lib/types";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

// Define the validation schemas for each step
const basicInfoSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  bio: z.string().min(10, { message: "Biography must be at least 10 characters" }),
});

const opportunitySchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  summary: z.string().min(20, { message: "Summary must be at least 20 characters" }),
  description: z.string().min(50, { message: "Description must be at least 50 characters" }),
  impact: z.string().min(20, { message: "Impact description must be at least 20 characters" }),
  category: z.string({ required_error: "Please select a category" }),
  country: z.string().min(2, { message: "Country is required" }),
  city: z.string().optional(),
  isGlobal: z.boolean().default(false),
  proofType: z.string({ required_error: "Please select a proof type" }),
  goalAmount: z.coerce.number().min(100, { message: "Goal amount must be at least 100" }),
});

const walletSchema = z.object({
  walletAddress: z.string().min(26, { message: "Please enter a valid wallet address" }),
});

const IdentitySchema = z.object({
  proofOfIdentity: z.string().min(5, { message: "Please provide proof of identity" }),
  proofOfWork: z.string().min(5, { message: "Please provide proof of your work" }),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormStep = {
  title: string;
  description: string;
  icon: React.ReactNode;
  schema: z.ZodObject<any>;
};

const RecipientOnboarding: React.FC = () => {
  const { toast } = useToast();
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<any>({});
  
  // Initialize form with appropriate schema based on current step
  const getStepSchema = () => {
    return steps[step].schema;
  };

  const steps: FormStep[] = [
    {
      title: "Basic Information",
      description: "Tell us about yourself",
      icon: <UserPlus size={18} />,
      schema: basicInfoSchema,
    },
    {
      title: "Opportunity Details",
      description: "Describe your project",
      icon: <FileText size={18} />,
      schema: opportunitySchema,
    },
    {
      title: "Wallet Setup",
      description: "Configure your wallet",
      icon: <CreditCard size={18} />,
      schema: walletSchema,
    },
    {
      title: "Identity Verification",
      description: "Verify your identity",
      icon: <Shield size={18} />,
      schema: IdentitySchema,
    },
  ];

  const form = useForm<z.infer<typeof basicInfoSchema> | 
                        z.infer<typeof opportunitySchema> | 
                        z.infer<typeof walletSchema> | 
                        z.infer<typeof IdentitySchema>>({
    resolver: zodResolver(getStepSchema()),
    defaultValues: formData,
  });

  const handleStepSubmit = (data: any) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    
    if (step < steps.length - 1) {
      setStep(step + 1);
      form.reset(updatedData);
    } else {
      handleFinalSubmit(updatedData);
    }
  };

  const handleFinalSubmit = (data: any) => {
    console.log("Complete form data:", data);
    
    // Here you would typically send the data to your backend/blockchain
    // For now, we'll just show a success message
    toast({
      title: "Registration Submitted!",
      description: "Your recipient profile has been submitted for verification.",
    });
    
    // Optionally redirect to a success page or dashboard
  };

  const goToPreviousStep = () => {
    if (step > 0) {
      setStep(step - 1);
      form.reset({...formData});
    }
  };

  // Define category options
  const categoryOptions: DonationCategory[] = [
    'Education', 
    'Healthcare', 
    'Environment', 
    'Technology', 
    'Community', 
    'Arts', 
    'Emergency Relief',
    'Infrastructure',
    'Research'
  ];

  const proofTypeOptions: ProofType[] = [
    'Images',
    'Text',
    'Documents',
    'Video',
    'Multiple'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-medium mb-3">Become a Recipient</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Register as a verified recipient to start receiving donations for your cause
            </p>
          </div>

          {/* Step Progress */}
          <div className="mb-8">
            <div className="flex justify-between">
              {steps.map((s, i) => (
                <div 
                  key={i}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${i < step ? 'bg-primary text-white' : 
                      i === step ? 'bg-primary text-white' : 
                      'bg-gray-100 text-gray-500'}
                  `}>
                    {i < step ? <Check size={18} /> : s.icon}
                  </div>
                  <span className={`text-xs hidden md:block ${i <= step ? 'text-primary font-medium' : 'text-gray-500'}`}>
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full rounded-full"></div>
              <div 
                className="absolute top-0 left-0 h-1 bg-primary rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Current Step Title */}
          <div className="mb-6">
            <h2 className="text-xl font-medium">{steps[step].title}</h2>
            <p className="text-gray-500">{steps[step].description}</p>
          </div>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleStepSubmit)} className="space-y-6">
              {step === 0 && (
                <>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name or Organization Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name or organization" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Biography</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about yourself or your organization..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 1 && (
                <>
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Opportunity Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter a clear title for your project" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Summary</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="A brief summary of your project..." 
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Detailed Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide a detailed description of your project..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="impact"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How $1K Could Help</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Explain the impact that donations will make..." 
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categoryOptions.map((category) => (
                                <SelectItem key={category} value={category}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="proofType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Proof Type</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select proof type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {proofTypeOptions.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input placeholder="Country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="City" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="isGlobal"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="h-4 w-4 mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>This is a global initiative</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="goalAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Funding Goal ($)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            placeholder="e.g. 5000"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <Alert className="mb-6">
                    <AlertTitle>Important:</AlertTitle>
                    <AlertDescription>
                      Enter the wallet address where you would like to receive donations. 
                      Make sure this is correct as it cannot be changed easily once verified.
                    </AlertDescription>
                  </Alert>
                  
                  <FormField
                    control={form.control}
                    name="walletAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Wallet Address</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your cryptocurrency wallet address" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {step === 3 && (
                <>
                  <FormField
                    control={form.control}
                    name="proofOfIdentity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Proof of Identity</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide links to your identity verification documents..." 
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="proofOfWork"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Proof of Work</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide links or descriptions of your previous work, achievements, etc..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="agreeToTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <FormControl>
                          <input
                            type="checkbox"
                            checked={field.value}
                            onChange={field.onChange}
                            className="h-4 w-4 mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>I agree to the terms and conditions</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </>
              )}

              <div className="flex justify-between pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={goToPreviousStep}
                  disabled={step === 0}
                >
                  Back
                </Button>
                
                <Button type="submit">
                  {step < steps.length - 1 ? (
                    <>Next <ChevronRight className="ml-2 h-4 w-4" /></>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecipientOnboarding;
