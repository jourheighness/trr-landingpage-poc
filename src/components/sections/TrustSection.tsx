import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import coachImg from "@/assets/coach-stefan.jpg";

export default function TrustSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold font-serif text-center mb-6 text-foreground"
        >
          Bakom verktygen finns en riktig människa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Din karriärcoach. Inte en algoritm, inte en chatbot. Någon som lyssnar, utmanar och hjälper dig framåt.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm"
        >
          <img
            src={coachImg}
            alt="Stefan, karriärcoach"
            className="w-28 h-28 rounded-full object-cover ring-4 ring-primary/20 flex-shrink-0"
          />
          <div>
            <div className="flex items-start gap-2 mb-4">
              <Quote className="w-6 h-6 text-primary/40 flex-shrink-0 mt-1" />
              <p className="text-xl md:text-2xl font-medium text-foreground italic leading-relaxed">
                Jag hjälper dig se möjligheter du inte visste fanns.
              </p>
            </div>
            <p className="text-primary font-semibold">Stefan, karriärcoach</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
