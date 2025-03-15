
import { Link } from "react-router-dom";
import { DonationOpportunity } from "@/lib/types";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import AnimatedAppear from "../ui/AnimatedAppear";
import { cn } from "@/lib/utils";

interface OpportunityCardProps {
  opportunity: DonationOpportunity;
  index: number;
  className?: string;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ 
  opportunity, 
  index,
  className 
}) => {
  const percentFunded = Math.round((opportunity.raisedAmount / opportunity.goalAmount) * 100);
  
  // Calculate days remaining (mock: random days between 5-30)
  const daysRemaining = Math.floor(Math.random() * 25) + 5;
  
  return (
    <AnimatedAppear 
      animation="fade-up" 
      delay={150 * index} 
      className={cn("card-hover", className)}
    >
      <Link 
        to={`/opportunity/${opportunity.id}`} 
        className="block h-full rounded-2xl border border-gray-100 bg-white overflow-hidden transition-shadow"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute top-3 left-3 z-10">
            <span className="chip bg-black/80 text-white">
              {opportunity.category}
            </span>
          </div>
          <img 
            src={opportunity.proofUrls[0] || '/placeholder.svg'} 
            alt={opportunity.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-medium leading-tight line-clamp-2">
              {opportunity.title}
            </h3>
          </div>
          
          <div className="mb-3 flex items-center text-sm text-gray-500">
            <MapPin size={14} className="mr-1" /> 
            {opportunity.location.global ? 'Global Initiative' : `${opportunity.location.city || ''} ${opportunity.location.country}`}
          </div>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {opportunity.summary}
          </p>
          
          <div className="mt-4 mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">${opportunity.raisedAmount.toLocaleString()}</span>
              <span className="text-gray-500">of ${opportunity.goalAmount.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${percentFunded}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-sm text-gray-500">
              <Clock size={14} className="mr-1" /> 
              <span>{daysRemaining} days left</span>
            </div>
            <div className="text-primary flex items-center text-sm font-medium">
              Details <ArrowRight size={14} className="ml-1" />
            </div>
          </div>
        </div>
      </Link>
    </AnimatedAppear>
  );
};

export default OpportunityCard;
