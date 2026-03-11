import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StartupSplash from "@/components/StartupSplash";
import Index from "./pages/Index";
import Experiences from "./pages/Experiences";
import SMEListings from "./pages/SMEListings";
import NganyaExperience from "./pages/NganyaExperience";
import AIPlanner from "./pages/AIPlanner";
import SMEDashboard from "./pages/SMEDashboard";
import CountyDashboard from "./pages/CountyDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const SPLASH_DURATION_MS = 1800;

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsSplashVisible(false);
    }, SPLASH_DURATION_MS);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <StartupSplash visible={isSplashVisible} />
        <motion.div
          initial={false}
          animate={{ opacity: isSplashVisible ? 0 : 1, scale: isSplashVisible ? 0.985 : 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen"
          aria-hidden={isSplashVisible}
        >
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
        </motion.div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
