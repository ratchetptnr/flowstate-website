'use client';

import { motion } from 'framer-motion';
import { ResponsiveBlob } from './responsive-blob';

export function HeroSection() {
  const scrollToSessions = () => {
    const element = document.getElementById('upcoming-sessions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col p-16"
      style={{ backgroundColor: '#E8F5E9' }}
    >
      {/* Top section */}
      <div className="mb-2">
        {/* Logo */}
        <motion.h1
          className="font-shrikhand text-[72px] leading-none mb-2"
          style={{
            color: '#2CAAC9',
            letterSpacing: '-0.04em'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          flowstate
        </motion.h1>

        {/* Description below logo */}
        <motion.p
          className="font-inter text-[28px] font-normal leading-[36px] mb-4 max-w-4xl"
          style={{ color: '#1C1C1C' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          3-hour coworking sessions at Chennai's best cafés. Come alone, work with others, actually get shit done.
        </motion.p>

        {/* CTA Button - below text on mobile only */}
        <motion.button
          onClick={scrollToSessions}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:hidden px-6 py-3 text-base font-medium text-white mb-12"
          style={{
            backgroundColor: '#111111',
            borderRadius: '9999px'
          }}
        >
          Book your session
        </motion.button>
      </div>

      {/* Center responsive blob */}
      <div className="flex-1 flex items-center justify-center my-12 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-6xl h-96"
        >
          <ResponsiveBlob />
        </motion.div>
      </div>

      {/* Headline at bottom */}
      <motion.h2
        className="font-inter text-[28px] font-normal leading-[36px] max-w-3xl"
        style={{ color: '#1C1C1C' }} // Radix neutral 11, size 7
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Stop pretending your house is a workspace
      </motion.h2>
    </section>
  );
}
