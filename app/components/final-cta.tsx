'use client';

import { Button } from '@/components/ui/button';

export function FinalCTA() {
  const scrollToSessions = () => {
    const element = document.getElementById('upcoming-sessions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 px-6 py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl md:text-6xl font-bold text-slate-900">
          Ready to actually get shit done?
        </h2>

        <p className="text-2xl text-slate-700 leading-relaxed">
          Stop procrastinating. Stop doom-scrolling. Stop pretending you'll be productive tomorrow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            onClick={scrollToSessions}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg"
          >
            Book Your Session Now
          </Button>
        </div>

        <div className="pt-12 space-y-4">
          <p className="text-slate-600">Have questions?</p>
          <p className="text-slate-700">
            DM us on{' '}
            <a
              href="https://instagram.com/theflow.state"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold underline"
            >
              Instagram @theflow.state
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
