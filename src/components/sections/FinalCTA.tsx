import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-secondary/50">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold font-serif mb-8 text-foreground">

          Börja med att se vad du kan bli
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}>

          <button className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300">
            Gör din karriärprofil — tar 5 minuter
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-6 text-muted-foreground text-sm">Ingen registrering krävs. Helt gratis för alla.

          </p>
        </motion.div>
      </div>
    </section>);

}