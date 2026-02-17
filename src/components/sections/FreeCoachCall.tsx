import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FreeCoachCall() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-2xl p-10 md:p-14 text-center"
        >
          <p className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
            Första steget
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
            Boka ett gratis samtal med en karriärcoach
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto mb-8">
            30 minuter. Inga förberedelser. Du berättar var du är, vi berättar vad som finns.
            Många säger att det var samtalet som fick dem att förstå att de hade fler möjligheter
            än de trodde.
          </p>
          <button className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300">
            Boka ditt samtal
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="mt-5 text-muted-foreground text-sm">
            Helt kostnadsfritt. Ingår via kollektivavtalet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
