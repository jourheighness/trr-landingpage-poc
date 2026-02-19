import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import DataLoomVideo from '@/assets/data-loom-video.mp4';
import { ArrowRight } from "lucide-react";

const companies = [
    "Volvo",
    "Ericsson",
    "Cloetta",
    "Scania",
    "Spotify",
    "IKEA",
    "H&M",
    "Vattenfall",
    "Sandvik",
    "Skanska",
    "Telia",
    "Electrolux"
];

export default function DataInsights() {
    const { ref, isVisible } = useScrollAnimation();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % companies.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section ref={ref} className="bg-background py-16 sm:py-20 md:py-28 overflow-hidden">
            <div className="max-w-6xl mx-auto section-padding">
                <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
                    {/* Text — left side */}
                    <div className="w-full lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-6 text-foreground"
                        >
                            <span className="block">Vilka kompetenser</span>
                            <span className="block whitespace-nowrap">
                                behöver{" "}
                                <span className="relative inline-block h-[1.15em] overflow-hidden align-bottom min-w-[7em]">
                                    <AnimatePresence mode="popLayout" initial={false}>
                                        <motion.span
                                            key={companies[index]}
                                            initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
                                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                            exit={{ y: "-80%", opacity: 0, filter: "blur(4px)" }}
                                            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                                            className="text-trr-purple absolute left-0 bottom-0 whitespace-nowrap"
                                        >
                                            {companies[index]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </span>
                            <span className="block">imorgon?</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md"
                        >
                            Vi har datan för morgondagens behov. Sluta gissa, börja veta.
                        </motion.p>

                        <motion.a
                            href="#"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <span>Läs mer om TRR:s arbetsmarknadsdata</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.a>
                    </div>

                    {/* Video — right side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2 flex-shrink-0"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <video
                                src={DataLoomVideo}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
