import { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '@/components/ExperienceCard';
import BookingModal from '@/components/BookingModal';
import { experiences } from '@/data/mockData';

const categories = ['All', 'Safari', 'Cultural', 'Nightlife', 'Beach', 'Food'];

export default function Experiences() {
  const [category, setCategory] = useState('All');
  const [bookingModal, setBookingModal] = useState<{ open: boolean; title: string; price: number } | null>(null);

  const filtered = category === 'All' ? experiences : experiences.filter(e => e.category === category);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">Discover Experiences</h1>
        <p className="text-muted-foreground mb-8">Curated adventures across Kenya</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === cat ? 'gradient-sunset text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((exp, i) => (
            <motion.div key={exp.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <ExperienceCard {...exp} onBook={() => setBookingModal({ open: true, title: exp.title, price: exp.price })} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No experiences found in this category.</p>
        )}
      </div>

      {bookingModal && (
        <BookingModal open={bookingModal.open} onClose={() => setBookingModal(null)} experienceTitle={bookingModal.title} price={bookingModal.price} currency="KES" />
      )}
    </div>
  );
}
