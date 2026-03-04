import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { CreditCard, Shield, Zap, Globe, Wallet, TrendingUp } from 'lucide-react';
import SparkleOverlay from './SparkleOverlay';

const features = [
  {
    icon: CreditCard,
    title: 'Virtual & Physical Cards',
    description: 'Get instant virtual cards and order physical cards delivered worldwide',
    gradient: 'from-[#1E63C6] to-[#1476B8]',
  },
  {
    icon: Zap,
    title: 'Instant Withdrawals',
    description: 'Convert crypto to fiat instantly and spend anywhere cards are accepted',
    gradient: 'from-[#1476B8] to-[#0F8A8C]',
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Multi-layer security with biometric authentication and encryption',
    gradient: 'from-[#0F8A8C] to-[#1E63C6]',
  },
  {
    icon: Globe,
    title: 'Global Acceptance',
    description: 'Use your card at millions of merchants worldwide',
    gradient: 'from-[#1E63C6] to-[#0F8A8C]',
  },
  {
    icon: Wallet,
    title: 'Multi-Currency Wallet',
    description: 'Store and manage multiple cryptocurrencies in one secure wallet',
    gradient: 'from-[#1476B8] to-[#1E63C6]',
  },
  {
    icon: TrendingUp,
    title: 'Real-Time Rates',
    description: 'Get the best conversion rates with real-time market prices',
    gradient: 'from-[#0F8A8C] to-[#1476B8]',
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
      className="relative group"
    >
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
        
        {/* Icon */}
        <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
        <p className="text-white/60">{feature.description}</p>

        {/* Hover glow effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
      </div>
    </motion.div>
  );
}

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="relative py-24 bg-black">
      <SparkleOverlay count={6} color="#0ea5e9" style="subtle" />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E63C6]/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Powerful Features for
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              Modern Finance
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything you need to seamlessly bridge the gap between crypto and traditional finance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}