'use client';

import { Instagram, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">FlowState</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              3-hour coworking sessions at Chennai's best cafés. Work with focus, actually get shit done.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#upcoming-sessions" className="hover:text-white transition-colors">
                  Upcoming Sessions
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#partner-cafes" className="hover:text-white transition-colors">
                  Partner Cafés
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a
                  href="https://instagram.com/theflow.state"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@theflow.state"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <MapPin size={16} />
                  Chennai, India
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Booking Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-400 text-sm text-center">
            Bookings are non-refundable but can be transferred to another session. Food credit valid only during your booked session. By booking, you agree to our session guidelines: phones on silent, respect others' focus time, clean up after yourself.
          </p>
          <p className="text-slate-500 text-xs text-center mt-4">
            © {new Date().getFullYear()} FlowState. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
