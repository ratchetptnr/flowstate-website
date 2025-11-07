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
      <section className="w-full px-6 py-24" style={{ backgroundColor: '#EDECE8' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#415049' }}>
            Frequently Asked Questions
          </h2>

          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: '#EDECE8' }}
              >
                <Accordion.Trigger className="w-full text-left px-6 py-4 font-semibold text-lg transition-colors flex justify-between items-center group" style={{ color: '#415049' }}>
                  {faq.q}
                  <span className="text-2xl group-data-[state=open]:rotate-45 transition-transform">+</span>
                </Accordion.Trigger>
                <Accordion.Content className="px-6 pb-4 data-[state=open]:animate-slideDown" style={{ color: '#415049' }}>
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 py-16" style={{ backgroundColor: '#415049' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#EDECE8' }}>FlowState</h3>
              <p style={{ color: '#EDECE8' }}>
                Coworking sessions at Chennai's best cafés.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#EDECE8' }}>Quick Links</h4>
              <ul className="space-y-2" style={{ color: '#EDECE8' }}>
                <li><a href="#upcoming-sessions" className="hover:opacity-80 transition-opacity">Upcoming Sessions</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">Partner Cafés</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">FAQ</a></li>
                <li><a href="#" className="hover:opacity-80 transition-opacity">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: '#EDECE8' }}>Connect</h4>
              <div className="space-y-2" style={{ color: '#EDECE8' }}>
                <p className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  <a href="https://instagram.com/theflow.state" className="hover:opacity-80 transition-opacity">
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

          <div className="border-t pt-8" style={{ borderColor: '#7F654E' }}>
            <p className="text-sm" style={{ color: '#EDECE8' }}>
              Bookings are non-refundable but can be transferred to another session. Food credit valid only during your booked session. By booking, you agree to our session guidelines: phones on silent, respect others' focus time, clean up after yourself.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
