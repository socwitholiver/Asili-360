import { Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-night-sky py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Compass className="h-6 w-6 text-primary" />
            <span className="font-display text-lg font-bold text-primary-foreground">ASILI<span className="text-primary">360</span></span>
          </div>
          <p className="text-sm text-primary-foreground/60">Discover the Essence of Kenya</p>
          <p className="text-xs text-primary-foreground/40">© 2026 ASILI360. All rights reserved. Demo MVP.</p>
        </div>
      </div>
    </footer>
  );
}
