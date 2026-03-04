import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { ChevronDown, Mail } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What is Kavipay?',
        a: 'Kavipay is a modern fintech platform that enables global payments with virtual and physical cards. We bridge the gap between cryptocurrency and traditional finance, allowing seamless transactions worldwide with zero fees.',
      },
      {
        q: 'Who operates Kavipay?',
        a: 'Kavipay is operated by a team of experienced fintech professionals dedicated to making global payments simple and accessible to everyone.',
      },
      {
        q: 'What services does Kavipay offer?',
        a: 'Kavipay offers virtual cards that work globally, physical cards for Nigeria, bill payments, crypto funding, bank transfers, and smart money tools for budgeting and spending insights.',
      },
      {
        q: 'Is Kavipay available only in Nigeria?',
        a: 'While we started in Nigeria, Kavipay is available to users globally. Virtual cards work worldwide, and physical cards are currently available in Nigeria with expansion planned.',
      },
    ],
  },
  {
    category: 'Cards & Payments',
    questions: [
      {
        q: 'What types of cards does Kavipay offer?',
        a: 'We offer instant virtual cards that work with Apple Pay and Google Pay, plus physical Visa/Mastercard cards. Virtual cards are available immediately, physical cards take 3-5 business days.',
      },
      {
        q: 'How quickly do I get my virtual card?',
        a: 'Virtual cards are issued instantly after account verification. You can start using them in seconds with Apple Pay, Google Pay, or online merchants.',
      },
      {
        q: 'Can I freeze or block my card?',
        a: 'Yes! You have full control over your card. Freeze it with a single tap in the app, and unfreeze when needed. You can also set transaction limits and block certain merchant categories.',
      },
    ],
  },
  {
    category: 'Funding & Transactions',
    questions: [
      {
        q: 'How can I fund my Kavipay card?',
        a: 'You can fund your card via crypto deposits, bank transfers, or other payment methods. Choose your preferred method in the app.',
      },
      {
        q: 'What cryptocurrencies are supported?',
        a: 'We support all major cryptocurrencies including Bitcoin, Ethereum, USDC, and more. Check the app for the complete list of supported tokens.',
      },
      {
        q: 'How long does crypto funding take?',
        a: 'Crypto funding typically takes 5-15 minutes depending on network confirmation times. Bank transfers usually complete within 1-2 business days.',
      },
    ],
  },
  {
    category: 'Security & Privacy',
    questions: [
      {
        q: 'Is Kavipay safe to use?',
        a: 'Yes! We use military-grade 256-bit encryption, 3D Secure authentication, and AI-powered fraud detection. Our platform is PCI DSS Level 1 certified with zero data breaches.',
      },
      {
        q: 'How is my data protected?',
        a: 'We comply with GDPR, PCI DSS, and ISO 27001 standards. Your data is encrypted end-to-end, and we never store sensitive payment information on our servers.',
      },
      {
        q: 'What should I do if I notice suspicious activity?',
        a: 'Immediately freeze your card in the app and contact our support team. We monitor all transactions in real-time and will investigate suspicious activity within 24 hours.',
      },
    ],
  },
  {
    category: 'Troubleshooting',
    questions: [
      {
        q: 'My transaction is pending. What should I do?',
        a: 'Most transactions complete within minutes. If still pending after 1 hour, check your internet connection and try again. If the issue persists, contact support.',
      },
      {
        q: "I can't log into my account.",
        a: 'Try resetting your password using the "Forgot Password" option. Ensure you have internet connectivity. Contact support if you need additional help.',
      },
      {
        q: 'My card was declined.',
        a: 'Common reasons: insufficient funds, transaction limit exceeded, or merchant category blocked. Check your available balance and transaction limits in the app.',
      },
    ],
  },
];

export default function FAQ() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about Kavipay"
      />

      {/* FAQ Categories */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="space-y-4"
          >
            {faqs.map((faqSection, sectionIdx) => (
              <motion.div
                key={faqSection.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
              >
                {/* Category Header */}
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === faqSection.category ? null : faqSection.category
                    )
                  }
                  className="w-full flex items-center justify-between p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all"
                >
                  <h2 className="text-xl font-semibold text-white">{faqSection.category}</h2>
                  <ChevronDown
                    className={`w-6 h-6 text-white/60 transition-transform ${
                      expandedCategory === faqSection.category ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Questions */}
                {expandedCategory === faqSection.category && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2"
                  >
                    {faqSection.questions.map((item, idx) => {
                      const itemId = `${faqSection.category}-${idx}`;
                      return (
                        <motion.div
                          key={itemId}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                        >
                          <button
                            onClick={() => toggleQuestion(itemId)}
                            className="w-full flex items-start justify-between p-4 bg-white/2 hover:bg-white/5 border border-white/5 rounded-xl transition-all text-left"
                          >
                            <span className="font-medium text-white">{item.q}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-white/60 flex-shrink-0 ml-4 transition-transform ${
                                expandedQuestion === itemId ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {expandedQuestion === itemId && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 p-4 bg-white/5 border border-white/10 rounded-xl"
                            >
                              <p className="text-white/70 leading-relaxed">{item.a}</p>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
              Didn't find your answer?
            </h2>
            <p className="text-white/70 mb-6">
              Our support team is available 24/7 to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@kavipay.io"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                <span>Email Support</span>
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold transition-colors border border-white/10"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
