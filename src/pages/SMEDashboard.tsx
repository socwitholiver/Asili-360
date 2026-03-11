import { motion } from 'framer-motion';
import { DollarSign, Users, Star, TrendingUp, Calendar } from 'lucide-react';
import { bookings, reviews, tourists, getSMEById } from '@/data/mockData';
import ReviewCard from '@/components/ReviewCard';

const smeId = 's1';
const monthlyData = [
  { month: 'Oct', bookings: 3, revenue: 9000 },
  { month: 'Nov', bookings: 5, revenue: 15000 },
  { month: 'Dec', bookings: 4, revenue: 12000 },
  { month: 'Jan', bookings: 6, revenue: 18000 },
  { month: 'Feb', bookings: 7, revenue: 21000 },
  { month: 'Mar', bookings: 4, revenue: 12000 },
];

export default function SMEDashboard() {
  const sme = getSMEById(smeId);

  if (!sme) {
    return (
      <div className="min-h-screen px-4 pb-16 pt-24">
        <div className="container mx-auto rounded-xl border border-border bg-card p-6 text-center shadow-warm">
          <h1 className="font-display text-2xl font-bold text-foreground">SME Dashboard</h1>
          <p className="mt-2 text-muted-foreground">The requested SME profile could not be loaded.</p>
        </div>
      </div>
    );
  }

  const smeBookings = bookings.filter((booking) => booking.smeId === smeId);
  const smeReviews = reviews.filter((review) => review.smeId === smeId);
  const totalEarnings = smeBookings.reduce((sum, booking) => sum + booking.amount, 0);

  const stats = [
    { label: 'Total Bookings', value: smeBookings.length, icon: Calendar, color: 'text-primary' },
    { label: 'Monthly Earnings', value: `KES ${totalEarnings.toLocaleString()}`, icon: DollarSign, color: 'text-savannah' },
    { label: 'Avg Rating', value: sme.rating, icon: Star, color: 'text-secondary' },
    { label: 'Total Customers', value: new Set(smeBookings.map((booking) => booking.touristId)).size, icon: Users, color: 'text-primary' },
  ];

  return (
    <div className="min-h-screen px-4 pb-16 pt-24">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">SME Dashboard</h1>
          <p className="mt-1 text-muted-foreground">{sme.name} - {sme.location}</p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(({ label, value, icon: Icon, color }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border border-border bg-card p-5 shadow-warm"
            >
              <Icon className={`mb-2 h-6 w-6 ${color}`} />
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-warm">
            <h2 className="font-display mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <TrendingUp className="h-5 w-5 text-primary" /> Monthly Revenue
            </h2>
            <div className="space-y-3">
              {monthlyData.map((monthData) => (
                <div key={monthData.month} className="flex items-center gap-3">
                  <span className="w-8 text-xs font-medium text-muted-foreground">{monthData.month}</span>
                  <div className="h-6 flex-1 overflow-hidden rounded-full bg-muted">
                    <div
                      className="gradient-sunset flex h-full items-center justify-end rounded-full pr-2"
                      style={{ width: `${(monthData.revenue / 21000) * 100}%` }}
                    >
                      <span className="text-[10px] font-semibold text-primary-foreground">KES {monthData.revenue.toLocaleString()}</span>
                    </div>
                  </div>
                  <span className="w-16 text-xs text-muted-foreground">{monthData.bookings} bookings</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-warm">
            <h2 className="font-display mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Users className="h-5 w-5 text-primary" /> Recent Customers
            </h2>
            <div className="space-y-3">
              {smeBookings.slice(0, 5).map((booking) => {
                const tourist = tourists.find((currentTourist) => currentTourist.id === booking.touristId);

                if (!tourist) {
                  return null;
                }

                return (
                  <div key={booking.id} className="flex items-center justify-between border-b border-border py-2 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
                        {tourist.avatar}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{tourist.name}</p>
                        <p className="text-xs text-muted-foreground">{tourist.city}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-primary">KES {booking.amount.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">{booking.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="font-display mb-4 text-lg font-semibold text-foreground">Customer Reviews</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {smeReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
