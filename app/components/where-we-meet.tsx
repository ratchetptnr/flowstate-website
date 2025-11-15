'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';

export function WhereWeMeet() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What if I need to cancel?",
      answer: "You can cancel up to 24 hours before the session for a full refund. Cancellations within 24 hours are non-refundable."
    },
    {
      question: "Do I have to network?",
      answer: "Absolutely not. The networking break is completely optional. If you want to keep your head down and work through it, that's totally fine."
    },
    {
      question: "What should I bring?",
      answer: "Just bring your laptop, charger, and whatever you need to work. We'll take care of the rest."
    },
    {
      question: "Can I bring a friend?",
      answer: "Yes! Your friend will need to book their own spot, but you're welcome to come together."
    },
    {
      question: "What if I finish early?",
      answer: "You're free to leave whenever you want. No hard feelings. Your food credit is valid for the entire session time though."
    },
    {
      question: "Is the food credit shared?",
      answer: "Nope, it's individual. Each person gets their own ₹400 credit to use during the session."
    }
  ];

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
          FAQ
        </motion.h2>
      </div>

      {/* Center area for FAQ accordion */}
      <div className="flex-1 flex flex-col items-center justify-center my-12 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-3xl"
        >
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className="border-b pb-6"
                style={{ borderColor: '#1C1C1C20' }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left py-4"
                >
                  <span className="font-inter text-[20px] font-normal" style={{ color: '#1C1C1C' }}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CaretDown size={24} color="#1C1C1C" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-inter text-[18px] font-normal pt-4" style={{ color: '#1C1C1C' }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
