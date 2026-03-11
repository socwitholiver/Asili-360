import { motion } from 'framer-motion';
import { BarChart3, MapPin, Users, TrendingUp, Globe } from 'lucide-react';

const countyData = [
  { county: 'Nairobi', visitors: 12500, experiences: 15, revenue: 4250000, topExperience: 'Nganya Night Ride' },
  { county: 'Kajiado', visitors: 8300, experiences: 10, revenue: 3100000, topExperience: 'Amboseli Safari' },
  { county: 'Kwale', visitors: 6200, experiences: 8, revenue: 2400000, topExperience: 'Diani Beach Retreat' },
  { county: 'Kisumu', visitors: 4100, experiences: 6, revenue: 1500000, topExperience: 'Beadwork Workshop' },
  { county: 'Narok', visitors: 9800, experiences: 12, revenue: 3800000, topExperience: 'Maasai Mara Safari' },
  { county: 'Lamu', visitors: 3200, experiences: 4, revenue: 900000, topExperience: 'Heritage Walk' },
];

const visitorOrigins = [
  { country: 'France', visitors: 3200, flag: '🇫🇷' },
  { country: 'UK', visitors: 2800, flag: '🇬🇧' },
  { country: 'USA', visitors: 2500, flag: '🇺🇸' },
  { country: 'China', visitors: 2100, flag: '🇨🇳' },
  { country: 'Germany', visitors: 1800, flag: '🇩🇪' },
  { country: 'Kenya', visitors: 5600, flag: '🇰🇪' },
];

const trends = [
  { label: 'Nganya Rides', growth: '+42%', trend: 'up' },
  { label: 'Cultural Tours', growth: '+28%', trend: 'up' },
  { label: 'Safari Bookings', growth: '+15%', trend: 'up' },
  { label: 'Beach Stays', growth: '+8%', trend: 'up' },
];

export default function CountyDashboard() {
  const totalVisitors = countyData.reduce((s, c) => s + c.visitors, 0);
  const totalRevenue = countyData.reduce((s, c) => s + c.revenue, 0);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <h1 className="font-display text-3xl font-bold text-foreground mb-1">County Tourism Dashboard</h1>
        <p className="text-muted-foreground mb-8">Simulated analytics across Kenyan counties</p>

        {/* Top stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Visitors', value: totalVisitors.toLocaleString(), icon: Users, color: 'text-primary' },
            { label: 'Total Revenue', value: `KES ${(totalRevenue / 1000000).toFixed(1)}M`, icon: TrendingUp, color: 'text-savannah' },
            { label: 'Counties Active', value: countyData.length, icon: MapPin, color: 'text-secondary' },
            { label: 'Visitor Countries', value: visitorOrigins.length, icon: Globe, color: 'text-primary' },
          ].map(({ label, value, icon: Icon, color }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-5 shadow-warm">
              <Icon className={`h-6 w-6 ${color} mb-2`} />
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <p className="text-xs text-muted-foreground">{label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* County Performance */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-warm">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" /> County Performance
            </h2>
            <div className="space-y-3">
              {countyData.map(c => (
                <div key={c.county} className="flex items-center gap-3">
                  <span className="w-16 text-xs font-medium text-muted-foreground">{c.county}</span>
                  <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
                    <div className="gradient-sunset h-full rounded-full flex items-center justify-end pr-2" style={{ width: `${(c.visitors / 12500) * 100}%` }}>
                      <span className="text-[10px] font-semibold text-primary-foreground">{c.visitors.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visitor Origins */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-warm">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" /> Visitor Origins
            </h2>
            <div className="space-y-3">
              {visitorOrigins.map(v => (
                <div key={v.country} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{v.flag}</span>
                    <span className="text-sm font-medium text-foreground">{v.country}</span>
                  </div>
                  <span className="text-sm font-medium text-primary">{v.visitors.toLocaleString()} visitors</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tourism Trends */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-warm">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" /> Tourism Trends
            </h2>
            <div className="space-y-3">
              {trends.map(t => (
                <div key={t.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <span className="text-sm text-foreground">{t.label}</span>
                  <span className="text-sm font-bold text-savannah">{t.growth}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Experiences */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-warm">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">Top Experiences by County</h2>
            <div className="space-y-3">
              {countyData.map(c => (
                <div key={c.county} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.topExperience}</p>
                    <p className="text-xs text-muted-foreground">{c.county} County</p>
                  </div>
                  <span className="text-sm font-medium text-primary">KES {(c.revenue / 1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
