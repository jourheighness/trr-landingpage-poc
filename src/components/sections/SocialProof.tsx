import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stories = [
  {
    name: "Maria, 34",
    role: "projektledare",
    quote: "Jag visste inte ens att TRR var till för folk som fortfarande har jobb. Trodde det var en grej man hamnade hos när man blev uppsagd.",
  },
  {
    name: "Erik, 41",
    role: "ekonom",
    quote: "Jag hade jobbat med samma sak i åtta år och trivdes. Men när jag såg vad som låg nära fick jag den där känslan av att det kanske finns ett kapitel till.",
  },
  {
    name: "Sara, 29",
    role: "kommunikatör",
    quote: "Det svåraste var inte att byta. Det var att förstå att jag kunde. Att det jag redan kunde räckte längre än jag trodde.",
  },
];

export default function SocialProof() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold font-serif text-center mb-16 text-foreground"
        >
          Tre som tog steget
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col"
            >
              <p className="text-foreground text-lg leading-relaxed mb-6 flex-1">
                "{story.quote}"
              </p>
              <p className="text-muted-foreground text-sm">
                — {story.name}, {story.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
