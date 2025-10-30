import Header from "@/components/landing-page/header";
import OurExperts from "@/components/landing-page/our-experts";
import CoreServices from "@/components/landing-page/services";
import { TrustedByMarquee } from "@/components/landing-page/trusted-by";

export default function Home() {
  return (
    <section>
      <Header />
      <CoreServices />
      <TrustedByMarquee />
      <OurExperts />
    </section>);
}
