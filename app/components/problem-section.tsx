'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export function ProblemSection() {
  return (
    <section className="w-full px-6 py-24" style={{ backgroundColor: '#415049' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#EDECE8' }}>
            Cafés are cute... until the waiter gives you <em className="italic">that</em> stare.
          </h2>
          <div className="text-lg space-y-4" style={{ color: '#EDECE8' }}>
            <p>
              You know the look. You've been nursing one cold brew for two hours, and your laptop's still open. Corporate coworking spaces feel like beige prisons with bad coffee. And home? Let's be real—your mom's feeding schedule doesn't exactly optimize for deep work.
            </p>
            <p>
              You need a real workspace. Not one that judges you, charges by the hour, or comes with family commentary on your life choices.
            </p>
          </div>

          {/* Cat image */}
          <div className="mt-12 flex justify-center">
            <Image
              src="/2cat 1.png"
              alt="Running cat"
              width={400}
              height={200}
              className="w-full max-w-sm h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
