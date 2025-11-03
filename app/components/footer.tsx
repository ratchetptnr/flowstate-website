'use client';

import { Instagram, MapPin } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

export function Footer() {
  const faqs = [
    {
      q: "What if I need to cancel?",
      a: "Bookings are non-refundable, but you can transfer your spot to another session. Just let us know 24 hours in advance."
    },
    {
      q: "Do I have to network?",
      a: "Nope. The 15-minute networking break is optional. Some sessions are completely silent with no networking at all."
    },
    {
      q: "What should I bring?",
      a: "Your laptop, your work, headphones if you need them. Everything else is at the café."
    },
    {
      q: "Can I bring a friend?",
      a: "Absolutely. They'll need to book their own spot though."
    },
    {
      q: "What if I finish early?",
      a: "You can leave whenever. But you might as well stay—you already paid for the time, and who knows what you might accomplish."
    },
    {
      q: "Is the food credit shared?",
      a: "Nope, it's per person. Order whatever you want up to ₹400."
    }
  ];

  return (
    <>
      {/* FAQ Section */}
      <section className="w-full bg-white px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">
            Frequently Asked Questions
          </h2>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200"
              >
                <Accordion.Trigger className="w-full text-left px-6 py-4 font-semibold text-lg text-slate-900 hover:bg-slate-100 transition-colors flex justify-between items-center group">
                  {faq.q}
                  <span className="text-2xl group-data-[state=open]:rotate-45 transition-transform">+</span>
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-4 text-slate-600 data-[state=open]:animate-slideDown">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-slate-900 text-white px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">FlowState</h3>
              <p className="text-slate-400">
                Coworking sessions at Chennai's best cafés.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#upcoming-sessions" className="hover:text-white transition-colors">Upcoming Sessions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partner Cafés</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  <a href="https://instagram.com/theflow.state" className="hover:text-white transition-colors">
                    @theflow.state
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Chennai, India
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-500">
              Bookings are non-refundable but can be transferred to another session. Food credit valid only during your booked session. By booking, you agree to our session guidelines: phones on silent, respect others' focus time, clean up after yourself.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
