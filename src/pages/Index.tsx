
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import FeaturedOpportunities from "../components/home/FeaturedOpportunities";
import { Shield, CheckCircle, TrendingUp, Zap } from "lucide-react";
import AnimatedAppear from "../components/ui/AnimatedAppear";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedOpportunities />

        {/* How It Works Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center mb-12">
              <AnimatedAppear animation="fade-up">
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
                  How It Works
                </h2>
              </AnimatedAppear>
              <AnimatedAppear animation="fade-up" delay={200}>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our platform combines the power of blockchain with thorough verification 
                  processes to ensure your donations reach those who need it most.
                </p>
              </AnimatedAppear>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <AnimatedAppear animation="fade-up" delay={100}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-5">
                    <Shield size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Recipient Verification</h3>
                  <p className="text-gray-600">
                    Recipients submit identity verification and proof of work to ensure legitimacy.
                  </p>
                </div>
              </AnimatedAppear>

              <AnimatedAppear animation="fade-up" delay={200}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-5">
                    <CheckCircle size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Transparent Donations</h3>
                  <p className="text-gray-600">
                    Every donation is recorded on the blockchain, creating a permanent record.
                  </p>
                </div>
              </AnimatedAppear>

              <AnimatedAppear animation="fade-up" delay={300}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-5">
                    <TrendingUp size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Minimal Fees</h3>
                  <p className="text-gray-600">
                    Only 5% platform fee, ensuring the majority of your donation reaches recipients.
                  </p>
                </div>
              </AnimatedAppear>

              <AnimatedAppear animation="fade-up" delay={400}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-5">
                    <Zap size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Direct Impact</h3>
                  <p className="text-gray-600">
                    Track your donations and see the real-world impact of your contributions.
                  </p>
                </div>
              </AnimatedAppear>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <AnimatedAppear animation="fade-up">
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
                  Donation Categories
                </h2>
              </AnimatedAppear>
              <AnimatedAppear animation="fade-up" delay={200}>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Support causes that align with your values across various categories.
                </p>
              </AnimatedAppear>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {[
                'Education', 'Healthcare', 'Environment', 'Technology', 
                'Community', 'Arts', 'Emergency Relief', 'Infrastructure'
              ].map((category, index) => (
                <AnimatedAppear key={category} animation="fade-up" delay={100 * index}>
                  <div className="bg-white border border-gray-100 rounded-xl p-4 text-center transition-all hover:shadow-md hover:-translate-y-1">
                    <h3 className="font-medium">{category}</h3>
                  </div>
                </AnimatedAppear>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="bg-gray-900 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <AnimatedAppear animation="fade-up">
                    <h2 className="text-3xl md:text-4xl font-display font-medium mb-6 text-white">
                      Ready to make a difference?
                    </h2>
                  </AnimatedAppear>
                  <AnimatedAppear animation="fade-up" delay={200}>
                    <p className="text-gray-300 mb-8">
                      Join our platform today to support verified causes or submit your own project
                      for funding. Every contribution matters, no matter how small.
                    </p>
                  </AnimatedAppear>
                  <AnimatedAppear animation="fade-up" delay={300}>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                      <a href="/opportunities" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-100 transition-colors">
                        Browse Opportunities
                      </a>
                      <a href="/recipient-onboarding" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white/10 transition-colors">
                        Create a Project
                      </a>
                    </div>
                  </AnimatedAppear>
                </div>
                <div className="hidden lg:block relative min-h-[400px]">
                  <img 
                    src="/placeholder.svg" 
                    alt="People collaborating" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
