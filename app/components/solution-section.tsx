'use client';

import { motion } from 'framer-motion';
import { Clock, Users, Coffee, Check } from 'lucide-react';

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

export function SolutionSection() {
  const features = [
    { icon: Clock, text: "Structured 3-hour blocks" },
    { icon: Users, text: "Silent coworking + optional networking" },
    { icon: Coffee, text: "Real cafés, real food, real atmosphere" },
    { icon: Check, text: "No membership, just book when you need it" }
  ];

  return (
    <section className="w-full bg-slate-50 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">
            What if cafés... but organized?
          </motion.h2>

          <motion.div variants={fadeInUp} className="text-lg text-slate-600 space-y-4 mb-12">
            <p>
              FlowState runs 3-hour coworking sessions at Chennai's best cafés. We're talking places with actual atmosphere, good coffee, and food that doesn't taste like cardboard.
            </p>
            <p>
              Show up. Work on your thing for 3 hours. Optional 15-minute networking break at the end if you want to talk to humans (no pressure if you don't).
            </p>
            <p>
              No awkward small talk. No pretending to like everyone. Just focused work around people who are also there to focus.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200 cursor-pointer"
              >
                <div className="p-2 bg-slate-100 rounded-lg">
                  <item.icon className="w-6 h-6 text-slate-700" />
                </div>
                <p className="text-lg text-slate-700 flex-1">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
