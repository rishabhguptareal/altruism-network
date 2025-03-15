
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { Menu, X, Heart, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-xl font-display font-semibold tracking-tight transition-opacity hover:opacity-80"
          >
            ProofOfScope
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            to="/opportunities"
            className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
          >
            Opportunities
          </Link>
          <Link
            to="/how-it-works"
            className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
          >
            How It Works
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-gray-800 hover:text-black transition-colors"
          >
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/donor-dashboard">
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<Heart size={16} />}
              className="text-sm"
            >
              My Donations
            </Button>
          </Link>
          <Link to="/recipient-onboarding">
            <Button variant="outline" size="sm" className="text-sm">
              Create Project
            </Button>
          </Link>
          <Link to="/account">
            <Button
              variant="primary"
              size="sm"
              leftIcon={<User size={16} />}
              className="text-sm"
            >
              Account
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-24 px-6",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          <Link
            to="/"
            className="text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/opportunities"
            className="text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Opportunities
          </Link>
          <Link
            to="/how-it-works"
            className="text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <div className="pt-6 border-t border-gray-100">
            <Link to="/donor-dashboard" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="ghost"
                fullWidth
                leftIcon={<Heart size={18} />}
                className="justify-start mb-4"
              >
                My Donations
              </Button>
            </Link>
            <Link to="/recipient-onboarding" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="outline"
                fullWidth
                className="justify-start mb-4"
              >
                Create Project
              </Button>
            </Link>
            <Link to="/account" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="primary"
                fullWidth
                leftIcon={<User size={18} />}
                className="justify-start"
              >
                Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
