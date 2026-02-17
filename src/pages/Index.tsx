import Hero from "@/components/sections/Hero";
import Recognition from "@/components/sections/Recognition";
import JourneySteps from "@/components/sections/JourneySteps";
import USPReveal from "@/components/sections/USPReveal";
import Scenarios from "@/components/sections/Scenarios";
import SocialProof from "@/components/sections/SocialProof";
import TrustSection from "@/components/sections/TrustSection";
import OnYourTerms from "@/components/sections/OnYourTerms";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Recognition />
      <JourneySteps />
      <USPReveal />
      <Scenarios />
      <SocialProof />
      <TrustSection />
      <OnYourTerms />
      <FinalCTA />
    </main>
  );
};

export default Index;
