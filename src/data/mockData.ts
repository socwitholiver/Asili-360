export type ImageKey =
  | 'hero-savannah'
  | 'nganya-ride'
  | 'mood-nganya'
  | 'beadwork'
  | 'street-food'
  | 'guesthouse'
  | 'safari'
  | 'beach';

export type SMECategory = 'artisan' | 'guesthouse' | 'food' | 'nganya' | 'safari' | 'cultural';
export type ExperienceCategory = 'Nightlife' | 'Safari' | 'Cultural' | 'Beach' | 'Food';
export type BookingStatus = 'confirmed' | 'pending' | 'completed';
export type TripBudget = 'budget' | 'mid-range' | 'luxury';
export type TripInterest = 'culture' | 'safari' | 'food' | 'beach' | 'nightlife' | 'nature' | 'adventure';

export interface SME {
  id: string;
  name: string;
  category: SMECategory;
  location: string;
  county: string;
  description: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  image: ImageKey;
  features: string[];
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  image: ImageKey;
  category: ExperienceCategory;
  highlights: string[];
}

export interface Tourist {
  id: string;
  name: string;
  city: string;
  country: string;
  avatar: string;
}

export interface Booking {
  id: string;
  touristId: string;
  smeId: string;
  experienceTitle: string;
  date: string;
  amount: number;
  currency: string;
  status: BookingStatus;
  paymentMethod: string;
}

