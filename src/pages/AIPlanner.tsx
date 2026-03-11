import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, DollarSign, Calendar } from 'lucide-react';
import { itineraryTemplates } from '@/data/mockData';

const budgetOptions = [
  { value: 'budget', label: 'Budget', range: 'KES 5,000–10,000' },
  { value: 'mid-range', label: 'Mid-Range', range: 'KES 15,000–25,000' },
  { value: 'luxury', label: 'Luxury', range: 'KES 30,000+' },
];

const interestOptions = ['Culture', 'Safari', 'Food', 'Beach', 'Nightlife', 'Nature', 'Adventure'];

export default function AIPlanner() {
  const [budget, setBudget] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [days, setDays] = useState(3);
  const [itinerary, setItinerary] = useState<typeof itineraryTemplates[0] | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleInterest = (i: string) => {
    setInterests(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const generatePlan = () => {
    setLoading(true);
    setTimeout(() => {
      const match = itineraryTemplates.find(t => t.budget === budget) || itineraryTemplates[0];
      setItinerary(match);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <Sparkles className="h-10 w-10 text-primary mx-auto mb-3" />
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">AI Travel Planner</h1>
          <p className="text-muted-foreground">Tell us your preferences and we'll craft your perfect Kenyan adventure</p>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-warm space-y-8">
          {/* Budget */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
              <DollarSign className="h-4 w-4 text-primary" /> Budget Range
            </label>
            <div className="grid grid-cols-3 gap-3">
              {budgetOptions.map(b => (
                <button
                  key={b.value}
                  onClick={() => setBudget(b.value)}
                  className={`p-3 rounded-xl border text-center transition-colors ${
                    budget === b.value ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted'
                  }`}
                >
                  <p className="font-semibold text-sm text-foreground">{b.label}</p>
                  <p className="text-xs text-muted-foreground">{b.range}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
              <MapPin className="h-4 w-4 text-primary" /> Travel Interests
            </label>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map(i => (
                <button
                  key={i}
                  onClick={() => toggleInterest(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    interests.includes(i) ? 'gradient-sunset text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-border'
                  }`}
                >
                  {i}
                </button>
              ))}
            </div>
          </div>

          {/* Days */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
              <Calendar className="h-4 w-4 text-primary" /> Number of Days
            </label>
            <div className="flex items-center gap-4">
              {[2, 3, 5, 7].map(d => (
                <button
                  key={d}
                  onClick={() => setDays(d)}
                  className={`w-12 h-12 rounded-xl font-semibold transition-colors ${
                    days === d ? 'gradient-sunset text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-border'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generatePlan}
            disabled={!budget || loading}
            className="w-full gradient-sunset text-primary-foreground py-4 rounded-xl font-semibold text-lg disabled:opacity-50 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            {loading ? (
              <><span className="animate-spin">⏳</span> Generating your plan...</>
            ) : (
              <><Sparkles className="h-5 w-5" /> Generate My Itinerary</>
            )}
          </button>
        </div>

        {/* Generated Itinerary */}
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
                {itinerary.days.map((day, i) => (
                  <motion.div
                    key={day.day}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex gap-4 bg-card border border-border rounded-xl p-5 shadow-warm"
                  >
                    <div className="gradient-sunset w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground font-bold">{day.day}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground">{day.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{day.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{day.location}</span>
                        <span className="font-medium text-primary">KES {day.cost.toLocaleString()}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="bg-muted/50 rounded-xl p-5 text-center">
                <p className="text-sm text-muted-foreground">Estimated Total</p>
                <p className="text-2xl font-bold text-primary">
                  KES {itinerary.days.reduce((sum, d) => sum + d.cost, 0).toLocaleString()}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
