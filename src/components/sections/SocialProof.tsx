import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stories = [
  {
    name: "Anna, 38",
    before: "Redovisningsekonom i 12 år",
    after: "UX-designer på techbolag",
    quote: "Jag trodde att jag var fast. TRR visade mig att jag redan hade hälften av kompetenserna för mitt drömjobb.",
  },
  {
    name: "Marcus, 45",
    before: "Mellanchef, utbränd",
    after: "Egen konsultfirma",
    quote: "Jag visste inte att jag kunde få hjälp innan jag blev uppsagd. Jag önskar att jag börjat tidigare.",
  },
  {
    name: "Fatima, 29",
    before: "Kundtjänst, understimulerad",
    after: "Projektledare inom hållbarhet",
    quote: "Min coach såg saker hos mig som jag aldrig sett själv. Det förändrade allt.",
  },
];

export default function SocialProof() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary font-semibold text-center mb-3 tracking-wide uppercase text-sm"
        >
          De tog steget
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold font-serif text-center mb-16 text-foreground"
        >
          Vanliga människor, ovanliga förändringar
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
            >
              <p className="text-foreground italic text-lg leading-relaxed mb-6 flex-1">
                "{story.quote}"
              </p>
              <div className="border-t border-border pt-5">
                <p className="font-bold text-foreground">{story.name}</p>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <span className="text-muted-foreground">{story.before}</span>
                  <span className="text-primary font-bold">→</span>
                  <span className="text-primary font-semibold">{story.after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-muted-foreground mt-12 text-lg"
        >
          Över <span className="text-foreground font-bold">100 000</span> personer har använt TRR för att ta nästa steg.
        </motion.p>
      </div>
    </section>
  );
}
