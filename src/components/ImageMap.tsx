import heroSavannah from '@/assets/hero-savannah.jpg';
import nganyaRide from '@/assets/nganya-ride.jpg';
import beadwork from '@/assets/beadwork.jpg';
import streetFood from '@/assets/street-food.jpg';
import guesthouse from '@/assets/guesthouse.jpg';
import safari from '@/assets/safari.jpg';
import beach from '@/assets/beach.jpg';

const imageMap: Record<string, string> = {
  'hero-savannah': heroSavannah,
  'nganya-ride': nganyaRide,
  'beadwork': beadwork,
  'street-food': streetFood,
  'guesthouse': guesthouse,
  'safari': safari,
  'beach': beach,
};

export function getImage(key: string): string {
  return imageMap[key] || heroSavannah;
}
