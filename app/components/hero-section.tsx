'use client';

import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToSessions = () => {
    const element = document.getElementById('upcoming-sessions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900">
            Stop pretending your house is a workspace.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            3-hour coworking sessions at Chennai's best cafés. Come alone, work with others, actually get shit done.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            onClick={scrollToSessions}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all"
          >
            Book Your Next Session
          </Button>
        </div>

        <p className="text-lg text-slate-700 pt-8">
          ₹600 per session (₹400 back on food and drinks)
        </p>

        <div className="pt-16 flex justify-center animate-pulse">
          <button
            onClick={scrollToSessions}
            className="text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Scroll to sessions"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
