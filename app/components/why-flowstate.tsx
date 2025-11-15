'use client';

import { motion } from 'framer-motion';

function SubtractBlob() {
  return (
    <div className="w-full h-full flex items-end justify-center">
      <svg
        viewBox="0 0 1097 261"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M978.099 0C1043.54 0.000263888 1096.6 53.0546 1096.6 118.5V250.501C1096.6 254.039 1096.44 257.54 1096.14 260.999H0.459961C0.156315 257.54 1.41798e-05 254.039 0 250.501V118.5C0.000262316 53.0545 53.0544 0 118.5 0C152.34 7.67534e-05 182.866 14.1864 204.459 36.9346C226.052 14.1861 256.579 0.000127923 290.419 0C324.259 0 354.786 14.1862 376.379 36.9346C397.972 14.1861 428.498 5.96975e-05 462.339 0C496.179 0 526.706 14.1862 548.299 36.9346C569.891 14.1861 600.418 0 634.259 0C668.099 0 698.625 14.1864 720.218 36.9346C741.81 14.1859 772.338 0 806.179 0C840.019 6.82252e-05 870.545 14.1864 892.138 36.9346C913.73 14.186 944.258 0 978.099 0Z"
          fill="#2CAAC9"
        />
      </svg>
    </div>
  );
}

export function WhyFlowState() {
  const cafes = ['Sorocco', 'Summer House Eatery', 'HALT', 'CHAMIERS'];

  return (
    <section
      className="relative min-h-screen flex flex-col pt-16 px-16 pb-0"
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

      {/* Bottom subtract blob - touching the bottom */}
      <div className="w-full h-64">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full h-full"
        >
          <SubtractBlob />
        </motion.div>
      </div>
    </section>
  );
}
