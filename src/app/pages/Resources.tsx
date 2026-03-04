import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { HelpCircle, Book, Code, Activity, Search, MessageCircle } from 'lucide-react';

function HelpCenterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const topics = [
    { icon: HelpCircle, title: 'Getting Started', articles: 12 },
    { icon: MessageCircle, title: 'Account & Security', articles: 18 },
    { icon: Code, title: 'Cards & Payments', articles: 24 },
    { icon: Activity, title: 'Transactions', articles: 15 },
  ];

  return (
    <section id="help-center" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              Help Center
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
            Find answers to your questions and get the help you need
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#1476B8]/50 transition-all"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#1476B8]/50 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{topic.title}</h3>
                <p className="text-white/60 text-sm">{topic.articles} articles</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Still need help?</h3>
          <p className="text-white/60 mb-6">Our support team is available 24/7 to assist you</p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function DocumentationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const sections = [
    {
      title: 'Quick Start Guide',
      description: 'Get up and running with KaviPay in minutes',
      items: ['Create Account', 'Verify Identity', 'Add Funds', 'Get Your Card'],
    },
    {
      title: 'User Guides',
      description: 'Comprehensive guides for all KaviPay features',
      items: ['Virtual Cards', 'Physical Cards', 'Crypto Conversions', 'Transaction History'],
    },
    {
      title: 'Security',
      description: 'Learn how to keep your account secure',
      items: ['Two-Factor Auth', 'Biometric Login', 'Card Controls', 'Fraud Prevention'],
    },
  ];

  return (
    <section id="documentation" className="py-24 bg-gradient-to-b from-black via-[#1E63C6]/5 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              Documentation
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything you need to know about using KaviPay
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{section.title}</h3>
              <p className="text-white/60 mb-6">{section.description}</p>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-white/80 hover:text-[#1476B8] transition-colors cursor-pointer">
                    <div className="w-1.5 h-1.5 bg-[#1476B8] rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function APISection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="api" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              API Documentation
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Integrate KaviPay into your application with our powerful API
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Getting Started</h3>
            <p className="text-white/60 mb-6">
              Our RESTful API allows you to programmatically manage cards, process transactions, and access user data. Get started with our comprehensive documentation.
            </p>
            <div className="space-y-4">
              {['Authentication', 'Card Management', 'Transactions', 'Webhooks'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-white/80">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-full flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 rounded-2xl p-6 border border-white/10"
          >
            <div className="text-sm text-white/60 mb-2">Example Request</div>
            <pre className="text-[#1476B8] text-sm overflow-x-auto">
{`curl -X POST https://api.kavipay.io/v1/cards \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "virtual",
    "currency": "USD"
  }'`}
            </pre>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <button className="px-8 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity">
            View Full API Docs
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function StatusSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const systems = [
    { name: 'API', status: 'operational', uptime: '99.99%' },
    { name: 'Card Processing', status: 'operational', uptime: '99.98%' },
    { name: 'Virtual Cards', status: 'operational', uptime: '100%' },
    { name: 'Mobile App', status: 'operational', uptime: '99.97%' },
  ];

  return (
    <section id="status" className="py-24 bg-gradient-to-b from-black via-[#1E63C6]/5 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              System Status
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Real-time status of all KaviPay services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 text-center mb-12"
        >
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-2xl font-bold text-white">All Systems Operational</span>
          </div>
          <p className="text-white/60">No incidents reported in the last 30 days</p>
        </motion.div>

        <div className="space-y-4">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">{system.name}</h3>
                    <p className="text-sm text-white/60">Operational</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{system.uptime}</div>
                  <p className="text-sm text-white/60">30-day uptime</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 mb-4">Subscribe to get updates on service status</p>
          <button className="px-8 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors">
            Subscribe to Updates
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default function Resources() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Resources"
        subtitle="Everything you need to get the most out of KaviPay"
      />
      <HelpCenterSection />
      <DocumentationSection />
      <APISection />
      <StatusSection />
      <Footer />
    </div>
  );
}
