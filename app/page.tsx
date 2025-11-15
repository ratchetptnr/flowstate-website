import { HeroSection } from './components/hero-section';
import { ProblemSection } from './components/problem-section';
import { SolutionSection } from './components/solution-section';
import { HowItWorks } from './components/how-it-works';
import { WhyFlowState } from './components/why-flowstate';
import { WhatWeOffer } from './components/what-we-offer';
import { WhereWeMeet } from './components/where-we-meet';
import { Footer } from './components/footer';
import { StickyCtaButton } from './components/sticky-cta-button';

export default function Home() {
  return (
    <main className="w-full">
      <StickyCtaButton />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <WhyFlowState />
      <WhatWeOffer />
      <WhereWeMeet />
      <Footer />
    </main>
  );
}
