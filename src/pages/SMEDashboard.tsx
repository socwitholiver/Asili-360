import { motion } from 'framer-motion';
import { DollarSign, Users, Star, TrendingUp, Calendar } from 'lucide-react';
import { bookings, reviews, tourists, getSMEById } from '@/data/mockData';
import ReviewCard from '@/components/ReviewCard';

// Simulated dashboard for "Mama Achieng's Beadwork"
const smeId = 's1';
const sme = getSMEById(smeId)!;
const smeBookings = bookings.filter(b => b.smeId === smeId);
const smeReviews = reviews.filter(r => r.smeId === smeId);
const totalEarnings = smeBookings.reduce((sum, b) => sum + b.amount, 0);

const stats = [
  { label: 'Total Bookings', value: smeBookings.length, icon: Calendar, color: 'text-primary' },
  { label: 'Monthly Earnings', value: `KES ${totalEarnings.toLocaleString()}`, icon: DollarSign, color: 'text-savannah' },
  { label: 'Avg Rating', value: sme.rating, icon: Star, color: 'text-secondary' },
  { label: 'Total Customers', value: new Set(smeBookings.map(b => b.touristId)).size, icon: Users, color: 'text-primary' },
];

const monthlyData = [
  { month: 'Oct', bookings: 3, revenue: 9000 },
  { month: 'Nov', bookings: 5, revenue: 15000 },
  { month: 'Dec', bookings: 4, revenue: 12000 },
  { month: 'Jan', bookings: 6, revenue: 18000 },
  { month: 'Feb', bookings: 7, revenue: 21000 },
  { month: 'Mar', bookings: 4, revenue: 12000 },
];

export default function SMEDashboard() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">SME Dashboard</h1>
          <p className="text-muted-foreground mt-1">{sme.name} — {sme.location}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map(({ label, value, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-5 shadow-warm"
            >
              <Icon className={`h-6 w-6 ${color} mb-2`} />
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Revenue */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-warm">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" /> Monthly Revenue
            </h2>
            <div className="space-y-3">
              {monthlyData.map(m => (
                <div key={m.month} className="flex items-center gap-3">
                  <span className="w-8 text-xs font-medium text-muted-foreground">{m.month}</span>
                  <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                    <div
                      className="gradient-sunset h-full rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${(m.revenue / 21000) * 100}%` }}
                    >
                      <span className="text-[10px] font-semibold text-primary-foreground">KES {m.revenue.toLocaleString()}</span>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground w-16">{m.bookings} bookings</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Customers */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-warm">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" /> Recent Customers
            </h2>
            <div className="space-y-3">
              {smeBookings.slice(0, 5).map(b => {
                const t = tourists.find(x => x.id === b.touristId);
                if (!t) return null;
                return (
                  <div key={b.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{t.avatar}</span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.city}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">KES {b.amount.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">{b.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-8">
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {smeReviews.map(r => <ReviewCard key={r.id} review={r} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
