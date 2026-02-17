import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const situations = [
  {
    feeling: "Nyfiken",
    quote: "Jag trivs. Men ibland undrar jag vad mer som finns där ute, utan att riktigt veta hur jag ska ta reda på det.",
  },
  {
    feeling: "Rastlös",
    quote: "Jag har gjort samma sak i sex år. Ingen har frågat vad jag egentligen vill. Inte ens jag själv.",
  },
  {
    feeling: "Redo för nästa kapitel",
    quote: "Det är inget fel på jobbet. Det passar bara inte mig längre. Kanske har det aldrig gjort det.",
  },
  {
    feeling: "Osäker på riktningen",
    quote: "Jag vet att jag kan mer. Men dagarna ser likadana ut och jag vet inte var jag ska börja leta.",
  },
];

export default function Recognition() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary font-semibold text-center mb-3 tracking-wide uppercase text-sm"
        >
          Känner du igen dig
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold font-serif text-center mb-6 text-foreground"
        >
          Du behöver inte ha det dåligt för att vara nyfiken på något nytt
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg text-center mb-16 max-w-2xl mx-auto"
        >
          Ibland är det inte en kris. Det är en fråga som dyker upp på väg hem från jobbet, och som aldrig riktigt försvinner.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5">
          {situations.map((s, i) => (
            <motion.div
              key={s.feeling}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 hover:border-primary/20 transition-colors duration-300"
            >
              <p className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase">
                {s.feeling}
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                "{s.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
