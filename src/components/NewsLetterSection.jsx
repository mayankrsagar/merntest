"use client";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export function NewsletterSection() {
  return (
    <section className="px-4 py-12 bg-[#F7FF5C]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Subscribe to our Newsletter
          </h2>
          <p className="mt-2 text-base text-gray-900">
            If you want to follow our progress on developing what Europeans want and need, done by Europeans.
          </p>
        </div>
        <form className="flex w-full lg:w-auto" 
          onSubmit={e => e.preventDefault()}
          >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-900 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-3 bg-white border border-gray-900 rounded-r-md flex items-center justify-center"
          >
            <ArrowRightIcon className="h-5 w-5 text-gray-900" />
          </button>
        </form>
      </div>
    </section>
  );
}