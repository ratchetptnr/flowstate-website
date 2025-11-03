'use client';

export function ProblemSection() {
  return (
    <section className="w-full bg-slate-50 px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Cafés are cute... until the waiter gives you <em>that</em> stare.
        </h2>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
          <p>
            You know the look. You've been nursing one cold brew for two hours, and your laptop's still open. Corporate coworking spaces feel like beige prisons with bad coffee. And home? Let's be real—your mom's feeding schedule doesn't exactly optimize for deep work.
          </p>

          <p>
            You need a real workspace. Not one that judges you, charges by the hour, or comes with family commentary on your life choices.
          </p>

          <div className="bg-white p-8 rounded-lg border border-slate-200 mt-8">
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Cafés judge you if you're not constantly ordering</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Coworking spaces are overpriced and impersonal</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>Home distractions kill your focus</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">✗</span>
                <span>No sense of accountability or community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
