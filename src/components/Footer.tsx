import { Facebook, Instagram, Linkedin, MapPin, Sparkles, Youtube } from 'lucide-react';

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: Instagram },
  { label: 'Facebook', href: 'https://facebook.com', icon: Facebook },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'YouTube', href: 'https://youtube.com', icon: Youtube },
];

const footerHighlights = ['Authentic local experiences', 'SME visibility tools', 'AI-powered travel discovery'];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night-sky py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,117,23,0.22),transparent_38%)] opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(143,170,72,0.16),transparent_32%)]" />
      <div className="container relative mx-auto px-4">
        <div className="footer-brand-shell mx-auto flex max-w-4xl flex-col items-center rounded-[2rem] border border-white/10 px-6 py-10 text-center md:px-12">
          <img src="/logo.png" alt="ASILI360 logo" className="h-24 w-auto object-contain md:h-28" />

          <div className="mt-5 space-y-3 text-white">
            <p className="text-sm uppercase tracking-[0.28em] text-white">Experience platform</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Discover the Essence of Kenya</h2>
            <p className="mx-auto max-w-2xl text-sm leading-7 text-white md:text-base">
              Asili360 connects travelers with unforgettable destinations, cultural encounters, artisan-led experiences,
              and local businesses across Kenya through one warm, modern discovery platform.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {footerHighlights.map((item) => (
              <div key={item} className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm text-white">
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2">
              <MapPin className="h-4 w-4 text-white" />
              <span>Built for Kenyan tourism, culture, and community enterprise</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2">
              <Sparkles className="h-4 w-4 text-white" />
              <span>Designed for travelers, counties, and SMEs</span>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white transition-all hover:-translate-y-0.5 hover:bg-white/14"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="mt-8 space-y-2 text-white">
            <p className="text-sm text-white">Built to spotlight Kenyan travel, culture, and local enterprise.</p>
            <p className="text-sm font-medium tracking-[0.08em] text-white">Developed by Bug Busters,2026</p>
            <p className="text-xs tracking-[0.18em] text-white">COPYRIGHT 2026 ASILI360. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
