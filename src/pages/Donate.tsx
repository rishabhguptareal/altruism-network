
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useMemo } from "react";
import { ArrowLeft, Shield, Info } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedAppear from "@/components/ui/AnimatedAppear";
import DonateForm from "@/components/blockchain/DonateForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getOpportunityById } from "@/lib/data";

const Donate = () => {
  const { id } = useParams<{ id: string }>();
  
  const opportunity = useMemo(() => getOpportunityById(id || ""), [id]);
  
  if (!opportunity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Opportunity not found</h2>
          <p className="mb-6">The opportunity you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          <AnimatedAppear animation="fade-up">
            <Link to={`/opportunity/${opportunity.id}`} className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
              <ArrowLeft size={16} className="mr-2" /> Back to Opportunity
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Donation Form */}
              <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-6">
                <h1 className="text-2xl md:text-3xl font-display font-medium mb-4">
                  Support This Project
                </h1>
                <p className="text-gray-600 mb-6">
                  You're making a donation to "{opportunity.title}". Your contribution will be sent directly to the recipient via blockchain.
                </p>
                
                <Alert className="mb-6">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Transparent Funding</AlertTitle>
                  <AlertDescription>
                    All donations are processed via a smart contract. You'll be able to track your donation on the blockchain.
                  </AlertDescription>
                </Alert>
                
                <DonateForm opportunity={opportunity} />
              </div>
              
              {/* Project Info */}
              <div>
                <div className="rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden mb-6">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={opportunity.proofUrls[0] || "/placeholder.svg"} 
                      alt={opportunity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-medium mb-2">{opportunity.title}</h2>
                    <p className="text-gray-600 mb-4">{opportunity.summary}</p>
                    <div className="flex items-center text-green-600">
                      <Shield size={16} className="mr-2" />
                      <span className="text-sm font-medium">Verified Recipient</span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="text-lg font-medium mb-3">Blockchain Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-0.5">
                        <Shield size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Smart Contract-Based</p>
                        <p className="text-sm text-gray-600">Your donation is processed by a smart contract, ensuring it goes directly to the recipient.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-0.5">
                        <Shield size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Immutable Proof</p>
                        <p className="text-sm text-gray-600">All project proofs are stored on decentralized storage, ensuring they can't be altered.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="rounded-full bg-primary/10 p-1 mr-3 mt-0.5">
                        <Shield size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Transparent Tracking</p>
                        <p className="text-sm text-gray-600">Every donation is recorded on the blockchain, allowing full transparency.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedAppear>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
