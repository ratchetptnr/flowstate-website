'use client';

import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export function WhereWeMeet() {
  const cafes = [
    {
      name: 'Summer House Eatery',
      location: 'Alwarpet',
    },
    {
      name: 'Soroco',
      location: 'TBA',
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Partner cafés that actually get it.
        </h2>

        <p className="text-xl text-slate-700 leading-relaxed">
          We don't rent spaces or build new ones. We work with cafés that already have the vibe—good coffee, comfortable seating, the right energy for getting work done.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cafes.map((cafe, index) => (
            <Card key={index} className="p-8 bg-slate-50 border border-slate-200 flex gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{cafe.name}</h3>
                <p className="text-slate-600">{cafe.location}</p>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-lg text-slate-600 text-center italic">
          More locations coming soon. Want us at your favorite café? Let us know.
        </p>
      </div>
    </section>
  );
}
