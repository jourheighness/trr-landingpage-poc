import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const situations = [
  {
    emoji: "😶",
    feeling: "Söndagskänslan",
    quote: "Varje söndag kväll känner jag det i magen. Inte ångest, men inte heller glädje.",
    nudge: "Det behöver inte vara så.",
  },
  {
    emoji: "🪞",
    feeling: "Osynlig",
    quote: "Jag har gjort samma sak i sex år. Ingen har frågat vad jag egentligen vill.",
    nudge: "Någon borde fråga.",
  },
  {
    emoji: "🔇",
    feeling: "Fel rum",
    quote: "Det är inget fel på jobbet. Det passar bara inte mig längre. Kanske har det aldrig gjort det.",
    nudge: "Det är okej att växa ifrån något.",
  },
  {
    emoji: "⏳",
    feeling: "Fastnad",
    quote: "Jag vet att jag kan mer. Men dagarna ser likadana ut och jag vet inte var jag ska börja.",
    nudge: "Börja med att se vad som ligger nära.",
  },
  {
    emoji: "🤐",
    feeling: "Undervärderad",
    quote: "Jag löser problem som ingen annan ser. Men det syns inte i varken lön eller titel.",
    nudge: "Ditt värde finns, även utanför det här rummet.",
  },
];

export default function Recognition() {
  const { ref, isVisible } = useScrollAnimation();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary font-semibold text-center mb-3 tracking-wide uppercase text-sm"
        >
          Känner du igen dig?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold font-serif text-center mb-6 text-foreground"
        >
          Du behöver inte ha det dåligt för att vilja ha det bättre
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-lg text-center mb-16 max-w-2xl mx-auto"
        >
          Ibland är det inte en kris. Det är en känsla. En tystnad. En fråga som aldrig ställs högt.
        </motion.p>

        <div className="space-y-4">
          {situations.map((s, i) => (
            <motion.div
              key={s.feeling}
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="group bg-card border border-border rounded-2xl p-6 md:p-8 cursor-pointer hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{s.emoji}</span>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">
                    {s.feeling}
                  </h3>
                  <p className="text-muted-foreground italic mt-1">"{s.quote}"</p>
                </div>
              </div>
              <motion.div
                initial={false}
                animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-primary font-semibold mt-4 pl-12 md:pl-14">
                  → {s.nudge}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
