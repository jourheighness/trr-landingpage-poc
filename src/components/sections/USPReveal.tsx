import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function USPReveal() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-reveal-gradient py-12 md:py-20 px-6 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold font-serif text-primary-foreground mb-6"
        >
          Det här kostar dig ingenting
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto mb-10"
        >
          Karriärcoaching. Betald utbildning. Verktyg som hjälper dig framåt. Allt ingår genom kollektivavtalet, via din arbetsgivare. Du behöver inte vara uppsagd, du behöver inte vara i kris. Du behöver bara vara lite nyfiken.
        </motion.p>

        <motion.a
          href="#"
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-flex items-center gap-2 text-primary-foreground font-semibold hover:gap-3 transition-all duration-300 group"
        >
          <span>Läs om TRR - Hela Sveriges karriärpartner</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
}
