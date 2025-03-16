
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygonMumbai, polygon } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { Web3Provider } from "@/lib/web3/Web3Provider";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RecipientOnboarding from "./pages/RecipientOnboarding";
import Account from "./pages/Account";
import HowItWorks from "./pages/HowItWorks";
import Opportunities from "./pages/Opportunities";
import Opportunity from "./pages/Opportunity";
import About from "./pages/About";
import DonorDashboard from "./pages/DonorDashboard";
import Donate from "./pages/Donate";

const queryClient = new QueryClient();

// Configure Web3Modal
const projectId = "YOUR_WC_PROJECT_ID"; // Replace with your WalletConnect projectId

const { chains, publicClient } = configureChains(
  [mainnet, polygon, polygonMumbai],
  [publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WagmiConfig config={wagmiConfig}>
      <Web3Provider>
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
              <Route path="/opportunity/:id" element={<Opportunity />} />
              <Route path="/donate/:id" element={<Donate />} />
              <Route path="/about" element={<About />} />
              <Route path="/donor-dashboard" element={<DonorDashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </Web3Provider>
    </WagmiConfig>
    <Web3Modal projectId={projectId} ethereumClient={wagmiConfig.connector as any} />
  </QueryClientProvider>
);

export default App;
