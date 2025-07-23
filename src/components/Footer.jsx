import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white px-6 py-12 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-8">
        {/* Products */}
        <div>
          <h3 className="font-semibold mb-4 text-sm">Products</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Apura IaaS</Link></li>
            <li><Link href="#" className="hover:underline">Apura Workspace</Link></li>
            <li><Link href="#" className="hover:underline">Apura Socials</Link></li>
          </ul>
        </div>

        {/* Roadmap */}
        <div>
          <h3 className="font-semibold mb-4 text-sm">Roadmap</h3>
          <ul className="space-y-2 text-sm">
            <li>Stage 1</li>
            <li>Stage 2</li>
            <li>Stage 3</li>
            <li>Stage 4</li>
            <li>Stage 5</li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="font-semibold mb-4 text-sm">Other Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Help us on our journey</Link></li>
            <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div className="md:col-span-1">
          <h3 className="font-semibold mb-4 text-sm">Socials</h3>
          <div className="flex space-x-4 pt-2">
            <Link href="#" aria-label="Facebook">
              <svg className="w-5 h-5 fill-white hover:fill-gray-300" viewBox="0 0 24 24">
                <path d="..."/>
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram">
              <svg className="w-5 h-5 fill-white hover:fill-gray-300" viewBox="0 0 24 24">
                <path d="..."/>
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter">
              <svg className="w-5 h-5 fill-white hover:fill-gray-300" viewBox="0 0 24 24">
                <path d="..."/>
              </svg>
            </Link>
            <Link href="#" aria-label="YouTube">
              <svg className="w-5 h-5 fill-white hover:fill-gray-300" viewBox="0 0 24 24">
                <path d="..."/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-400">
        © 2025 Apura Cloud. All rights reserved.
      </div>
    </footer>
  );
}
