'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const scrollToSessions = () => {
    const element = document.getElementById('upcoming-sessions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col" style={{ backgroundColor: '#EDECE8' }}>
      {/* Logo in top left */}
      <div className="absolute top-6 left-6 z-10">
        <Image
          src="/logo.png"
          alt="FlowState logo"
          width={80}
          height={80}
          className="w-16 h-16 md:w-20 md:h-20"
        />
      </div>

      {/* Content container with padding */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              style={{ color: '#415049' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Stop pretending your house<br />is a workspace.
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto"
              style={{ color: '#415049' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              3-hour coworking sessions at Chennai's best cafés. Come alone, work with others, actually get shit done.
            </motion.p>

            <motion.p
              className="text-lg mb-8"
              style={{ color: '#415049' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ₹600 per session (₹400 back on food and drinks)
            </motion.p>

            <motion.button
              onClick={scrollToSessions}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 transition-colors"
              style={{ backgroundColor: '#7F654E', color: '#EDECE8' }}
            >
              Book Your Next Session <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Hero image at bottom - centered with max width */}
      <div className="relative w-full flex justify-center pb-0">
        <Image
          src="/hero.png"
          alt="FlowState mascot"
          width={512}
          height={512}
          className="w-full max-w-lg h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
