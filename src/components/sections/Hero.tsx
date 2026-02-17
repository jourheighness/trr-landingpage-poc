import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import trrLogo from "@/assets/trr-logo.svg";
import heroBg from "@/assets/hero-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(264,55%,20%,0.5)] via-[hsl(264,55%,25%,0.4)] to-[hsl(268,55%,18%,0.65)]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.img
          src={trrLogo}
          alt="TRR"
          className="h-10 md:h-14 mx-auto mb-10"
          style={{ filter: "brightness(0) invert(1)" }}
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
