import { useDeferredValue, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { getImage } from '@/components/ImageMap';
import ExperienceCard from '@/components/ExperienceCard';
import ReviewCard from '@/components/ReviewCard';
import BookingModal from '@/components/BookingModal';
import { experiences, destinations, reviews } from '@/data/mockData';

interface BookingModalState {
  open: boolean;
  title: string;
  price: number;
}

export default function Index() {
  const [search, setSearch] = useState('');
  const [bookingModal, setBookingModal] = useState<BookingModalState | null>(null);
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());

  const featuredExperiences = useMemo(() => {
    if (!deferredSearch) {
      return experiences.slice(0, 3);
    }

    return experiences
      .filter((experience) => {
        const searchableText = [
          experience.title,
          experience.description,
          experience.location,
          experience.category,
          ...experience.highlights,
        ]
          .join(' ')
          .toLowerCase();

        return searchableText.includes(deferredSearch);
      })
      .slice(0, 3);
  }, [deferredSearch]);

  return (
    <div className="min-h-screen">
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-4 pb-18 pt-28 md:pb-20 md:pt-32">
        <img src={getImage('hero-savannah')} alt="Kenya savannah" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/24 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,194,77,0.18),transparent_38%)]" />
        <div className="absolute left-1/2 top-[22%] h-44 w-44 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-logo-shell mx-auto mb-8 w-fit rounded-[2rem] px-4 py-4 md:px-6 md:py-5"
          >
            <img src="/logo.png" alt="ASILI360 brand mark" className="h-24 w-auto object-contain sm:h-28 md:h-36" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-primary-foreground/70"
          >
            Travel. Culture. Community.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display mb-5 text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-7xl"
          >
            Discover the Essence of <span className="text-gradient-sunset">Kenya</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-body mx-auto mb-10 max-w-2xl text-base leading-8 text-primary-foreground/85 sm:text-lg md:text-xl"
          >
            AI-powered travel experiences connecting you with artisans, culture, and adventure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mx-auto flex w-full max-w-2xl flex-col gap-2 rounded-[1.6rem] bg-card/94 p-2.5 shadow-elevated backdrop-blur-lg sm:flex-row sm:items-center"
          >
            <Search className="ml-3 hidden h-5 w-5 text-muted-foreground sm:block" />
            <input
              type="search"
              placeholder="Search experiences, safaris, food tours..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="font-body flex-1 bg-transparent px-3 py-3 text-foreground outline-none placeholder:text-muted-foreground sm:px-0"
              aria-label="Search experiences"
            />
            <a
              href="#featured-experiences"
              className="gradient-sunset rounded-xl px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground shadow-[0_10px_22px_rgba(245,117,23,0.2)] transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Explore
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm tracking-[0.12em] text-primary-foreground/72"
          >
            <span>50+ EXPERIENCES</span>
            <span>10+ ARTISANS</span>
            <span>NGANYA RIDES</span>
          </motion.div>
        </div>
      </section>

      <section id="featured-experiences" className="px-4 py-24">
        <div className="container mx-auto">
          <div className="mb-12 flex items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-accent">Featured</p>
              <h2 className="font-display text-3xl font-bold text-foreground">Featured Experiences</h2>
              <p className="mt-2 text-muted-foreground">
                {deferredSearch ? `Results for "${search}"` : 'Handpicked adventures across Kenya'}
              </p>
            </div>
            <Link to="/experiences" className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {featuredExperiences.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredExperiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ExperienceCard
                    {...experience}
                    onBook={() => setBookingModal({ open: true, title: experience.title, price: experience.price })}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 p-8 text-center">
              <p className="text-foreground">No experiences matched your search.</p>
              <p className="mt-1 text-sm text-muted-foreground">Try a broader term like safari, beach, or food.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-muted/50 px-4 py-20">
        <div className="container mx-auto">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.28em] text-accent">Explore</p>
          <h2 className="font-display mb-2 text-center text-3xl font-bold text-foreground">Popular Destinations</h2>
          <p className="mb-12 text-center text-muted-foreground">Explore Kenya's most loved regions</p>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative h-40 cursor-pointer overflow-hidden rounded-[1rem] shadow-warm"
              >
                <img
                  src={getImage(destination.image)}
                  alt={destination.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <p className="font-display text-sm font-semibold text-primary-foreground">{destination.name}</p>
                  <p className="text-xs text-primary-foreground/70">{destination.experiences} experiences</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="container mx-auto">
          <div className="gradient-sunset relative overflow-hidden rounded-[1.8rem] p-10 text-center shadow-[0_24px_70px_rgba(245,117,23,0.18)] md:p-16">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              }}
            />
            <p className="relative mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary-foreground/75">Planner</p>
            <Sparkles className="relative mx-auto mb-4 h-12 w-12 text-primary-foreground" />
            <h2 className="font-display relative mb-3 text-3xl font-bold text-primary-foreground md:text-4xl">AI Travel Planner</h2>
            <p className="relative mx-auto mb-6 max-w-lg text-primary-foreground/80">
              Tell us your budget, interests, and trip length, and we will craft your ideal Kenyan adventure.
            </p>
            <Link
              to="/ai-planner"
              className="relative inline-flex items-center gap-2 rounded-xl bg-card px-8 py-3 font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:bg-card/90"
            >
              Plan My Trip <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 px-4 py-20">
        <div className="container mx-auto">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.28em] text-accent">Stories</p>
          <h2 className="font-display mb-2 text-center text-3xl font-bold text-foreground">What Travelers Say</h2>
          <p className="mb-12 text-center text-muted-foreground">Real experiences from our community</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((review) => (
              <ReviewCard key={review.id} review={review} />
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
