import Link from 'next/link';

export function SupportSection() {
  return (
    <section className="px-4 py-12 bg-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
          Become a supporter and help us on our Journey
        </h2>
        <Link
          href="#"
          className="mt-6 inline-flex items-center justify-center px-6 py-3 border border-gray-900 rounded-md text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition"
        >
          Read more about how to →
        </Link>
      </div>
    </section>
  );
}