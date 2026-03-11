import heroSavannah from '@/assets/hero-savannah.jpg';
import nganyaRide from '@/assets/nganya-ride.jpg';
import beadwork from '@/assets/beadwork.jpg';
import streetFood from '@/assets/street-food.jpg';
import guesthouse from '@/assets/guesthouse.jpg';
import safari from '@/assets/safari.jpg';
import beach from '@/assets/beach.jpg';
import type { ImageKey } from '@/data/mockData';

const imageMap: Record<ImageKey, string> = {
  'hero-savannah': heroSavannah,
  'nganya-ride': nganyaRide,
  'mood-nganya': '/MOOD.jpg',
  'nairobi-city': '/Nairobi.jpg',
  beadwork,
  'street-food': streetFood,
  guesthouse,
  safari,
  beach,
};

export function getImage(key: ImageKey): string {
  return imageMap[key];
}
