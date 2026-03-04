import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { CheckCircle, AlertCircle, Clock, TrendingUp } from 'lucide-react';

const statusItems = [
  {
    service: 'Mobile App',
    status: 'operational',
    statusLabel: 'Operational',
    description: 'iOS and Android apps running smoothly',
    uptime: '99.9%',
  },
  {
    service: 'Virtual Cards',
    status: 'operational',
    statusLabel: 'Operational',
    description: 'Card issuance and management fully operational',
    uptime: '99.9%',
  },
  {
    service: 'Payments Processing',
    status: 'operational',
    statusLabel: 'Operational',
    description: 'All payment transactions processing normally',
    uptime: '99.9%',
  },
  {
    service: 'Crypto Deposits',
    status: 'operational',
    statusLabel: 'Operational',
    description: 'Cryptocurrency funding available',
    uptime: '99.8%',
  },
  {
    service: 'Bill Payments',
    status: 'operational',
    statusLabel: 'Operational',
    description: 'Utility bill payments operating normally',
    uptime: '99.9%',
  },
  {
    service: 'Customer Support',
    status: 'operational',
    statusLabel: 'Operational',
    description: '24/7 support channels available',
    uptime: '100%',
  },
];

const recentIncidents = [
  {
    date: 'February 15, 2026',
    time: '02:30 UTC',
    title: 'Brief Payment API Delay',
    description: 'Resolved in 12 minutes. Affected less than 0.1% of transactions.',
    duration: '12 minutes',
  },
  {
    date: 'February 10, 2026',
    time: '14:00 UTC',
    title: 'Scheduled Maintenance',
    description: 'App server maintenance completed successfully.',
    duration: 'Completed',
  },
  {
    date: 'February 5, 2026',
    time: '09:15 UTC',
    title: 'Network Optimization',
    description: 'Improved transaction speed with zero downtime.',
    duration: 'Completed',
  },
];

export default function Status() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="System Status"
        subtitle="Monitor Kavipay service health and uptime"
      />

      {/* Status Overview */}
      <section className="py-12 bg-gradient-to-b from-white/5 to-transparent border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold">All Systems Operational</span>
            </div>
            <p className="text-white/70 mb-4">
              Last updated: {new Date().toLocaleString()}
            </p>
            <div className="flex items-center justify-center space-x-8 pt-4 border-t border-white/10 mt-6">
              <div>
                <p className="text-white/60 text-sm">Current Uptime</p>
                <p className="text-2xl font-bold text-green-500">99.9%</p>
              </div>
              <div>
                <p className="text-white/60 text-sm">30-Day Uptime</p>
                <p className="text-2xl font-bold text-green-500">99.89%</p>
              </div>
              <div>
                <p className="text-white/60 text-sm">Active Incidents</p>
                <p className="text-2xl font-bold text-green-500">0</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Status Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent"
          >
            Service Status
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="space-y-4"
          >
            {statusItems.map((item, index) => (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div>
                      {item.status === 'operational' ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-yellow-500" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.service}</h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                        item.status === 'operational'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {item.statusLabel}
                    </span>
                    <p className="text-white/60 text-sm">Uptime: {item.uptime}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent"
          >
            Recent Incidents
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="space-y-4"
          >
            {recentIncidents.map((incident, index) => (
              <motion.div
                key={incident.date}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-white/40 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{incident.title}</h3>
                      <span className="text-white/50 text-sm whitespace-nowrap ml-4">
                        {incident.duration}
                      </span>
                    </div>
                    <p className="text-white/60 text-sm mb-2">{incident.description}</p>
                    <p className="text-white/40 text-xs">
                      {incident.date} at {incident.time}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Uptime Statistics */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <h2 className="text-2xl font-bold text-white">30-Day Uptime</h2>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Mobile App', uptime: 99.92 },
                { name: 'Payments Processing', uptime: 99.95 },
                { name: 'API Servers', uptime: 99.88 },
              ].map((service, index) => (
                <div key={service.name}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white">{service.name}</p>
                    <p className="text-green-400 font-semibold">{service.uptime}%</p>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full"
                      style={{ width: `${service.uptime}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
