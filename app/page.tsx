"use client";
import Comparison from "./components/comparison";
import HeroSection from "./components/heroSection";
import HowItWorks from "./components/howItWorks";
import Pricing from "./components/pricing";
import WhatYouNeed from "./components/whatYouNeed";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans space-y-6">
      <div className="px-8">
        <HeroSection />
        <HowItWorks />
        <Comparison />
      </div>

      <div className="bg-bg-grey">
        <WhatYouNeed />
      </div>

      <div className="px-8">
        <Pricing />
        <Testimonials />
      </div>

      <Footer/>
    </main>
  );
}
