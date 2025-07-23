import Image from 'next/image';
import Link from 'next/link';

export function EuropeanSection() {
  return (
    <section className="px-6 py-20 bg-black text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Textual content */}
        <div>
          <h6 className="text-sm font-semibold text-white hover:underline hover:text-yellow-400 transition cursor-pointer mb-4 md:mb-6 cursor-pointer">About us</h6>
          <h2 className="text-5xl font-extrabold text-yellow-400 leading-tight">
            By Europeans, for Europeans
          </h2>
          <p className="mt-6 text-lg text-white leading-relaxed">
            Our vision is to empower governments, organizations and individuals
            with control and independence in the online realm.
          </p>
          <div className="mt-8">
            <Link
              href="#"
              className="inline-flex items-center px-5 py-2 border border-black bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition"
            >
              Read more about us →
            </Link>
          </div>
        </div>

        {/* Right: Map image with styling */}
        <div className="opacity-60">
          <Image 
          width={800}
          height={600}
            src="/europe-map.png"
            alt="Map of Europe"
            className="w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
