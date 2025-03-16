
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Account = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24 px-6 pt-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-display font-medium mb-6">My Account</h1>
          <div className="bg-white rounded-lg shadow-sm p-6 border">
            <p className="text-gray-600">Manage your Fuel My Dream account preferences, profile, and settings here.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
