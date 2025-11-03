'use client';

import { Card } from '@/components/ui/card';
import { Zap, Users, Volume2, Lightbulb } from 'lucide-react';

export function WhatWeOffer() {
  const sessionTypes = [
    {
      icon: Zap,
      title: 'Deep Work Sessions',
      description:
        'Heads down, phones away, get it done. Perfect for writing, coding, designing, or any work that needs your full brain.',
    },
    {
      icon: Users,
      title: 'Curated Sessions',
      description:
        'Themed sessions for specific groups—writers, artists, students. Same focused energy, similar goals.',
    },
    {
      icon: Volume2,
      title: 'Silent Co-working Hours',
      description:
        'Pure silence. No networking break. Just show up, work, leave. For when you need absolute focus.',
    },
    {
      icon: Lightbulb,
      title: 'Brainstorm + Jamming',
      description:
        "Got a project that needs collaboration? This one's louder. Bring a partner or make one there.",
    },
  ];

  return (
    <section className="w-full bg-slate-50 px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Different sessions for different modes.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessionTypes.map((session, index) => {
            const Icon = session.icon;
            return (
              <Card key={index} className="p-6 bg-white border border-slate-200 flex flex-col gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{session.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed">{session.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
