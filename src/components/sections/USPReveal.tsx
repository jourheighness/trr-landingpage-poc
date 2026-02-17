import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function USPReveal() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-reveal-gradient py-24 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif text-primary-foreground mb-8"
        >
          Det här kostar dig ingenting
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto"
        >
          Karriärcoaching. Betald utbildning. Verktyg som hjälper dig framåt. Allt ingår genom kollektivavtalet, via din arbetsgivare. Du behöver inte vara uppsagd, du behöver inte vara i kris. Du behöver bara vara lite nyfiken.
        </motion.p>
      </div>
    </section>
  );
}
