
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import FeaturedOpportunities from "../components/home/FeaturedOpportunities";
import { Shield, CheckCircle, TrendingUp, Zap, Users, Heart } from "lucide-react";
import AnimatedAppear from "../components/ui/AnimatedAppear";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

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

        {/* Stories Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <AnimatedAppear animation="fade-up">
                <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
                  Success Stories
                </h2>
              </AnimatedAppear>
              <AnimatedAppear animation="fade-up" delay={200}>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Real people, real dreams, real impact. See how donors have helped turn dreams into reality.
                </p>
              </AnimatedAppear>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <AnimatedAppear animation="fade-up" delay={100}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/placeholder.svg" 
                      alt="Education program in Ghana" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">Education for All</h3>
                    <p className="text-gray-600 mb-4">
                      "Thanks to donors like you, we've built three schools in rural Ghana, providing education to over 500 children."
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Ghana</span>
                      <span className="text-sm font-medium text-primary">$85,000 raised</span>
                    </div>
                  </div>
                </div>
              </AnimatedAppear>

              <AnimatedAppear animation="fade-up" delay={200}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/placeholder.svg" 
                      alt="Tech startup team" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">Tech Innovators</h3>
                    <p className="text-gray-600 mb-4">
                      "Our renewable energy startup secured funding to develop solar solutions for underserved communities in India."
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">India</span>
                      <span className="text-sm font-medium text-primary">$120,000 raised</span>
                    </div>
                  </div>
                </div>
              </AnimatedAppear>

              <AnimatedAppear animation="fade-up" delay={300}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src="/placeholder.svg" 
                      alt="Clean water project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-medium mb-2">Clean Water Initiative</h3>
                    <p className="text-gray-600 mb-4">
                      "We've provided clean water access to 15 villages in Tanzania, improving health outcomes for thousands."
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Tanzania</span>
                      <span className="text-sm font-medium text-primary">$65,000 raised</span>
                    </div>
                  </div>
                </div>
              </AnimatedAppear>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedAppear animation="fade-right">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/placeholder.svg" 
                      alt="People collaborating" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <Users size={20} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Join Our Community</h3>
                          <p className="text-sm text-gray-500">Connect with dreamers and donors</p>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        Whether you want to support a cause or share your own dream, our community is here to help make it happen.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedAppear>

              <AnimatedAppear animation="fade-left" delay={200}>
                <div className="lg:pl-8">
                  <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                    Ready to make dreams come true?
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Join Fuel My Dream today. Whether you want to support incredible causes or share your own vision with the world, you're in the right place.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <div className="flex">
                      <div className="mr-4 text-primary">
                        <Heart size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Become a Donor</h3>
                        <p className="text-sm text-gray-600">
                          Support verified causes with transparent impact tracking
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mr-4 text-primary">
                        <Zap size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Become a Recipient</h3>
                        <p className="text-sm text-gray-600">
                          Share your dream and connect with supporters
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <Link to="/donor-dashboard">
                      <Button size="lg">
                        Become a Donor
                      </Button>
                    </Link>
                    <Link to="/recipient-onboarding">
                      <Button variant="outline" size="lg">
                        Become a Recipient
                      </Button>
                    </Link>
                  </div>
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
                      <Link to="/donor-dashboard" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-white hover:bg-gray-100 transition-colors">
                        Become a Donor
                      </Link>
                      <Link to="/recipient-onboarding" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white/10 transition-colors">
                        Become a Recipient
                      </Link>
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
