import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { CardShowcase } from '../components/CardShowcase';
import { Security } from '../components/Security';
import { Stats } from '../components/Stats';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { SiteButton } from '../components/SiteButton'; // <- import here

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <CardShowcase />
      <Security />
      <Stats />
      <CTA />
      <Footer />

      {/* AI Chatbot Script */}
      <SiteButton />
    </div>
  );
}