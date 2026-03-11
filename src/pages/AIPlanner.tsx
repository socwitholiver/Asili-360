import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, DollarSign, Calendar, LoaderCircle } from 'lucide-react';
import NiaAvatar from '@/components/NiaAvatar';
import {
  itineraryTemplates,
  type ItineraryTemplate,
  type TripBudget,
  type TripInterest,
} from '@/data/mockData';

const budgetOptions: { value: TripBudget; label: string; range: string }[] = [
  { value: 'budget', label: 'Budget', range: 'KES 5,000-10,000' },
  { value: 'mid-range', label: 'Mid-Range', range: 'KES 15,000-25,000' },
  { value: 'luxury', label: 'Luxury', range: 'KES 30,000+' },
];

const interestOptions: { label: string; value: TripInterest }[] = [
  { label: 'Culture', value: 'culture' },
  { label: 'Safari', value: 'safari' },
  { label: 'Food', value: 'food' },
  { label: 'Beach', value: 'beach' },
  { label: 'Nightlife', value: 'nightlife' },
  { label: 'Nature', value: 'nature' },
  { label: 'Adventure', value: 'adventure' },
];

export default function AIPlanner() {
  const [budget, setBudget] = useState<TripBudget | ''>('');
  const [interests, setInterests] = useState<TripInterest[]>([]);
  const [days, setDays] = useState(3);
  const [itinerary, setItinerary] = useState<ItineraryTemplate | null>(null);
  const [loading, setLoading] = useState(false);
  const generationTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (generationTimerRef.current) {
        clearTimeout(generationTimerRef.current);
      }
    };
  }, []);

  const recommendedItinerary = useMemo(() => {
    if (!budget) {
      return null;
    }

    const matchingInterest = itineraryTemplates.find((template) =>
      template.budget === budget && template.interests.some((interest) => interests.includes(interest)),
    );

    return matchingInterest ?? itineraryTemplates.find((template) => template.budget === budget) ?? itineraryTemplates[0];
  }, [budget, interests]);

  const toggleInterest = (interest: TripInterest) => {
    setInterests((currentInterests) =>
      currentInterests.includes(interest)
        ? currentInterests.filter((currentInterest) => currentInterest !== interest)
        : [...currentInterests, interest],
    );
  };

  const generatePlan = () => {
    if (!recommendedItinerary) {
      return;
    }

    setLoading(true);

    if (generationTimerRef.current) {
      clearTimeout(generationTimerRef.current);
    }

    generationTimerRef.current = setTimeout(() => {
      setItinerary(recommendedItinerary);
      setLoading(false);
      generationTimerRef.current = null;
    }, 900);
  };

  return (
    <div className="min-h-screen px-4 pb-16 pt-24">
      <div className="container mx-auto max-w-5xl">
        <div className="nia-intro-panel mb-10 grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border/70 p-6 md:grid-cols-[1.1fr_320px] md:p-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              <Sparkles className="h-4 w-4" /> Asili360 Travel Intelligence
            </div>
            <h1 className="font-display mb-3 text-4xl font-bold text-foreground md:text-5xl">Meet Nia</h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              Nia is your warm, travel-savvy guide for discovering Kenya. Share what you love, how much you want to spend,
              and how long you are staying, and she will shape a journey that feels personal.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-foreground">
              <span className="rounded-full bg-background/80 px-4 py-2 shadow-sm ring-1 ring-border">Smart itinerary matching</span>
              <span className="rounded-full bg-background/80 px-4 py-2 shadow-sm ring-1 ring-border">Culture-first travel ideas</span>
              <span className="rounded-full bg-background/80 px-4 py-2 shadow-sm ring-1 ring-border">Fast, friendly trip planning</span>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[320px]">
            <NiaAvatar />
          </div>
        </div>

        <div className="space-y-8 rounded-2xl border border-border bg-card p-6 shadow-warm md:p-8">
          <div>
            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <DollarSign className="h-4 w-4 text-primary" /> Budget Range
            </label>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {budgetOptions.map((budgetOption) => (
                <button
                  key={budgetOption.value}
                  type="button"
                  onClick={() => setBudget(budgetOption.value)}
                  className={`rounded-xl border p-3 text-center transition-colors ${
                    budget === budgetOption.value ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted'
                  }`}
                >
                  <p className="text-sm font-semibold text-foreground">{budgetOption.label}</p>
                  <p className="text-xs text-muted-foreground">{budgetOption.range}</p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Travel Interests
            </label>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((interestOption) => (
                <button
                  key={interestOption.value}
                  type="button"
                  onClick={() => toggleInterest(interestOption.value)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    interests.includes(interestOption.value)
                      ? 'gradient-sunset text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-border'
                  }`}
                >
                  {interestOption.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
              <Calendar className="h-4 w-4 text-primary" /> Number of Days
            </label>
            <div className="flex items-center gap-4">
              {[2, 3, 5, 7].map((dayCount) => (
                <button
                  key={dayCount}
                  type="button"
                  onClick={() => setDays(dayCount)}
                  className={`h-12 w-12 rounded-xl font-semibold transition-colors ${
                    days === dayCount ? 'gradient-sunset text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-border'
                  }`}
                >
                  {dayCount}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={generatePlan}
            disabled={!budget || loading}
            className="gradient-sunset flex w-full items-center justify-center gap-2 rounded-xl py-4 text-lg font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
          >
            {loading ? (
              <>
                <LoaderCircle className="h-5 w-5 animate-spin" /> Nia is building your plan...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" /> Ask Nia for My Itinerary
              </>
            )}
          </button>
        </div>

        <AnimatePresence>
          {itinerary && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10 space-y-4"
            >
              <h2 className="font-display text-2xl font-bold text-foreground">Your {days}-Day Kenya Adventure</h2>
              <div className="space-y-4">
                {itinerary.days.map((day, index) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-warm"
                  >
                    <div className="gradient-sunset flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
                      <span className="font-bold text-primary-foreground">{day.day}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground">{day.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{day.description}</p>
                      <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {day.location}
                        </span>
                        <span className="font-medium text-primary">KES {day.cost.toLocaleString()}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="rounded-xl bg-muted/50 p-5 text-center">
                <p className="text-sm text-muted-foreground">Estimated Total</p>
                <p className="text-2xl font-bold text-primary">
                  KES {itinerary.days.reduce((sum, day) => sum + day.cost, 0).toLocaleString()}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
