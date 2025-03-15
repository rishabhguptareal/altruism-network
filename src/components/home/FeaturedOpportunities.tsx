
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedAppear from "../ui/AnimatedAppear";
import OpportunityCard from "./OpportunityCard";
import Button from "../common/Button";
import { getFeaturedOpportunities } from "@/lib/data";

const FeaturedOpportunities = () => {
  const featuredOpportunities = useMemo(() => getFeaturedOpportunities(), []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <AnimatedAppear animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
              Featured Opportunities
            </h2>
          </AnimatedAppear>
          <AnimatedAppear animation="fade-up" delay={200}>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover verified causes that need your support. Every donation is tracked on the blockchain for
              complete transparency and accountability.
            </p>
          </AnimatedAppear>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredOpportunities.map((opportunity, index) => (
            <OpportunityCard 
              key={opportunity.id} 
              opportunity={opportunity} 
              index={index} 
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <AnimatedAppear animation="fade-up" delay={400}>
            <Link to="/opportunities">
              <Button 
                variant="outline" 
                rightIcon={<ArrowRight size={16} />}
              >
                View All Opportunities
              </Button>
            </Link>
          </AnimatedAppear>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOpportunities;
