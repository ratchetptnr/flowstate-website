'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const scrollToSessions = () => {
    const element = document.getElementById('upcoming-sessions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative min-h-screen flex flex-col p-16"
      style={{ backgroundColor: '#E8F5E9' }}
    >
      {/* Top section with logo and tagline */}
      <div className="mb-2">
        <motion.h1
          className="font-shrikhand text-[72px] leading-none mb-4"
          style={{
            color: '#2CAAC9',
            letterSpacing: '-0.04em'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Flowstate
        </motion.h1>
        <motion.p
          className="font-inter text-[28px] font-normal leading-[36px] max-w-3xl"
          style={{ color: '#1C1C1C' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Coworking sessions at Chennai's best cafés.
        </motion.p>
      </div>

      {/* Empty center space */}
      <div className="flex-1"></div>

      {/* Bottom disclaimer text */}
      <motion.p
        className="font-inter text-[16px] font-normal leading-[24px] max-w-5xl"
        style={{ color: '#1C1C1C' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Bookings are non-refundable but can be transferred to another session. Food credit valid only during your booked session. By booking, you agree to our session guidelines: phones on silent, respect others' focus time, clean up after yourself.
      </motion.p>
    </footer>
  );
}
