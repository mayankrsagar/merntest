export function HeroSection() {
  const features = [
    { title: 'No interference', text: 'No third-party interference' },
    { title: '1st cloud platform', text: 'To allow data control and ownership' },
    { title: '1st cloud infrastructure', text: 'To provide transparency over your data streams' },
    { title: 'Dynamic infrastructure', text: 'Cloud, hybrid, or on-prem form' },
  ];

  return (
    <section className="bg-[#F7FF5C] pt-16 pb-8 px-4 min-h-screen flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-gray-900 font-bold text-5xl md:text-6xl leading-tight">
          By Europeans, for Europeans
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-900">
          Privacy and security that Europeans need, demand and expect. Without giving other nations control over our data.
        </p>
      </div>
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
        {features.map((f, idx) => (
          <div key={idx} className="px-4">
            <div className="border-t border-gray-600 w-12 mb-4 mx-auto sm:mx-0"></div>
            <h3 className="text-gray-900 font-semibold text-lg text-center sm:text-left">
              {f.title}
            </h3>
            <p className="text-gray-900 mt-2 text-center sm:text-left text-sm">
              {f.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}