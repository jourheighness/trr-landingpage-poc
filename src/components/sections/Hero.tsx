import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import trrLogo from "@/assets/trr-logo.svg";
import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-16 lg:px-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(264,55%,18%,0.85)] via-[hsl(264,55%,22%,0.6)] to-[hsl(268,55%,25%,0.3)]" />
      </div>

      <div className="relative z-10 max-w-2xl">
        <motion.img
          src={trrLogo}
          alt="TRR"
          className="h-10 md:h-14 mb-10"
          style={{ filter: "brightness(0) invert(1)" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-gradient-hero leading-tight mb-6"
        >
          Vad kan du bli som du inte vet om?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed"
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
