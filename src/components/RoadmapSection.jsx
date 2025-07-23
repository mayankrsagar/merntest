export function RoadmapSection() {
  const stages = [
    { label: 'Stage 1', title: 'Cloud infrastructure', action: 'Book a demo', highlight: false },
    { label: 'Stage 2', title: 'Collaboration', action: 'Try it', highlight: true },
    { label: 'Stage 3', title: 'Communication', action: null, highlight: false },
    { label: 'Stage 4', title: 'Connectivity', action: null, highlight: false },
    { label: 'Stage 5', title: 'Entertainment', action: null, highlight: false },
  ];
  return (
    <section className="px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-medium text-gray-900">Our Road to Creating Data Ownership and Security</h3>
        <div className="mt-6 space-y-4">
          {stages.map((s, i) => (
            <div
              key={i}
              className={
                'flex items-center justify-between p-4 rounded ' +
                (s.highlight ? 'bg-[#F7FF5C]' : 'bg-transparent')
              }
            >
              <div>
                <p className="text-sm font-semibold text-gray-900">{s.label}</p>
                <p className={s.highlight ? 'mt-1 text-base text-gray-900' : 'mt-1 text-base text-gray-500'}>
                  {s.title}
                </p>
              </div>
              {s.action && (
                <button
                  className={
                    'px-4 py-2 border rounded font-medium ' +
                    (s.highlight
                      ? 'border-gray-900 text-gray-900'
                      : 'border-gray-500 text-gray-500')
                  }
                >
                  {s.action}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}