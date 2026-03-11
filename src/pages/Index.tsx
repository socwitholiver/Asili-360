import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Star, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { getImage } from '@/components/ImageMap';
import ExperienceCard from '@/components/ExperienceCard';
import ReviewCard from '@/components/ReviewCard';
import BookingModal from '@/components/BookingModal';
import { experiences, destinations, reviews } from '@/data/mockData';

export default function Index() {
  const [search, setSearch] = useState('');
  const [bookingModal, setBookingModal] = useState<{ open: boolean; title: string; price: number } | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={getImage('hero-savannah')} alt="Kenya Savannah" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4"
          >
            Discover the Essence of <span className="text-gradient-sunset">Kenya</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 font-body"
          >
            AI-powered travel experiences connecting you with artisans, culture, and adventure
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-2 bg-card/95 backdrop-blur-lg rounded-xl p-2 max-w-2xl mx-auto shadow-elevated"
          >
            <Search className="h-5 w-5 text-muted-foreground ml-3" />
            <input
              type="text"
              placeholder="Search experiences, safaris, food tours..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground py-3 font-body"
            />
            <button className="gradient-sunset text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Explore
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6 mt-6 text-primary-foreground/70 text-sm"
          >
            <span>🏔️ 50+ Experiences</span>
            <span>🎨 10+ Artisans</span>
            <span>🚐 Nganya Rides</span>
          </motion.div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground">Featured Experiences</h2>
              <p className="text-muted-foreground mt-1">Handpicked adventures across Kenya</p>
            </div>
            <Link to="/experiences" className="flex items-center gap-1 text-primary font-medium text-sm hover:underline">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.slice(0, 3).map((exp, i) => (
              <motion.div key={exp.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
                <ExperienceCard
                  {...exp}
                  onBook={() => setBookingModal({ open: true, title: exp.title, price: exp.price })}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-2 text-center">Popular Destinations</h2>
          <p className="text-muted-foreground text-center mb-10">Explore Kenya's most loved regions</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group relative h-40 rounded-xl overflow-hidden cursor-pointer"
              >
                <img src={getImage(dest.image)} alt={dest.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="font-display font-semibold text-primary-foreground text-sm">{dest.name}</p>
                  <p className="text-xs text-primary-foreground/70">{dest.experiences} experiences</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Planner CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="gradient-sunset rounded-2xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
            <Sparkles className="h-12 w-12 text-primary-foreground mx-auto mb-4 relative" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3 relative">AI Travel Planner</h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-6 relative">
              Tell us your budget, interests, and days — and we'll craft your perfect Kenyan adventure
            </p>
            <Link
              to="/ai-planner"
              className="inline-flex items-center gap-2 bg-card text-foreground px-8 py-3 rounded-xl font-semibold hover:bg-card/90 transition-colors relative"
            >
              Plan My Trip <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-display text-3xl font-bold text-foreground mb-2 text-center">What Travelers Say</h2>
          <p className="text-muted-foreground text-center mb-10">Real experiences from our community</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.slice(0, 6).map(r => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </section>

      {bookingModal && (
        <BookingModal
          open={bookingModal.open}
          onClose={() => setBookingModal(null)}
          experienceTitle={bookingModal.title}
          price={bookingModal.price}
          currency="KES"
        />
      )}
    </div>
  );
}
