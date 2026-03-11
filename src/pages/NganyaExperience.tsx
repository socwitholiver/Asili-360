import { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Camera, Zap, Users } from 'lucide-react';
import { getImage } from '@/components/ImageMap';
import BookingModal from '@/components/BookingModal';
import ReviewCard from '@/components/ReviewCard';
import { smes, reviews } from '@/data/mockData';

const nganyaRides = smes.filter(s => s.category === 'nganya');
const nganyaReviews = reviews.filter(r => ['s4', 's8'].includes(r.smeId));

export default function NganyaExperience() {
  const [bookingModal, setBookingModal] = useState<{ open: boolean; title: string; price: number } | null>(null);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={getImage('nganya-ride')} alt="Nganya" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-3">
            Nganya <span className="text-gradient-sunset">Culture</span>
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Experience Nairobi's legendary matatu culture — graffiti art on wheels, booming sound systems, and neon-lit night rides
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-night-sky">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Music, label: 'Live DJ & Music', desc: 'Curated playlists' },
              { icon: Camera, label: 'Graffiti Art', desc: 'Instagram-worthy' },
              { icon: Zap, label: 'Neon Lights', desc: 'LED experience' },
              { icon: Users, label: 'Night Tours', desc: '3-hour rides' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="text-center">
                <Icon className="h-10 w-10 text-primary mx-auto mb-2" />
                <p className="font-semibold text-primary-foreground text-sm">{label}</p>
                <p className="text-xs text-primary-foreground/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rides */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">Available Nganya Rides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nganyaRides.map(ride => (
              <motion.div key={ride.id} whileHover={{ y: -4 }} className="flex gap-4 bg-card border border-border rounded-xl p-4 shadow-warm">
                <img src={getImage(ride.image)} alt={ride.name} className="w-32 h-32 rounded-lg object-cover" />
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-card-foreground">{ride.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{ride.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {ride.features.map(f => (
                      <span key={f} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{f}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-primary">{ride.currency} {ride.price.toLocaleString()}</span>
                    <button
                      onClick={() => setBookingModal({ open: true, title: ride.name, price: ride.price })}
                      className="gradient-sunset text-primary-foreground px-4 py-1.5 rounded-lg text-sm font-semibold"
                    >
                      Book Seat
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">Rider Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nganyaReviews.map(r => <ReviewCard key={r.id} review={r} />)}
          </div>
        </div>
      </section>

      {bookingModal && (
        <BookingModal open={bookingModal.open} onClose={() => setBookingModal(null)} experienceTitle={bookingModal.title} price={bookingModal.price} currency="KES" />
      )}
    </div>
  );
}
