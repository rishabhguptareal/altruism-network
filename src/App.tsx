
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RecipientOnboarding from "./pages/RecipientOnboarding";
import Account from "./pages/Account";
import HowItWorks from "./pages/HowItWorks";
import Opportunities from "./pages/Opportunities";
import About from "./pages/About";
import DonorDashboard from "./pages/DonorDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recipient-onboarding" element={<RecipientOnboarding />} />
          <Route path="/account" element={<Account />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/about" element={<About />} />
          <Route path="/donor-dashboard" element={<DonorDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
