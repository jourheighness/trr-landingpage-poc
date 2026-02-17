import { motion } from "framer-motion";
import { Compass, Lightbulb, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Compass,
    title: "Utforska",
    subtitle: "Jag ska bara kika",
    description: "Vad kan du? Vad vill du? Vad behöver världen? Se var de överlappar och hitta yrken du aldrig tänkt på.",
  },
  {
    icon: Lightbulb,
    title: "Förstå",
    subtitle: "Aha, det här kan jag faktiskt",
    description: "Din personliga dashboard. Matchningar mot arbetsmarknaden, vad som ligger nära dig och vad som krävs.",
  },
  {
    icon: ArrowRight,
    title: "Agera",
    subtitle: "Jag vet vägen",
    description: "Konkreta steg, utbildningar och en riktig karriärcoach som hjälper dig vidare.",
  },
];

export default function JourneySteps() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground"
        >
          Från nyfikenhet till nästa steg
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-1 text-foreground">{step.title}</h3>
              <p className="text-sm font-medium text-primary mb-3">{step.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
