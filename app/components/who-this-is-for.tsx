'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export function WhoThisIsFor() {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
            If you've ever tried to work from your bed, this is for you.
          </h2>
          <div className="text-lg text-slate-600 space-y-4">
            <p>
              Freelancers tired of pitching clients from their bedroom. Students who can't focus in the library. Remote workers who miss having coworkers. Entrepreneurs who need accountability. Anyone who's realized their house isn't really a workspace.
            </p>
            <p>
              You don't need to be super productive or have everything figured out. You just need to show up with something to work on and the intention to actually do it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
