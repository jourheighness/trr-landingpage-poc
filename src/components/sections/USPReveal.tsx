import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    tag: "Karriärcoaching",
    description: "Personlig rådgivning som hjälper dig hitta rätt riktning. Ingår i kollektivavtal med TRR.",
  },
  {
    tag: "Utbildning",
    description: "Kompetensutveckling och kurser som stärker din profil. Ingår i kollektivavtal med TRR.",
  },
  {
    tag: "Digitala verktyg",
    description: "Resurser och nätverk som gör det enklare att ta nästa steg. Gratis och öppet för alla.",
  },
];

export default function USPReveal() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-background py-14 sm:py-16 md:py-24 section-padding relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold font-serif text-foreground mb-10 md:mb-14 text-center"
        >
          Det här kostar dig{" "}
          <span className="relative inline-block">
            ingenting
            <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-trr-coral rounded-full" />
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-14">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.tag}
              initial={{ opacity: 0, y: 15 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
            >
              <span className="inline-block text-sm font-medium text-foreground/80 bg-trr-purple-light px-3 py-1 rounded-full mb-3">
                {benefit.tag}
              </span>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-foreground font-semibold hover:gap-3 transition-all duration-300 group"
          >
            <span>Läs om TRR</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
