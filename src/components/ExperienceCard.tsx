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
      whileHover={{ y: -4 }}
      className="group rounded-xl overflow-hidden bg-card shadow-warm border border-border transition-shadow hover:shadow-elevated"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={getImage(image)} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute top-3 left-3 gradient-sunset px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground">
          {category}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-card-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{location}</span>
          <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{duration}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-primary">{currency} {price.toLocaleString()}</span>
            <div className="flex items-center gap-1 mt-1">
              <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
              <span className="text-xs font-medium text-foreground">{rating}</span>
              <span className="text-xs text-muted-foreground">({reviewCount})</span>
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
