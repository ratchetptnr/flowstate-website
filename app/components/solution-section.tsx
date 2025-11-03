'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function SolutionSection() {
  const features = [
    'Structured 3-hour blocks',
    'Silent coworking + optional networking',
    'Real cafés, real food, real atmosphere',
    'No membership, just book when you need it',
  ];

  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            What if cafés... but organized?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            FlowState runs 3-hour coworking sessions at Chennai's best cafés. We're talking places with actual atmosphere, good coffee, and food that doesn't taste like cardboard.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-lg text-slate-700">
            Show up. Work on your thing for 3 hours. Optional 15-minute networking break at the end if you want to talk to humans (no pressure if you don't).
          </p>
          <p className="text-lg text-slate-700">
            No awkward small talk. No pretending to like everyone. Just focused work around people who are also there to focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-slate-50 border border-slate-200 flex gap-4">
              <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <p className="text-slate-800 font-medium">{feature}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
