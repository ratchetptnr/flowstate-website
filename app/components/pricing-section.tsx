'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function PricingSection() {
  const scrollToSessions = () => {
    const element = document.getElementById('upcoming-sessions');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-slate-50 px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center">
          ₹600 per session. ₹400 back in your pocket.
        </h2>

        <Card className="p-12 bg-white border border-slate-200">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <p className="text-6xl font-bold text-blue-600">₹600</p>
              <p className="text-xl text-slate-700">
                Book a session for ₹600. Get ₹400 as credit for food and drinks at the café.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-lg text-blue-900 font-semibold text-center">
                So really, you're paying ₹200 for 3 hours of focused work time with like-minded people.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">What's included:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>3 hours of focused coworking time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Access to partner café with good coffee & food</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>₹400 food & beverage credit</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Optional 15-minute networking break</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Community of focused people</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-600 text-center">
              No memberships. No monthly fees. Just book when you need it.
            </p>

            <Button
              size="lg"
              onClick={scrollToSessions}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg"
            >
              View Upcoming Sessions
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
