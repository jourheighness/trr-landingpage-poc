import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-reveal-gradient relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold font-serif mb-12 text-primary-foreground whitespace-nowrap"
        >
          Börja med att se vad du kan bli
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/90 hover:shadow-xl hover:shadow-white/10 hover:-translate-y-0.5 transition-all duration-300">
            Utforska dina möjligheter, tar 5 minuter
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-6 text-primary-foreground/70 text-sm">Ingen registrering krävs. Helt gratis för alla.</p>
        </motion.div>
      </div>
    </section>);

}