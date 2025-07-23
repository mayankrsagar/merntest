import { Fragment } from 'react';

import { EuropeanSection } from '@/components/EuropeanSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { IntroSection } from '@/components/IntroSection';
import { JoinSection } from '@/components/JoinSection';
import { NewsletterSection } from '@/components/NewsLetterSection';
import ProductsSection from '@/components/ProductsSection';
import { RoadmapSection } from '@/components/RoadMapSection';
import { SupportSection } from '@/components/SupportSection';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <JoinSection />
        <IntroSection />
        <ProductsSection />
        <EuropeanSection />
        <RoadmapSection />
        <SupportSection/>
        <NewsletterSection/>
        <Footer/>
      </main>
    </Fragment>
  );
}
