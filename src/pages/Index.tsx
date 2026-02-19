import Hero from "@/components/sections/Hero";
import Recognition from "@/components/sections/Recognition";
import USPReveal from "@/components/sections/USPReveal";
import FinalCTA from "@/components/sections/FinalCTA";

import DataInsights from "@/components/sections/DataInsights";
import Advisors from "@/components/sections/Advisors";
import Footer from "@/components/sections/Footer";
const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <USPReveal />
      <Recognition />
      <DataInsights />
      <Advisors />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
