'use client';

export function WhoThisIsFor() {
  return (
    <section className="w-full bg-slate-50 px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          If you've ever tried to work from your bed, this is for you.
        </h2>

        <div className="prose prose-lg max-w-none text-slate-700 space-y-6">
          <p>
            Freelancers tired of pitching clients from their bedroom. Students who can't focus in the library. Remote workers who miss having coworkers. Entrepreneurs who need accountability. Anyone who's realized their house isn't really a workspace.
          </p>

          <p>
            You don't need to be super productive or have everything figured out. You just need to show up with something to work on and the intention to actually do it.
          </p>

          <div className="bg-white p-8 rounded-lg border border-slate-200 mt-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Who we serve:</h3>
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span>Freelancers and independent professionals</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span>Remote workers needing a change of scenery</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span>Students seeking focused work environments</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span>Entrepreneurs and creators</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">→</span>
                <span>Anyone who wants accountability and community</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
