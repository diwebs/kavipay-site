import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { Search, BookOpen, Zap, Shield, DollarSign, Settings } from 'lucide-react';
import { useState } from 'react';

const knowledgeTopics = [
  {
    icon: Zap,
    title: 'Getting Started',
    description: 'Learn the basics of Kavipay and get your account set up',
    articles: [
      'How to create a Kavipay account',
      'Complete KYC verification',
      'Download and install the mobile app',
      'Set up your profile and preferences',
    ],
  },
  {
    icon: DollarSign,
    title: 'Card Services',
    description: 'Master virtual and physical card management',
    articles: [
      'Types of cards available',
      'How to issue a virtual card instantly',
      'Order a physical card',
      'Manage card limits and controls',
      'Freeze and unfreeze cards',
      'Update card settings',
    ],
  },
  {
    icon: Zap,
    title: 'Funding Methods',
    description: 'Explore ways to load funds into your account',
    articles: [
      'Crypto deposit guide',
      'Bank transfer process',
      'Supported cryptocurrencies',
      'Exchange rate explanations',
      'Transaction fees and limits',
      'Withdrawal process',
    ],
  },
  {
    icon: DollarSign,
    title: 'Bill Payments',
    description: 'Pay utilities and bills instantly in Nigeria',
    articles: [
      'Airtime top-up guide',
      'Data bundle purchase',
      'Electricity bill payment',
      'Cable TV subscription',
      'Water bill payment',
      'Payment troubleshooting',
    ],
  },
  {
    icon: Shield,
    title: 'Security Framework',
    description: 'Understand how we protect your money',
    articles: [
      'Encryption and data protection',
      '3D Secure authentication',
      'Fraud detection system',
      'Real-time alerts and monitoring',
      'Card freeze feature',
      'Security best practices',
      'Compliance certifications',
    ],
  },
  {
    icon: Settings,
    title: 'Troubleshooting',
    description: 'Resolve common issues and problems',
    articles: [
      'Transaction pending resolution',
      'Card declined troubleshooting',
      'Login issues',
      'App crashes and bugs',
      'Verification problems',
      'Contact support',
    ],
  },
];

const detailedGuides = [
  {
    title: 'Complete KYC Verification Guide',
    description: 'Step-by-step instructions for account verification',
    time: '5 min read',
  },
  {
    title: 'Security Best Practices',
    description: 'Tips to keep your Kavipay account secure',
    time: '8 min read',
  },
  {
    title: 'Global Payment Solutions',
    description: 'How to use Kavipay for international transactions',
    time: '6 min read',
  },
  {
    title: 'Understanding Exchange Rates',
    description: 'How currency conversion works on Kavipay',
    time: '4 min read',
  },
];

export default function KnowledgeBase() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTopics = knowledgeTopics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.articles.some((article) =>
        article.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Knowledge Base"
        subtitle="In-depth guides and reference documentation for all Kavipay services"
      />

      {/* Search Section */}
      <section className="py-12 bg-gradient-to-b from-white/5 to-transparent border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Search className="absolute left-4 top-4 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search knowledge base..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* Knowledge Topics Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] p-3 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{topic.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4">{topic.description}</p>
                  <div className="space-y-2">
                    {topic.articles.slice(0, 3).map((article, idx) => (
                      <p key={idx} className="text-white/50 text-xs hover:text-white/70 transition-colors">
                        → {article}
                      </p>
                    ))}
                    {topic.articles.length > 3 && (
                      <p className="text-white/40 text-xs pt-2">
                        + {topic.articles.length - 3} more articles
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {filteredTopics.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-white/60">No articles found. Try a different search.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent"
          >
            Featured Guides
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {detailedGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <BookOpen className="w-8 h-8 text-[#1E63C6] group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-white/50 bg-white/5 px-3 py-1 rounded-full">
                    {guide.time}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
                <p className="text-white/60 text-sm">{guide.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
