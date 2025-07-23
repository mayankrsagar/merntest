'use client';

import 'keen-slider/keen-slider.min.css';

import {
  useEffect,
  useRef,
} from 'react';

import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';

export default function ProductsSection() {
  const products = [
    {
      title: 'Run safely. Apura IaaS.',
      desc:
        'Apura IaaS is our service allowing customers to develop applications on our secured data ownership focused platform.',
      link: 'https://library-management-system-frontend-nu.vercel.app/',
      demo: 'Book a demo',
      featured: true,
    },
    {
      title: 'Work privately. Apura Workspace.',
      desc:
        'Apura Workspace is our alternative for Google workspace or Microsoft Teams. Giving the tools to effectively communicate with your organization without compromising on security and privacy.',
      link: 'https://library-management-system-frontend-nu.vercel.app/',
      demo: null,
      featured: false,
    },
    {
      title: 'Share confidently. Apura Socials.',
      desc:
        'Is our introduction of social media applications that are essential to us these days.',
      link: 'https://library-management-system-frontend-nu.vercel.app/',
      demo: null,
      featured: false,
    },
  ];

  const timer = useRef(null);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1.1, spacing: 16 },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  useEffect(() => {
    if (!instanceRef.current) return;
    timer.current = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [instanceRef]);

  return (
    <section className="px-6 py-20 sm:px-10 md:px-16">
      <div className="max-w-[1440px] mx-auto space-y-12">
        <h3 className="text-3xl font-bold text-gray-900">Our products</h3>

        <div ref={sliderRef} className="keen-slider">
          {products.map((p, i) => (
            <div
              key={i}
              className={`keen-slider__slide w-[320px] h-[480px] md:w-[400px] md:h-[560px] rounded-[32px] shadow-lg p-8 flex flex-col justify-between transition hover:scale-[1.02] hover:shadow-xl ${
                p.featured ? 'bg-[#F7FF5C]' : 'bg-gray-100'
              }`}
            >
              <div>
                <h4 className="text-2xl font-bold text-gray-900">{p.title}</h4>
                <p className="mt-4 text-base text-gray-800 leading-relaxed">{p.desc}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 item-center flex-col">
                <Link href={p.link} className="text-sm font-semibold text-gray-900 hover:underline bg-white px-4 py-4 rounded-md hover:bg-gray-50 transition">
                  Read more →
                </Link>
                {p.demo && (
                  <Link
                    href="#"
                    className="px-4 py-4 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800 transition"
                  >
                    {p.demo}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

