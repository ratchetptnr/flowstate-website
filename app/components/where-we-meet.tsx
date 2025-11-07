'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export function WhereWeMeet() {
  const cafes = [
    { name: "Summer House Eatery", location: "Alwarpet" },
    { name: "Soroco", location: "Location TBD" }
  ];

  return (
    <section className="w-full px-6 py-24" style={{ backgroundColor: '#EDECE8' }}>
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#415049' }}>
            Partner cafés that actually get it.
          </h2>
          <p className="text-lg mb-12" style={{ color: '#415049' }}>
            We don't rent spaces or build new ones. We work with cafés that already have the vibe—good coffee, comfortable seating, the right energy for getting work done.
          </p>

          <div className="space-y-4 mb-8">
            {cafes.map((cafe, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4"
              >
                <MapPin className="w-6 h-6" style={{ color: '#415049' }} />
                <div>
                  <h3 className="font-bold text-lg" style={{ color: '#415049' }}>{cafe.name}</h3>
                  <p style={{ color: '#415049' }}>{cafe.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="italic" style={{ color: '#415049' }}>
            More locations coming soon. Want us at your favorite café? Let us know.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
