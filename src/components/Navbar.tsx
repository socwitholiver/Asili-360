import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/experiences', label: 'Experiences' },
  { path: '/sme-listings', label: 'SME Marketplace' },
  { path: '/nganya', label: 'Nganya Rides' },
  { path: '/ai-planner', label: 'AI Planner' },
  { path: '/sme-dashboard', label: 'SME Dashboard' },
  { path: '/county-dashboard', label: 'County Dashboard' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 md:px-6">
      <div className="navbar-shell mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-background/78 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
        <div className="flex h-20 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-3" aria-label="ASILI360 home">
            <img src="/logo.png" alt="ASILI360 logo" className="h-12 w-auto object-contain md:h-14" />
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-background/55 px-2 py-2 lg:flex">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-[0_8px_22px_rgba(245,117,23,0.28)]'
                      : 'text-muted-foreground hover:bg-white/10 hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-border/60 bg-background/60 p-2 text-foreground transition-colors hover:bg-muted lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border/70 bg-background/92 lg:hidden"
            >
              <div className="space-y-1 px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
