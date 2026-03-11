import logo from '../../images/logo-nav.png';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night-sky py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,117,23,0.22),transparent_38%)] opacity-80" />
      <div className="container relative mx-auto px-4">
        <div className="footer-brand-shell flex flex-col items-center gap-8 rounded-[2rem] border border-white/10 px-6 py-8 md:flex-row md:items-end md:justify-between md:px-10">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <img src={logo} alt="ASILI360 logo" className="h-20 w-auto object-contain md:h-24" />
            <div className="space-y-1 text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.24em] text-primary-foreground/55">Experience platform</p>
              <p className="text-base text-primary-foreground/78">Discover the Essence of Kenya</p>
            </div>
          </div>
          <div className="space-y-2 text-center md:text-right">
            <p className="text-sm text-primary-foreground/72">Built to spotlight Kenyan travel, culture, and local enterprise.</p>
            <p className="text-xs tracking-[0.18em] text-primary-foreground/38">COPYRIGHT 2026 ASILI360. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
