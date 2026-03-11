import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Experiences from "./pages/Experiences";
import SMEListings from "./pages/SMEListings";
import NganyaExperience from "./pages/NganyaExperience";
import AIPlanner from "./pages/AIPlanner";
import SMEDashboard from "./pages/SMEDashboard";
import CountyDashboard from "./pages/CountyDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/sme-listings" element={<SMEListings />} />
          <Route path="/nganya" element={<NganyaExperience />} />
          <Route path="/ai-planner" element={<AIPlanner />} />
          <Route path="/sme-dashboard" element={<SMEDashboard />} />
          <Route path="/county-dashboard" element={<CountyDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
