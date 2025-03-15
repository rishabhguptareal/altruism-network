
import { useParams, Link, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Clock, 
  Shield, 
  FileText, 
  Image as ImageIcon,
  ExternalLink,
  Heart
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/common/Button";
import AnimatedAppear from "../components/ui/AnimatedAppear";
import { getOpportunityById, getRecipientByOpportunityId } from "@/lib/data";

const Opportunity = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const opportunity = useMemo(() => getOpportunityById(id || ""), [id]);
  const recipient = useMemo(() => getRecipientByOpportunityId(id || ""), [id]);
  
  if (!opportunity || !recipient) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Opportunity not found</h2>
          <p className="mb-6">The opportunity you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }
  
  const percentFunded = Math.round((opportunity.raisedAmount / opportunity.goalAmount) * 100);
  const daysRemaining = Math.floor(Math.random() * 25) + 5; // Mock: random days between 5-30

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          <AnimatedAppear animation="fade-up">
            <Link to="/opportunities" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
              <ArrowLeft size={16} className="mr-2" /> Back to Opportunities
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                  {/* Image Gallery */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={opportunity.proofUrls[0] || "/placeholder.svg"} 
                      alt={opportunity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="chip bg-black/80 text-white">
                        {opportunity.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h1 className="text-3xl md:text-4xl font-display font-medium mb-4">
                      {opportunity.title}
                    </h1>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin size={16} className="mr-1" />
                        {opportunity.location.global ? 'Global Initiative' : `${opportunity.location.city || ''} ${opportunity.location.country}`}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar size={16} className="mr-1" />
                        Created {new Date(opportunity.createdAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock size={16} className="mr-1" />
                        {daysRemaining} days left
                      </div>
                    </div>
                    
                    <div className="prose max-w-none mb-8">
                      <p className="text-lg font-medium mb-4">{opportunity.summary}</p>
                      <p>{opportunity.description}</p>
                    </div>
                    
                    <div className="mb-10">
                      <h3 className="text-xl font-medium mb-4">How $1,000 Would Help</h3>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <p className="text-gray-700">{opportunity.impact}</p>
                      </div>
                    </div>
                    
                    <div className="mb-10">
                      <h3 className="text-xl font-medium mb-4">Proof & Verification</h3>
                      <div className="flex items-center mb-4">
                        <Shield size={20} className="mr-2 text-green-600" />
                        <span className="text-green-600 font-medium">Recipient Identity Verified</span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                        {opportunity.proofUrls.map((url, index) => (
                          <div key={index} className="aspect-square rounded-lg overflow-hidden border border-gray-100">
                            <img 
                              src={url} 
                              alt={`Proof ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {['Verified Identity', 'Background Check', 'Work Proof', 'Financial Transparency'].map((item, index) => (
                          <span key={index} className="chip bg-green-100 text-green-800">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium mb-4">Recipient Information</h3>
                      <div className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6">
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                          {recipient.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-medium">{recipient.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">Verified Recipient since {new Date(recipient.createdAt).toLocaleDateString()}</p>
                          <p className="text-sm">{recipient.biography}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm p-6">
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">${opportunity.raisedAmount.toLocaleString()}</span>
                        <span className="text-gray-500">of ${opportunity.goalAmount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
                        <div 
                          className="bg-primary h-3 rounded-full transition-all duration-1000" 
                          style={{ width: `${percentFunded}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>{percentFunded}% Funded</span>
                        <span className="text-gray-500">{daysRemaining} days left</span>
                      </div>
                    </div>
                    
                    <Link to={`/donate/${opportunity.id}`}>
                      <Button fullWidth size="lg" className="mb-4">
                        Donate Now
                      </Button>
                    </Link>
                    
                    <Button variant="outline" fullWidth leftIcon={<Heart size={16} />} className="mb-6">
                      Save to Favorites
                    </Button>
                    
                    <div className="p-4 bg-gray-50 rounded-xl mb-6">
                      <h4 className="font-medium mb-2">Transaction Details</h4>
                      <div className="text-sm">
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Platform fee</span>
                          <span>5%</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-100">
                          <span className="text-gray-600">Blockchain fee</span>
                          <span>Variable</span>
                        </div>
                        <div className="flex justify-between py-2">
                          <span className="text-gray-600">Recipient receives</span>
                          <span>95% of donation</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <FileText size={16} className="mr-2 text-gray-500" />
                        <span>Verified through KYC</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ImageIcon size={16} className="mr-2 text-gray-500" />
                        <span>Visual proof provided</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <ExternalLink size={16} className="mr-2 text-gray-500" />
                        <span>Smart contract tracked</span>
                      </div>
                    </div>
                  </div>
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

export default Opportunity;
