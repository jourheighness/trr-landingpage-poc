import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function OnYourTerms() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <Shield className="w-10 h-10 text-primary/40 mx-auto mb-6" />
        <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
          Inga brev hem. Inga push-notiser.
          <br />
          <span className="text-muted-foreground">Vi finns här när du är redo.</span>
        </p>
      </motion.div>
    </section>
  );
}