export interface Review {
  id: string;
  touristId: string;
  smeId: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Destination {
  name: string;
  description: string;
  experiences: number;
  image: ImageKey;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  location: string;
  cost: number;
}

export interface ItineraryTemplate {
  budget: TripBudget;
  interests: TripInterest[];
  days: ItineraryDay[];
}

export const tourists: Tourist[] = [
  { id: 't1', name: 'Marie Dubois', city: 'Paris', country: 'France', avatar: 'FR' },
  { id: 't2', name: 'James Ochieng', city: 'Nairobi', country: 'Kenya', avatar: 'KE' },
  { id: 't3', name: 'Li Wei', city: 'Beijing', country: 'China', avatar: 'CN' },
  { id: 't4', name: 'Sarah Mitchell', city: 'London', country: 'UK', avatar: 'UK' },
  { id: 't5', name: 'Carlos Rivera', city: 'Mexico City', country: 'Mexico', avatar: 'MX' },
];

export const smes: SME[] = [
  {
    id: 's1',
    name: "Mama Achieng's Beadwork",
    category: 'artisan',
    location: 'Kisumu',
    county: 'Kisumu',
    description: 'Handcrafted Maasai-inspired beadwork jewelry and accessories. Each piece tells a story of Kenyan heritage.',
    price: 3000,
    currency: 'KES',
    rating: 4.8,
    reviewCount: 24,
    image: 'beadwork',
    features: ['Handmade', 'Cultural Heritage', 'Workshop Available', 'Custom Orders'],
  },
  {
    id: 's2',
    name: "David's Guesthouse",
    category: 'guesthouse',
    location: 'Amboseli',
    county: 'Kajiado',
    description: 'Cozy eco-lodge with stunning views of Mount Kilimanjaro. Perfect base for safari adventures.',
    price: 8500,
    currency: 'KES',
    rating: 4.6,
    reviewCount: 38,
    image: 'guesthouse',
    features: ['Mountain View', 'Eco-Friendly', 'Safari Transfers', 'Local Cuisine'],
  },
  {
    id: 's3',
    name: 'Nairobi Street Food Tour',
    category: 'food',
    location: 'Nairobi CBD',
    county: 'Nairobi',
    description: "Explore Nairobi's vibrant food scene - from nyama choma to mutura, samosas to sugarcane juice.",
    price: 2500,
    currency: 'KES',
    rating: 4.9,
    reviewCount: 56,
    image: 'street-food',
    features: ['Guided Tour', '8+ Food Stops', '3 Hours', 'Vegetarian Options'],
  },
  {
    id: 's4',
    name: 'City Lights Nganya Ride',
    category: 'nganya',
    location: 'Nairobi',
    county: 'Nairobi',
    description: "Experience Nairobi's legendary matatu culture - graffiti buses, booming sound systems, and neon lights.",
    price: 1500,
    currency: 'KES',
    rating: 4.7,
    reviewCount: 42,
    image: 'nganya-ride',
    features: ['Graffiti Art Bus', 'Sound System', 'Night Tour', 'Photo Ops'],
  },
  {
    id: 's5',
    name: 'Amboseli Safari Experience',
    category: 'safari',
    location: 'Amboseli NP',
    county: 'Kajiado',
    description: 'Full-day guided safari with elephant herds, big cats, and breathtaking Kilimanjaro views.',
    price: 12000,
    currency: 'KES',
    rating: 4.9,
    reviewCount: 67,
    image: 'safari',
    features: ['Game Drive', 'Professional Guide', 'Lunch Included', 'Photography'],
  },
  {
    id: 's6',
    name: 'Lamu Heritage Walk',
    category: 'cultural',
    location: 'Lamu Old Town',
    county: 'Lamu',
    description: 'Wander through UNESCO-listed Lamu Old Town with a local historian. Discover Swahili architecture.',
    price: 2000,
    currency: 'KES',
    rating: 4.5,
    reviewCount: 19,
    image: 'beadwork',
    features: ['UNESCO Site', 'Local Guide', '2 Hours', 'Historical'],
  },
  {
    id: 's7',
    name: "Wanjiku's Coastal Guesthouse",
    category: 'guesthouse',
    location: 'Diani Beach',
    county: 'Kwale',
    description: 'Beachfront paradise with white sands and turquoise waters. Authentic Swahili hospitality.',
    price: 6500,
    currency: 'KES',
    rating: 4.7,
    reviewCount: 31,
    image: 'beach',
    features: ['Beach Access', 'Swahili Breakfast', 'Snorkeling', 'Airport Transfer'],
  },
  {
    id: 's8',
    name: 'Neon Express Nganya',
    category: 'nganya',
    location: 'Nairobi',
    county: 'Nairobi',
    description: 'The most iconic matatu in Nairobi. LED-lit interior, massive speakers, and unforgettable vibes.',
    price: 2000,
    currency: 'KES',
    rating: 4.8,
    reviewCount: 35,
    image: 'nganya-ride',
    features: ['LED Interior', 'Premium Sound', 'DJ Onboard', 'Weekend Special'],
  },
  {
    id: 's9',
    name: 'Maasai Village Experience',
    category: 'cultural',
    location: 'Maasai Mara',
    county: 'Narok',
    description: 'Immerse yourself in Maasai culture - traditional dances, warrior training, and storytelling.',
    price: 4500,
    currency: 'KES',
    rating: 4.6,
    reviewCount: 28,
    image: 'beadwork',
    features: ['Cultural Immersion', 'Dance Performance', 'Crafts Market', 'Photography'],
  },
  {
    id: 's10',
    name: "Otieno's Lake Victoria Guesthouse",
    category: 'guesthouse',
    location: 'Kisumu',
    county: 'Kisumu',
    description: 'Lakeside retreat with fresh tilapia dinners and sunset boat rides on Lake Victoria.',
    price: 5500,
    currency: 'KES',
    rating: 4.4,
    reviewCount: 15,
    image: 'guesthouse',
    features: ['Lakeside', 'Fresh Fish', 'Boat Rides', 'Bird Watching'],
  },
];

export const experiences: Experience[] = [
  {
    id: 'e1',
    title: 'Nairobi Nganya Cultural Night',
    description: "Hop aboard Nairobi's most vibrant matatus for a cultural ride through the city lights.",
    location: 'Nairobi',
    duration: '3 hours',
    price: 2500,
    currency: 'KES',
    rating: 4.8,
    reviewCount: 45,
    image: 'mood-nganya',
    category: 'Nightlife',
    highlights: ['Graffiti matatu ride', 'Live DJ', 'Street food stop', 'Photo opportunities'],
  },
  {
    id: 'e2',
    title: 'Amboseli Safari and Kilimanjaro Views',
    description: 'A full-day safari with elephants, big cats, and the majestic Mt. Kilimanjaro.',
    location: 'Amboseli',
    duration: 'Full day',
    price: 15000,
    currency: 'KES',
    rating: 4.9,
    reviewCount: 78,
    image: 'safari',
    category: 'Safari',
    highlights: ['Elephant herds', 'Big Five sighting', 'Kilimanjaro views', 'Maasai lunch'],
  },
  {
    id: 'e3',
    title: 'Kisumu Artisan Workshop',
    description: 'Learn traditional beadwork from Mama Achieng and take home your own creation.',
    location: 'Kisumu',
    duration: '4 hours',
    price: 3500,
    currency: 'KES',
    rating: 4.7,
    reviewCount: 32,
    image: 'beadwork',
    category: 'Cultural',
    highlights: ['Hands-on workshop', 'Take home souvenir', 'Local tea and snacks', 'Community visit'],
  },
  {
    id: 'e4',
    title: 'Diani Beach Paradise Retreat',
    description: 'White sand beaches, snorkeling in coral reefs, and Swahili coastal cuisine.',
    location: 'Diani Beach',
    duration: '2 days',
    price: 18000,
    currency: 'KES',
    rating: 4.8,
    reviewCount: 41,
    image: 'beach',
    category: 'Beach',
    highlights: ['Snorkeling', 'Beach BBQ', 'Sunset dhow cruise', 'Coral reef tour'],
  },
  {
    id: 'e5',
    title: 'Nairobi Food Safari',
    description: "Taste your way through Nairobi's best street food spots - from Kenyatta Market to Gikomba.",
    location: 'Nairobi',
    duration: '3 hours',
    price: 2500,
    currency: 'KES',
    rating: 4.9,
    reviewCount: 56,
    image: 'street-food',
    category: 'Food',
    highlights: ['8+ food stops', 'Nyama choma tasting', 'Mutura experience', 'Sugarcane juice'],
  },
];

export const reviews: Review[] = [
  { id: 'r1', touristId: 't1', smeId: 's4', rating: 5, comment: "The nganya ride was amazing - lights, music, and Nairobi nightlife. An experience I'll never forget.", date: '2025-12-15' },
  { id: 'r2', touristId: 't3', smeId: 's5', rating: 5, comment: 'Incredible safari. We saw three elephant herds and the Kilimanjaro sunset was breathtaking.', date: '2025-11-28' },
  { id: 'r3', touristId: 't4', smeId: 's1', rating: 4, comment: 'Mama Achieng is such a talented artisan. The beadwork workshop was a highlight of my Kenya trip.', date: '2025-12-01' },
  { id: 'r4', touristId: 't2', smeId: 's3', rating: 5, comment: 'Best food tour in Nairobi. Even as a local, I discovered new spots. The mutura was incredible.', date: '2026-01-10' },
  { id: 'r5', touristId: 't5', smeId: 's2', rating: 4, comment: 'Waking up to see Kilimanjaro from the guesthouse porch was magical. David is a wonderful host.', date: '2025-10-20' },
  { id: 'r6', touristId: 't1', smeId: 's7', rating: 5, comment: "Diani Beach is paradise. Wanjiku's guesthouse made it even more special with her Swahili breakfast.", date: '2026-01-05' },
  { id: 'r7', touristId: 't3', smeId: 's8', rating: 5, comment: 'The Neon Express is not just transport - it is art on wheels. The DJ was incredible.', date: '2026-02-14' },
  { id: 'r8', touristId: 't4', smeId: 's9', rating: 5, comment: 'The Maasai warriors were so welcoming. Their jumping dance is something everyone should witness.', date: '2025-11-15' },
  { id: 'r9', touristId: 't2', smeId: 's6', rating: 4, comment: "Lamu's old town is like stepping back in time. Our guide knew every hidden courtyard.", date: '2026-01-22' },
  { id: 'r10', touristId: 't5', smeId: 's10', rating: 4, comment: 'The tilapia dinner at sunset on Lake Victoria was perfect. Simple but unforgettable.', date: '2025-12-08' },
];

export const bookings: Booking[] = [
  { id: 'b1', touristId: 't1', smeId: 's1', experienceTitle: "Mama Achieng's Beadwork Experience", date: '2025-12-15', amount: 3000, currency: 'KES', status: 'completed', paymentMethod: 'M-Pesa' },
  { id: 'b2', touristId: 't3', smeId: 's5', experienceTitle: 'Amboseli Safari Experience', date: '2025-11-28', amount: 12000, currency: 'KES', status: 'completed', paymentMethod: 'M-Pesa' },
  { id: 'b3', touristId: 't4', smeId: 's4', experienceTitle: 'City Lights Nganya Ride', date: '2025-12-20', amount: 1500, currency: 'KES', status: 'completed', paymentMethod: 'M-Pesa' },
  { id: 'b4', touristId: 't2', smeId: 's3', experienceTitle: 'Nairobi Street Food Tour', date: '2026-01-10', amount: 2500, currency: 'KES', status: 'completed', paymentMethod: 'M-Pesa' },
  { id: 'b5', touristId: 't5', smeId: 's2', experienceTitle: "David's Guesthouse Stay", date: '2025-10-20', amount: 8500, currency: 'KES', status: 'completed', paymentMethod: 'Visa' },
  { id: 'b6', touristId: 't1', smeId: 's7', experienceTitle: "Wanjiku's Coastal Stay", date: '2026-01-05', amount: 6500, currency: 'KES', status: 'completed', paymentMethod: 'M-Pesa' },
  { id: 'b7', touristId: 't3', smeId: 's8', experienceTitle: 'Neon Express Nganya Ride', date: '2026-02-14', amount: 2000, currency: 'KES', status: 'completed', paymentMethod: 'M-Pesa' },
  { id: 'b8', touristId: 't4', smeId: 's9', experienceTitle: 'Maasai Village Experience', date: '2025-11-15', amount: 4500, currency: 'KES', status: 'completed', paymentMethod: 'M-Pesa' },
  { id: 'b9', touristId: 't1', smeId: 's4', experienceTitle: 'City Lights Nganya Ride', date: '2026-03-01', amount: 1500, currency: 'KES', status: 'confirmed', paymentMethod: 'M-Pesa' },
  { id: 'b10', touristId: 't5', smeId: 's5', experienceTitle: 'Amboseli Safari Experience', date: '2026-03-10', amount: 12000, currency: 'KES', status: 'confirmed', paymentMethod: 'M-Pesa' },
  { id: 'b11', touristId: 't2', smeId: 's1', experienceTitle: "Mama Achieng's Beadwork", date: '2026-03-05', amount: 3000, currency: 'KES', status: 'pending', paymentMethod: 'M-Pesa' },
  { id: 'b12', touristId: 't3', smeId: 's3', experienceTitle: 'Nairobi Street Food Tour', date: '2026-03-12', amount: 2500, currency: 'KES', status: 'confirmed', paymentMethod: 'M-Pesa' },
  { id: 'b13', touristId: 't4', smeId: 's7', experienceTitle: "Wanjiku's Coastal Stay", date: '2026-03-15', amount: 6500, currency: 'KES', status: 'pending', paymentMethod: 'Visa' },
  { id: 'b14', touristId: 't1', smeId: 's6', experienceTitle: 'Lamu Heritage Walk', date: '2026-02-20', amount: 2000, currency: 'KES', status: 'completed', paymentMethod: 'M-Pesa' },
  { id: 'b15', touristId: 't5', smeId: 's8', experienceTitle: 'Neon Express Nganya', date: '2026-03-08', amount: 2000, currency: 'KES', status: 'confirmed', paymentMethod: 'M-Pesa' },
  { id: 'b16', touristId: 't2', smeId: 's9', experienceTitle: 'Maasai Village Experience', date: '2026-02-28', amount: 4500, currency: 'KES', status: 'completed', paymentMethod: 'M-Pesa' },
  { id: 'b17', touristId: 't3', smeId: 's2', experienceTitle: "David's Guesthouse", date: '2026-03-20', amount: 8500, currency: 'KES', status: 'pending', paymentMethod: 'M-Pesa' },
  { id: 'b18', touristId: 't4', smeId: 's10', experienceTitle: "Otieno's Lakeside Stay", date: '2025-12-08', amount: 5500, currency: 'KES', status: 'completed', paymentMethod: 'M-Pesa' },
  { id: 'b19', touristId: 't1', smeId: 's5', experienceTitle: 'Amboseli Safari', date: '2026-03-25', amount: 12000, currency: 'KES', status: 'pending', paymentMethod: 'M-Pesa' },
  { id: 'b20', touristId: 't5', smeId: 's3', experienceTitle: 'Nairobi Street Food Tour', date: '2026-03-18', amount: 2500, currency: 'KES', status: 'confirmed', paymentMethod: 'M-Pesa' },
];

export const destinations: Destination[] = [
  { name: 'Nairobi', description: 'The bustling capital', experiences: 12, image: 'nganya-ride' },
  { name: 'Amboseli', description: 'Safari paradise', experiences: 8, image: 'safari' },
  { name: 'Diani Beach', description: 'Coastal paradise', experiences: 6, image: 'beach' },
  { name: 'Kisumu', description: 'Lakeside culture', experiences: 5, image: 'beadwork' },
  { name: 'Maasai Mara', description: 'Wildlife wonder', experiences: 10, image: 'safari' },
  { name: 'Lamu', description: 'Swahili heritage', experiences: 4, image: 'beach' },
];

export const itineraryTemplates: ItineraryTemplate[] = [
  {
    budget: 'budget',
    interests: ['culture', 'food'],
    days: [
      { day: 1, title: 'Nairobi Nganya Graffiti Ride', description: 'Start your Kenyan adventure with a vibrant matatu ride through the city lights. End with street food at Kenyatta Market.', location: 'Nairobi', cost: 1500 },
      { day: 2, title: "Mama Achieng's Beadwork Workshop", description: 'Travel to Kisumu and learn traditional beadwork from the legendary Mama Achieng.', location: 'Kisumu', cost: 3000 },
      { day: 3, title: 'Lake Victoria Sunset', description: 'Enjoy a boat ride on Lake Victoria with fresh tilapia dinner as the sun sets.', location: 'Kisumu', cost: 2500 },
    ],
  },
  {
    budget: 'mid-range',
    interests: ['safari', 'nature'],
    days: [
      { day: 1, title: 'Nairobi Street Food Safari', description: "Kickstart with a culinary adventure through Nairobi's best food spots.", location: 'Nairobi', cost: 2500 },
      { day: 2, title: 'Amboseli Safari Adventure', description: 'Full-day game drive with elephant herds and Mt. Kilimanjaro views.', location: 'Amboseli', cost: 12000 },
      { day: 3, title: 'Maasai Village Immersion', description: 'Experience Maasai culture with traditional dances and warrior stories.', location: 'Maasai Mara', cost: 4500 },
    ],
  },
  {
    budget: 'luxury',
    interests: ['beach', 'nature'],
    days: [
      { day: 1, title: 'Nairobi City and Nightlife', description: 'Explore the capital, visit Karen Blixen Museum, and end with a Nganya night ride.', location: 'Nairobi', cost: 5000 },
      { day: 2, title: 'Fly to Diani Beach Paradise', description: 'White sand beaches, snorkeling, and a sunset dhow cruise.', location: 'Diani Beach', cost: 18000 },
      { day: 3, title: 'Lamu Heritage and Swahili Coast', description: 'Explore UNESCO-listed Lamu Old Town and enjoy Swahili cuisine.', location: 'Lamu', cost: 8000 },
    ],
  },
];

export function getTouristById(id: string): Tourist | undefined {
  return tourists.find((tourist) => tourist.id === id);
}

export function getSMEById(id: string): SME | undefined {
  return smes.find((sme) => sme.id === id);
}

