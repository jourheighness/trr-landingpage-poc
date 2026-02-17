import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Shuffle, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const scenarios = [
  {
    icon: TrendingUp,
    title: "Vill utvecklas",
    subtitle: "Jag trivs men vill växa",
    description: "Kurser, vidareutbildning, nya kompetenser i din nuvarande roll.",
  },
  {
    icon: Shuffle,
    title: "Funderar på nytt",
    subtitle: "Vad finns i närheten?",
    description: "Se yrken nära ditt, vad du redan kan och vad som saknas.",
  },
  {
    icon: Rocket,
    title: "Redo att byta",
    subtitle: "Jag vill åt ett helt nytt håll",
    description: "Karriärvägledning och omställningsstöd, hela vägen till nytt jobb.",
  },
];

export default function Scenarios() {
  const [active, setActive] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground"
        >
          TRR genom hela arbetslivet
        </motion.h2>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {scenarios.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card text-muted-foreground border border-border hover:border-primary/30"
              }`}
            >
              {s.title}
            </button>
          ))}
        </motion.div>

        {/* Active content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-card rounded-2xl p-10 md:p-14 border border-border text-center max-w-2xl mx-auto shadow-sm"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            {(() => {
              const Icon = scenarios[active].icon;
              return <Icon className="w-8 h-8 text-primary" />;
            })()}
          </div>
          <h3 className="text-2xl font-bold mb-2 text-foreground">{scenarios[active].title}</h3>
          <p className="text-primary font-medium mb-4">{scenarios[active].subtitle}</p>
          <p className="text-muted-foreground text-lg leading-relaxed">{scenarios[active].description}</p>
        </motion.div>
      </div>
    </section>
  );
}
