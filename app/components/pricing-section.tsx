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
    <section className="w-full bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
            ₹600 per session. ₹400 back in your pocket.
          </h2>
          <div className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
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
            className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:bg-slate-800 transition-colors"
          >
            View Upcoming Sessions <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
