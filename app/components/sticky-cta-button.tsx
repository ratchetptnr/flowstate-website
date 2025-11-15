'use client';

import { motion } from 'framer-motion';

export function StickyCtaButton() {
  const scrollToSessions = () => {
    const element = document.getElementById('upcoming-sessions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      onClick={scrollToSessions}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-16 right-16 z-50 px-6 py-3 text-base font-medium text-white hidden md:block"
      style={{
        backgroundColor: '#111111',
        borderRadius: '9999px'
      }}
    >
      Book your session
    </motion.button>
  );
}
