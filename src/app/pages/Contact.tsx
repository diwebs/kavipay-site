import { motion } from 'motion/react';
import { Navigation } from '../components/Navigation';
import { PageHeader } from '../components/PageHeader';
import { Footer } from '../components/Footer';
import { Mail, MessageSquare, Phone, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const contactChannels = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a message and we\'ll get back to you within 24 hours',
    details: 'support@kavipay.io',
    action: 'Send Email',
    link: 'mailto:support@kavipay.io',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant help from our support team in real-time',
    details: 'Available 24/7',
    action: 'Open Chat',
    link: '#',
  },
  {
    icon: Phone,
    title: 'In-App Support',
    description: 'Access support directly from your Kavipay mobile app',
    details: '24/7 Live Chat',
    action: 'Open App',
    link: '#',
  },
  {
    icon: Clock,
    title: 'Complaints Department',
    description: 'File a formal complaint for unresolved issues',
    details: 'complaints@kavipay.io',
    action: 'File Complaint',
    link: 'mailto:complaints@kavipay.io',
  },
];

const specializedContacts = [
  {
    category: 'Data Protection Officer',
    description: 'For privacy concerns and data protection inquiries',
    email: 'dpo@kavipay.io',
  },
  {
    category: 'Security Issues',
    description: 'Report security vulnerabilities and suspicious activity',
    email: 'security@kavipay.io',
  },
  {
    category: 'Privacy Inquiries',
    description: 'Questions about our privacy policy and data handling',
    email: 'privacy@kavipay.io',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our support team. We're here to help!"
      />

      {/* Contact Methods Grid */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {contactChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={channel.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-gradient-to-br from-[#1E63C6] to-[#0F8A8C] p-3 rounded-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{channel.title}</h3>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm mb-4">{channel.description}</p>
                  <p className="text-white/80 font-medium text-sm mb-4">{channel.details}</p>
                  <a
                    href={channel.link}
                    className="inline-block px-4 py-2 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm"
                  >
                    {channel.action}
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent">
              Send us a Message
            </h2>
            <p className="text-white/60 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                >
                  <option value="">Select a subject...</option>
                  <option value="billing">Billing & Payments</option>
                  <option value="technical">Technical Support</option>
                  <option value="security">Security Issue</option>
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Specialized Contacts */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#1E63C6] to-[#0F8A8C] bg-clip-text text-transparent"
          >
            Specialized Contacts
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="space-y-4"
          >
            {specializedContacts.map((contact, index) => (
              <motion.div
                key={contact.category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{contact.category}</h3>
                    <p className="text-white/60 text-sm">{contact.description}</p>
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="ml-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    {contact.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
