import { Star } from 'lucide-react';
import { getTouristById, getSMEById, type Review } from '@/data/mockData';

export default function ReviewCard({ review }: { review: Review }) {
  const tourist = getTouristById(review.touristId);
  const sme = getSMEById(review.smeId);
  if (!tourist || !sme) return null;

  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{tourist.avatar}</span>
        <div>
          <p className="text-sm font-semibold text-card-foreground">{tourist.name}</p>
          <p className="text-xs text-muted-foreground">{tourist.city}, {tourist.country}</p>
        </div>
        <div className="ml-auto flex items-center gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-secondary text-secondary" />
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground italic">"{review.comment}"</p>
      <p className="text-xs text-muted-foreground/60 mt-2">{sme.name} · {review.date}</p>
    </div>
  );
}
