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

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Book Your Spot",
      description: "Pick a session at one of our partner cafés. ₹600 gets you in, ₹400 goes right back to you as credit for food and drinks."
    },
    {
      number: "2",
      title: "Show Up & Focus",
      description: "Bring your laptop and that project you've been avoiding. 3 hours of uninterrupted work with people who get it."
    },
    {
      number: "3",
      title: "Actually Finish Something",
      description: "Walk out with progress, not just plans. And maybe some new connections if you stuck around for the networking bit."
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
            One task. Three hours. Zero excuses.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
