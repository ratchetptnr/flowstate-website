'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Instagram } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export function FinalCTA() {
  const scrollToSessions = () => {
    const element = document.getElementById('upcoming-sessions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full px-6 py-32" style={{ backgroundColor: '#415049' }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ color: '#EDECE8' }}>
            Ready to actually get shit done?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto" style={{ color: '#EDECE8' }}>
            Stop procrastinating. Stop doom-scrolling. Stop pretending you'll be productive tomorrow.
            <br /><br />
            Book a session. Show up. Work. It's that simple.
          </p>
          <motion.button
            onClick={scrollToSessions}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 transition-colors mb-8"
            style={{ backgroundColor: '#7F654E', color: '#EDECE8' }}
          >
            Book Your Session Now <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="flex items-center justify-center gap-2" style={{ color: '#EDECE8' }}>
            Have questions? DM us on Instagram
            <a href="https://instagram.com/theflow.state" className="inline-flex items-center gap-1 hover:underline" style={{ color: '#EDECE8' }}>
              <Instagram className="w-4 h-4" />
              @theflow.state
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
