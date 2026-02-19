import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="pt-10 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-28 section-padding bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif mb-6 sm:mb-8 md:mb-10 text-foreground"
        >
          Börja med att se vad du kan bli
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <button className="inline-flex items-center gap-2 sm:gap-3 bg-trr-purple text-white px-5 py-3 text-sm sm:px-6 sm:py-4 sm:text-base md:px-8 md:py-5 md:text-lg rounded-full font-semibold hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
            Utforska dina möjligheter, tar 5 minuter
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          </button>
          <p className="mt-6 text-muted-foreground text-sm">Ingen registrering krävs. Helt gratis för alla.</p>
        </motion.div>
      </div>
    </section>
  );
}
