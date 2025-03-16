
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import AnimatedAppear from "../ui/AnimatedAppear";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0V20M0 1H20\' stroke=\'%23000000\' stroke-opacity=\'0.4\' stroke-width=\'0.5\'/%3E%3C/svg%3E")',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <AnimatedAppear animation="blur-in" delay={100}>
              <div className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-gray-900 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                Transparent Crypto Donations
              </div>
            </AnimatedAppear>

            <AnimatedAppear animation="fade-up" delay={200}>
              <h1 className="font-display font-medium mb-6">
                Fuel dreams with transparent and direct support
              </h1>
            </AnimatedAppear>

            <AnimatedAppear animation="fade-up" delay={400}>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                A decentralized platform that connects dreamers with supporters using cryptocurrency, 
                ensuring your contributions create real impact with full transparency and minimal fees.
              </p>
            </AnimatedAppear>

            <AnimatedAppear animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/donor-dashboard">
                  <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                    Become a Donor
                  </Button>
                </Link>
                <Link to="/recipient-onboarding">
                  <Button variant="outline" size="lg">
                    Become a Recipient
                  </Button>
                </Link>
              </div>
            </AnimatedAppear>

            <AnimatedAppear animation="fade-in" delay={900}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-6 sm:space-y-0 sm:space-x-10">
                <div className="flex items-center">
                  <div className="text-3xl font-display font-medium">100%</div>
                  <div className="ml-2 text-sm text-gray-600">Transparent<br />Transactions</div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl font-display font-medium">5%</div>
                  <div className="ml-2 text-sm text-gray-600">Platform<br />Fee</div>
                </div>
                <div className="flex items-center">
                  <div className="text-3xl font-display font-medium">24/7</div>
                  <div className="ml-2 text-sm text-gray-600">Blockchain<br />Verification</div>
                </div>
              </div>
            </AnimatedAppear>
          </div>

          <div className="relative">
            <AnimatedAppear animation="scale-in" delay={300}>
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg">
                  <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
                  <div className="absolute -bottom-8 right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>
                  
                  <div className="relative">
                    <div className="glassmorphism rounded-2xl p-8 shadow-lg">
                      <div className="flex flex-col space-y-8">
                        <div className="bg-white rounded-xl shadow-sm p-4">
                          <div className="text-sm font-medium mb-1">Clean Water Initiative</div>
                          <div className="text-xs text-gray-500 mb-3">Tanzania</div>
                          <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>$12,500</span>
                            <span className="text-gray-500">of $50,000</span>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-sm p-4">
                          <div className="text-sm font-medium mb-1">Coding Bootcamp</div>
                          <div className="text-xs text-gray-500 mb-3">Mexico City</div>
                          <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>$45,000</span>
                            <span className="text-gray-500">of $75,000</span>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-sm p-4">
                          <div className="text-sm font-medium mb-1">Reforestation Project</div>
                          <div className="text-xs text-gray-500 mb-3">Brazil</div>
                          <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
                            <div className="bg-primary h-2 rounded-full" style={{ width: '28%' }}></div>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>$28,000</span>
                            <span className="text-gray-500">of $100,000</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedAppear>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
