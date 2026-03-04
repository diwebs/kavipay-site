import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

export default function Partnership() {
  // Inject Bitrix24 JS form
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://crm.ploutoslabs.io/upload/crm/form/loader_7_cdyxrc.js?' + (Date.now() / 180000 | 0);
    script.async = true;
    script.setAttribute('data-b24-form', 'inline/7/cdyxrc');
    script.setAttribute('data-skip-moving', 'true');

    const container = document.getElementById('bitrix-form-container');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation Header */}
      <Navigation />

      {/* Partnership Form Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        {/* Background Glow Circles */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#1E63C6]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#0F8A8C]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </div>

        {/* Section Header */}
        <div className="relative max-w-7xl mx-auto text-center mb-12 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Partner With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Use the form below to submit a partnership inquiry. 
          </motion.p>
        </div>

        {/* Form Container */}
        <div className="relative max-w-4xl mx-auto z-10">
          <div className="rounded-lg overflow-hidden border border-white/10">
            <div
              id="bitrix-form-container"
              className="w-full h-[640px] bg-black"
            />
          </div>

          {/* Backup Button */}
          <div className="text-center mt-6">
            <a
              href="https://ploutoslabs.bitrix24.site/crm_form_etnos/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#1476B8]/50 transition-shadow"
            >
              <span>Open Partnership Form</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Optional Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#1476B8] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}