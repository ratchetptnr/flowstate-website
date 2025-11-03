'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export function FlowStatePromise() {
  return (
    <section className="w-full bg-slate-50 px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
            We're not here to romanticize hustle culture.
          </h2>
          <div className="text-lg text-slate-600 space-y-4">
            <p>
              This isn't about grinding until you burn out. It's about reclaiming focus in a world designed to distract you.
            </p>
            <p>
              Bring joy back to your work through the little things. A good cup of coffee. A comfortable chair. People who aren't scrolling Instagram while pretending to work. Space that respects what you're trying to build.
            </p>
            <p className="font-semibold text-slate-900">
              Don't chase productivity through apps. Just get out there and actually do it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
