'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export function PricingSection() {
  const scrollToSessions = () => {
    const element = document.getElementById('upcoming-sessions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full px-6 py-24" style={{ backgroundColor: '#415049' }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#EDECE8' }}>
            ₹600 per session. ₹400 back in your pocket.
          </h2>
          <div className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: '#EDECE8' }}>
            <p className="mb-4">
              Book a session for ₹600. Get ₹400 as credit for food and drinks at the café. So really, you're paying ₹200 for 3 hours of focused work time with like-minded people.
            </p>
            <p>
              No memberships. No monthly fees. Just book when you need it.
            </p>
          </div>
          <motion.button
            onClick={scrollToSessions}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 transition-colors"
            style={{ backgroundColor: '#7F654E', color: '#EDECE8' }}
          >
            View Upcoming Sessions <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
