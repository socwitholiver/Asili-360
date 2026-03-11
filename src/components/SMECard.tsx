import { Star, MapPin } from 'lucide-react';
import { getImage } from './ImageMap';
import { motion } from 'framer-motion';
import type { SME } from '@/data/mockData';

interface Props {
  sme: SME;
  onBook?: () => void;
}

export default function SMECard({ sme, onBook }: Props) {
  const categoryColors: Record<string, string> = {
    artisan: 'bg-secondary text-secondary-foreground',
    guesthouse: 'bg-accent text-accent-foreground',
    food: 'bg-primary text-primary-foreground',
    nganya: 'bg-night-sky text-primary-foreground',
    safari: 'bg-savannah text-accent-foreground',
    cultural: 'bg-secondary text-secondary-foreground',
  };

  return (
    <motion.div whileHover={{ y: -4 }} className="group rounded-xl overflow-hidden bg-card shadow-warm border border-border">
      <div className="relative h-44 overflow-hidden">
        <img src={getImage(sme.image)} alt={sme.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold capitalize ${categoryColors[sme.category] || ''}`}>
          {sme.category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-card-foreground mb-1">{sme.name}</h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
          <MapPin className="h-3 w-3" />{sme.location}, {sme.county}
        </div>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{sme.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {sme.features.slice(0, 3).map(f => (
            <span key={f} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{f}</span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">{sme.currency} {sme.price.toLocaleString()}</span>
            <div className="flex items-center gap-1 mt-0.5">
              <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
              <span className="text-xs font-medium">{sme.rating}</span>
              <span className="text-xs text-muted-foreground">({sme.reviewCount})</span>
            </div>
          </div>
          <button onClick={onBook} className="gradient-sunset text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
