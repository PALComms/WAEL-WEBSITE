"use client";
import AboutHeader from "@/components/about/about-header";
import MissionVision from "@/components/about/mission-vision";
import OurJourney from "@/components/about/our-journey";
import PrimeValues from "@/components/about/prime-values";
import OurExperts from "@/components/landing-page/our-experts";

export default function page() {
  return (
    <div>
      <OurJourney />
      <AboutHeader />
      <MissionVision />
      <PrimeValues />
      <OurExperts />
    </div>
  );
}
