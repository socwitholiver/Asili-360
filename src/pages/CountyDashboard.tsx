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
  { country: 'France', visitors: 3200, flag: 'FR' },
  { country: 'UK', visitors: 2800, flag: 'UK' },
  { country: 'USA', visitors: 2500, flag: 'US' },
  { country: 'China', visitors: 2100, flag: 'CN' },
  { country: 'Germany', visitors: 1800, flag: 'DE' },
  { country: 'Kenya', visitors: 5600, flag: 'KE' },
];

const trends = [
  { label: 'Nganya Rides', growth: '+42%' },
  { label: 'Cultural Tours', growth: '+28%' },
  { label: 'Safari Bookings', growth: '+15%' },
  { label: 'Beach Stays', growth: '+8%' },
];

export default function CountyDashboard() {
  const totalVisitors = countyData.reduce((sum, county) => sum + county.visitors, 0);
  const totalRevenue = countyData.reduce((sum, county) => sum + county.revenue, 0);

  return (
    <div className="min-h-screen px-4 pb-16 pt-24">
      <div className="container mx-auto">
        <h1 className="font-display mb-1 text-3xl font-bold text-foreground">County Tourism Dashboard</h1>
        <p className="mb-8 text-muted-foreground">Simulated analytics across Kenyan counties</p>

        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: 'Total Visitors', value: totalVisitors.toLocaleString(), icon: Users, color: 'text-primary' },
            { label: 'Total Revenue', value: `KES ${(totalRevenue / 1000000).toFixed(1)}M`, icon: TrendingUp, color: 'text-savannah' },
            { label: 'Counties Active', value: countyData.length, icon: MapPin, color: 'text-secondary' },
            { label: 'Visitor Countries', value: visitorOrigins.length, icon: Globe, color: 'text-primary' },
          ].map(({ label, value, icon: Icon, color }, index) => (
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
              <BarChart3 className="h-5 w-5 text-primary" /> County Performance
            </h2>
            <div className="space-y-3">
              {countyData.map((county) => (
                <div key={county.county} className="flex items-center gap-3">
                  <span className="w-16 text-xs font-medium text-muted-foreground">{county.county}</span>
                  <div className="h-6 flex-1 overflow-hidden rounded-full bg-muted">
                    <div className="gradient-sunset flex h-full items-center justify-end rounded-full pr-2" style={{ width: `${(county.visitors / 12500) * 100}%` }}>
                      <span className="text-[10px] font-semibold text-primary-foreground">{county.visitors.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-warm">
            <h2 className="font-display mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Globe className="h-5 w-5 text-primary" /> Visitor Origins
            </h2>
            <div className="space-y-3">
              {visitorOrigins.map((origin) => (
                <div key={origin.country} className="flex items-center justify-between border-b border-border py-2 last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
                      {origin.flag}
                    </span>
                    <span className="text-sm font-medium text-foreground">{origin.country}</span>
                  </div>
                  <span className="text-sm font-medium text-primary">{origin.visitors.toLocaleString()} visitors</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-warm">
            <h2 className="font-display mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <TrendingUp className="h-5 w-5 text-primary" /> Tourism Trends
            </h2>
            <div className="space-y-3">
              {trends.map((trend) => (
                <div key={trend.label} className="flex items-center justify-between border-b border-border py-2 last:border-0">
                  <span className="text-sm text-foreground">{trend.label}</span>
                  <span className="text-sm font-bold text-savannah">{trend.growth}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-warm">
            <h2 className="font-display mb-4 text-lg font-semibold text-foreground">Top Experiences by County</h2>
            <div className="space-y-3">
              {countyData.map((county) => (
                <div key={county.county} className="flex items-center justify-between border-b border-border py-2 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{county.topExperience}</p>
                    <p className="text-xs text-muted-foreground">{county.county} County</p>
                  </div>
                  <span className="text-sm font-medium text-primary">KES {(county.revenue / 1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
