'use client';

export function FlowStatePromise() {
  return (
    <section className="w-full bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          We're not here to romanticize hustle culture.
        </h2>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
          <p>
            This isn't about grinding until you burn out. It's about reclaiming focus in a world designed to distract you.
          </p>

          <p>
            Bring joy back to your work through the little things. A good cup of coffee. A comfortable chair. People who aren't scrolling Instagram while pretending to work. Space that respects what you're trying to build.
          </p>

          <p className="text-xl font-semibold text-slate-900">
            Don't chase productivity through apps. Just get out there and actually do it.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">The FlowState Promise:</h3>
          <ul className="space-y-3 text-blue-900">
            <li className="flex gap-3">
              <span>✓</span>
              <span>Spaces designed for real work, not Instagram photos</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span>People committed to focus, not networking small talk</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span>Support for your work, not pressure to hustle</span>
            </li>
            <li className="flex gap-3">
              <span>✓</span>
              <span>Affordability that makes sense</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
