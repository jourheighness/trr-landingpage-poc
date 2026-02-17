import Hero from "@/components/sections/Hero";
import JourneySteps from "@/components/sections/JourneySteps";
import USPReveal from "@/components/sections/USPReveal";
import Scenarios from "@/components/sections/Scenarios";
import TrustSection from "@/components/sections/TrustSection";
import OnYourTerms from "@/components/sections/OnYourTerms";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <JourneySteps />
      <USPReveal />
      <Scenarios />
      <TrustSection />
      <OnYourTerms />
      <FinalCTA />
    </main>
  );
};

export default Index;
