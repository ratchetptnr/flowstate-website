import { HeroSection } from './components/hero-section';
import { ProblemSection } from './components/problem-section';
import { SolutionSection } from './components/solution-section';
import { HowItWorks } from './components/how-it-works';
import { WhyFlowState } from './components/why-flowstate';
import { WhatWeOffer } from './components/what-we-offer';
import { WhereWeMeet } from './components/where-we-meet';
import { WhoThisIsFor } from './components/who-this-is-for';
import { FlowStatePromise } from './components/flowstate-promise';
import { PricingSection } from './components/pricing-section';
import { BookingAppSection } from './components/booking-app-section';
import { FinalCTA } from './components/final-cta';
import { Footer } from './components/footer';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <WhyFlowState />
      <WhatWeOffer />
      <WhereWeMeet />
      <WhoThisIsFor />
      <FlowStatePromise />
      <PricingSection />
      <BookingAppSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
