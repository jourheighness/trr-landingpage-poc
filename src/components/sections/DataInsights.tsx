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
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section ref={ref} className="bg-[#1a0b2e] py-16 sm:py-20 md:py-32 overflow-hidden relative">
            {/* Background Video */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <video
                    src={DataLoomVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-70 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-[#1a0b2e]/60 mix-blend-multiply" /> {/* Tint overlay */}
            </div>

            <div className="max-w-4xl mx-auto section-padding relative z-10 text-center text-white">

                <div className="min-h-[120px] flex flex-col items-center justify-center mb-4">
                    <motion.h2 layout className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight flex flex-wrap justify-center items-baseline gap-x-2 sm:gap-x-3 gap-y-2 max-w-5xl mx-auto drop-shadow-lg">
                        <motion.span layout>Vilka kompetenser behöver</motion.span>
                        <div className="relative inline-flex flex-col h-[1.2em] overflow-hidden justify-end min-w-[4ch] sm:min-w-[5ch]">
                            <AnimatePresence mode="popLayout" initial={false}>
                                <motion.span
                                    key={companies[index]}
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: "-100%", opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                    className="text-[#a78bfa] relative block leading-none"
                                >
                                    {companies[index]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                        <motion.span layout>imorgon?</motion.span>
                    </motion.h2>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base md:text-lg font-normal tracking-wide opacity-90 inline-block mb-8"
                >
                    Vi har datan för morgondagens behov. Sluta gissa, börja veta.
                </motion.p>

                <motion.a
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex items-center justify-center gap-2 text-sm text-white/70 hover:text-white transition-colors group"
                >
                    <span>Läs mer om hur TRR skapar och förvaltar Sveriges främsta arbetsmarknadsdata</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
            </div>
        </section >
    );
}
