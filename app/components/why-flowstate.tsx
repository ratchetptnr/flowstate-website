'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export function WhyFlowState() {
  return (
    <section className="w-full px-6 py-24" style={{ backgroundColor: '#EDECE8' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#415049' }}>
            Flow is that sweet spot between effort and ease.
          </h2>
          <div className="text-lg space-y-4 mb-8" style={{ color: '#415049' }}>
            <p>
              Most of us hit it by accident. But what if you could step into it on purpose?
            </p>
            <p>
              This is about more than productivity apps and Pomodoro timers. It's about creating the conditions where deep work actually happens. Good space. Focused people. No distractions. Just you and the thing you came to do.
            </p>
          </div>
          <blockquote className="border-l-4 pl-6 py-4 italic text-xl" style={{ borderColor: '#415049', color: '#415049' }}>
            "Co-working? Nah, co-dependant working only in Namma Chennai rn &lt;3"
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
