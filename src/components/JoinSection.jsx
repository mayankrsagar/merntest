"use client";
export function JoinSection() {
  return (
    <section className="pt-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Join the future of data sovereignty</h2>
        <form className="mt-4 md:mt-0 flex w-full md:w-auto" 
        onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            required
          />
          <button className="px-4 py-2 bg-gray-900 text-white font-medium rounded-r-md" type="submit">Join</button>
        </form>
      </div>
      <hr className="mt-6 border-gray-300" />
    </section>
  );
}