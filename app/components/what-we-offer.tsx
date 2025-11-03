'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export function WhatWeOffer() {
  const sessions = [
    {
      title: "Deep Work Sessions",
      description: "Heads down, phones away, get it done. Perfect for writing, coding, designing, or any work that needs your full brain."
    },
    {
      title: "Curated Sessions",
      description: "Themed sessions for specific groups—writers, artists, students. Same focused energy, similar goals."
    },
    {
      title: "Silent Co-working Hours",
      description: "Pure silence. No networking break. Just show up, work, leave. For when you need absolute focus."
    },
    {
      title: "Brainstorm + Jamming",
      description: "Got a project that needs collaboration? This one's louder. Bring a partner or make one there."
    }
  ];

  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-16 text-center text-slate-900">
            Different sessions for different modes.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{session.title}</h3>
                <p className="text-slate-600">{session.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
