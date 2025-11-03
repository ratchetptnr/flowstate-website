'use client';

export function BookingAppSection() {
  return (
    <section id="upcoming-sessions" className="w-full bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          Upcoming Sessions
        </h2>

        <div className="bg-slate-100 rounded-lg p-12 text-center">
          <p className="text-xl text-slate-600 mb-6">
            The session booking application will be integrated here.
          </p>
          <p className="text-slate-500">
            This is where users can view available sessions, select a date/time, and complete their booking with integrated payment processing via Razorpay.
          </p>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">About the Booking System</h3>
          <p className="text-blue-800 text-sm leading-relaxed">
            The session booking functionality is powered by our dedicated booking application, which handles calendar management, real-time slot availability, secure payment processing through Razorpay, email confirmations with calendar invites, and Google Calendar integration. Users can browse available sessions, select their preferred time slot, enter their details, and complete payment securely—all within this integrated booking interface.
          </p>
        </div>
      </div>
    </section>
  );
}
