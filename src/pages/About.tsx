
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-display font-medium mb-6">About ProofOfScope</h1>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <p className="text-gray-600">
              ProofOfScope is a decentralized donation platform that enables individuals to support 
              verified recipients using cryptocurrency, ensuring transparency and minimal transaction fees.
              More details about our mission and team will be available here soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
