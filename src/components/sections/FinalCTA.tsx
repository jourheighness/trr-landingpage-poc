import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-32 section-padding bg-reveal-gradient relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-4 left-4 sm:top-10 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif mb-8 sm:mb-10 md:mb-12 text-primary-foreground"
        >
          Börja med att se vad du kan bli
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="inline-flex items-center gap-2 sm:gap-3 bg-white text-primary px-5 py-3 text-sm sm:px-6 sm:py-4 sm:text-base md:px-8 md:py-5 md:text-lg rounded-full font-semibold hover:bg-white/90 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-0.5 transition-all duration-300">
            Utforska dina möjligheter, tar 5 minuter
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          </button>
          <p className="mt-6 text-primary-foreground/70 text-sm">Ingen registrering krävs. Helt gratis för alla.</p>
        </motion.div>
      </div>
    </section>);

}