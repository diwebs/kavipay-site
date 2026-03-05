import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Smartphone, CreditCard as CreditCardIcon } from 'lucide-react';
import SparkleOverlay from './SparkleOverlay';

// Correct imports for images
import physicalCardImg from '../../assets/kavi_visual.png';
import card2Img from '../../assets/card2.png';

export function CardShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState<'virtual' | 'physical' | null>(null);

  return (
    <section id="cards" className="relative py-24 bg-black overflow-hidden">
      <SparkleOverlay count={8} color="#06b6d4" style="flowing" />

      {/* Background blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1E63C6]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0F8A8C]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
              Your Crypto,
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
              Your Way
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Choose between virtual cards for instant online payments or physical cards for everyday spending
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Virtual Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onHoverStart={() => setHoveredCard('virtual')}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative group"
          >
            <div className="relative">
              <motion.div
                className="relative aspect-[1.586/1] rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Virtual Card Background Image */}
                <img
                  src={card2Img}
                  alt="Virtual Card"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />

                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"
                  animate={{
                    opacity: hoveredCard === 'virtual' ? [0.2, 0.4, 0.2] : 0.2,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="w-8 h-8 text-white/80" />
                      <span className="text-white/80 font-medium">Virtual</span>
                    </div>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <div className="w-8 h-6 bg-white/40 rounded" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 font-mono text-white text-xl md:text-2xl tracking-wider">
                      •••• •••• •••• 1234
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-white/60 text-xs mb-1">CARD HOLDER</div>
                        <div className="text-white font-semibold">YOUR NAME</div>
                      </div>
                      <div>
                        <div className="text-white/60 text-xs mb-1">EXPIRES</div>
                        <div className="text-white font-semibold">12/28</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Holographic shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 rounded-3xl"
                  style={{ backgroundSize: '200% 200%' }}
                  animate={{
                    backgroundPosition: hoveredCard === 'virtual' ? ['0% 0%', '100% 100%'] : '0% 0%',
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                />
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-3xl opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500 -z-10" />
            </div>

            {/* Virtual Card Description */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center space-x-2">
                <Smartphone className="w-6 h-6 text-[#1476B8]" />
                <span>Virtual Card</span>
              </h3>
              <p className="text-white/60 mb-4">
                Get instant access to a virtual card. Perfect for online shopping, subscriptions, and digital payments.
              </p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#1476B8] rounded-full" />
                  <span>Instant creation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#1476B8] rounded-full" />
                  <span>Multiple cards available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#1476B8] rounded-full" />
                  <span>Freeze/unfreeze anytime</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Physical Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onHoverStart={() => setHoveredCard('physical')}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative group"
          >
            <div className="relative">
              <motion.div
                className="relative aspect-[1.586/1] rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Physical Card Image */}
                <img
                  src={physicalCardImg}
                  alt="Physical card"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E63C6]/30 via-[#1476B8]/20 to-[#0F8A8C]/30" />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 20% 50%, rgba(20, 118, 184, 0.3) 1px, transparent 1px)',
                    backgroundSize: '3px 3px',
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#1E63C6]/30 via-transparent to-[#0F8A8C]/30"
                  animate={{
                    opacity: hoveredCard === 'physical' ? [0.4, 0.6, 0.4] : 0.4,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#1E63C6] via-[#1476B8] to-[#0F8A8C] bg-clip-text text-transparent">
                      KaviPay
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-lg flex items-center justify-center shadow-lg shadow-[#1476B8]/50">
                      <div className="w-8 h-6 bg-gradient-to-br from-[#1476B8] to-[#0F8A8C] rounded" />
                    </div>
                  </div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1476B8]/30 to-transparent rounded-3xl"
                  style={{ backgroundSize: '200% 200%' }}
                  animate={{
                    backgroundPosition: hoveredCard === 'physical' ? ['0% 0%', '100% 100%'] : '0% 0%',
                  }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                />
              </motion.div>

              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] rounded-3xl opacity-0 group-hover:opacity-50 blur-2xl transition-opacity duration-500 -z-10" />
            </div>

            {/* Physical Card Description */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3 flex items-center space-x-2">
                <CreditCardIcon className="w-6 h-6 text-[#0F8A8C]" />
                <span>Physical Card</span>
              </h3>
              <p className="text-white/60 mb-4">
                Premium metal card delivered to your door. Use it anywhere cards are accepted worldwide.
              </p>
              <ul className="space-y-2 text-white/60">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#0F8A8C] rounded-full" />
                  <span>Premium metal design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#0F8A8C] rounded-full" />
                  <span>Contactless payments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#0F8A8C] rounded-full" />
                  <span>Global acceptance</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}