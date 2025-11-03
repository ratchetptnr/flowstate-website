'use client';

import { Card } from '@/components/ui/card';
import { Calendar, Coffee, CheckCircle2 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Book Your Spot',
      description: 'Pick a session at one of our partner cafés. ₹600 gets you in, ₹400 goes right back to you as credit for food and drinks.',
      icon: Calendar,
    },
    {
      number: 2,
      title: 'Show Up & Focus',
      description: "Bring your laptop and that project you've been avoiding. 3 hours of uninterrupted work with people who get it.",
      icon: Coffee,
    },
    {
      number: 3,
      title: 'Actually Finish Something',
      description: 'Walk out with progress, not just plans. And maybe some new connections if you stuck around for the networking bit.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="w-full bg-slate-50 px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center">
          One task. Three hours. Zero excuses.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.number}
                className="p-8 bg-white border border-slate-200 flex flex-col gap-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
