import { Star, MapPin, Clock } from 'lucide-react';
import { getImage } from './ImageMap';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  description: string;
  location: string;
  duration: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  onBook?: () => void;
}

export default function ExperienceCard({ title, description, location, duration, price, currency, rating, reviewCount, image, category, onBook }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[1.15rem] border border-border/80 bg-card shadow-warm transition-all hover:shadow-elevated"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={getImage(image)} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/38 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute left-3 top-3 rounded-full gradient-sunset px-3 py-1 text-xs font-semibold text-primary-foreground shadow-[0_8px_20px_rgba(245,117,23,0.24)]">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-1 text-lg font-semibold text-card-foreground">{title}</h3>
        <p className="mb-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{description}</p>
        <div className="mb-4 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{location}</span>
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{duration}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-lg font-bold text-primary">{currency} {price.toLocaleString()}</span>
            <div className="mt-1 flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
              <span className="text-xs font-medium text-foreground">{rating}</span>
              <span className="text-xs text-muted-foreground">({reviewCount})</span>
            </div>
          </div>
          <button onClick={onBook} className="rounded-xl gradient-sunset px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_22px_rgba(245,117,23,0.2)] transition-all hover:-translate-y-0.5 hover:opacity-95">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
