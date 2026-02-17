import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import trrLogo from "@/assets/trr-logo.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden px-6">
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.img
          src={trrLogo}
          alt="TRR"
          className="h-12 md:h-16 mx-auto mb-10 brightness-0 invert"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gradient-hero leading-tight mb-6"
        >
          Vad kan du bli som du inte vet om?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          TRR hjälper dig utforska, förstå och ta nästa steg i karriären. Gratis, via din arbetsgivare.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <button className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-primary-foreground/10 hover:-translate-y-0.5 transition-all duration-300">
            Utforska dina möjligheter
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
