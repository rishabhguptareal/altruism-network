
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-display font-medium mb-6">How It Works</h1>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <p className="text-gray-600">
              ProofOfScope connects donors directly with verified recipients through a transparent
              cryptocurrency-based platform. Detailed information about our process will be available here soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
