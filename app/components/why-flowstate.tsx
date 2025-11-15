'use client';

import { motion } from 'framer-motion';

export function WhyFlowState() {
  const cafes = ['Sorocco', 'Summer House Eatery', 'HALT', 'CHAMIERS'];

  return (
    <section
      className="relative min-h-screen flex flex-col p-16"
      style={{ backgroundColor: '#E8F5E9' }}
    >
      {/* Top section with heading */}
      <div className="mb-2">
        <motion.h2
          className="font-inter text-[28px] font-normal leading-[36px] max-w-3xl"
          style={{ color: '#1C1C1C' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our cafe partners...
        </motion.h2>
      </div>

      {/* Middle section with cafe names */}
      <div className="flex-1 flex items-center justify-center my-12 w-full">
        <motion.div
          className="flex flex-wrap justify-center gap-x-16 gap-y-8 w-full max-w-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {cafes.map((cafe, index) => (
            <motion.div
              key={cafe}
              className="font-inter text-[28px] font-normal"
              style={{ color: '#1C1C1C' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              {cafe}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom blob area (placeholder) */}
      <div className="w-full h-64">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full h-full"
        >
          {/* Blob placeholder */}
        </motion.div>
      </div>
    </section>
  );
}
