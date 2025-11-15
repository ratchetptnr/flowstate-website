'use client';

import { motion } from 'framer-motion';

export function SolutionSection() {
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
          What is Flowstate?
          <br />
          It's the sweet spot between effort and ease.
        </motion.h2>
      </div>

      {/* Center area for blob (placeholder) */}
      <div className="flex-1 flex items-center justify-center my-12 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-6xl h-96"
        >
          {/* Blob placeholder */}
        </motion.div>
      </div>

      {/* Headline at bottom */}
      <motion.h2
        className="font-inter text-[28px] font-normal leading-[36px] max-w-3xl"
        style={{ color: '#1C1C1C' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        3-hour coworking sessions at Chennai's best cafés. Come alone, work with others, actually get shit done.
      </motion.h2>
    </section>
  );
}
