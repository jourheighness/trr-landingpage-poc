import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import trrLogo from "@/assets/trr-logo.svg";
import heroVideoCommuter from "@/assets/hero-video-commuter.mp4";
import heroVideoFather from "@/assets/hero-video-father.mp4";
import heroVideoGirl from "@/assets/hero-video-girl.mp4";
import heroVideoNewjob from "@/assets/hero-video-newjob.mp4";

const heroVideos = [heroVideoCommuter, heroVideoFather, heroVideoGirl, heroVideoNewjob];
const FADE_DURATION = 1.2;

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fading, setFading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = useCallback(() => {
    setCurrentVideo((prev) => (prev + 1) % heroVideos.length);
  }, []);

  // Fade in when a new video mounts
  useEffect(() => {
    setFading(true);
    // Wait a frame so the browser registers opacity:0 before transitioning to 1
    const raf = requestAnimationFrame(() => {
      setFading(false);
    });
    return () => cancelAnimationFrame(raf);
  }, [currentVideo]);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const timeLeft = video.duration - video.currentTime;
    if (timeLeft <= FADE_DURATION && !fading) {
      setFading(true);
    }
  }, [fading]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden section-padding">
      {/* Background videos */}
      <div className="absolute inset-0" style={{ backgroundColor: "hsl(264, 55%, 8%)" }}>
        <video
          key={currentVideo}
          ref={videoRef}
          src={heroVideos[currentVideo]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          onTimeUpdate={handleTimeUpdate}
          style={{
            opacity: fading ? 0 : 1,
            transition: `opacity ${FADE_DURATION}s ease-in-out`,
            transform: heroVideos[currentVideo] === heroVideoCommuter ? "scaleX(-1)" : undefined,
          }}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(0,0%,0%,0.7)] via-[hsl(0,0%,0%,0.4)] to-[hsl(0,0%,0%,0.1)]" />
      </div>

      {/* Top navigation */}
      <nav className="relative z-10 flex items-center justify-between pt-6 md:pt-8">
        {/* Logo — left */}
        <motion.img
          src={trrLogo}
          alt="TRR"
          className="h-8 md:h-10"
          style={{ filter: "brightness(0) invert(1)" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} />

        {/* Nav links — optically centered */}
        <motion.div
          className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}>
          <a href="#" className="inline-flex items-center gap-1 text-white/90 hover:text-white transition-colors text-sm font-bold">
            Tjänster <ChevronDown className="w-4 h-4" />
          </a>
          <a href="#" className="inline-flex items-center gap-1 text-white/90 hover:text-white transition-colors text-sm font-bold">
            Verktyg <ChevronDown className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Buttons — right */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          <button className="hidden md:inline-flex text-white/80 hover:text-white transition-colors text-sm font-medium px-4 py-2">
            Skapa konto
          </button>
          <button className="hidden md:inline-flex bg-white text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-white/90 transition-colors">
            Logga in
          </button>

          {/* Mobile hamburger — visible below md */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden text-white p-2" aria-label="Öppna meny">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[hsl(264,60%,15%)] border-white/10 text-white w-72">
              <SheetTitle className="text-white text-lg font-bold mb-8">Meny</SheetTitle>
              <nav className="flex flex-col gap-6">
                <a href="#" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-base font-bold">
                  Tjänster <ChevronDown className="w-4 h-4" />
                </a>
                <a href="#" className="flex items-center gap-2 text-white/90 hover:text-white transition-colors text-base font-bold">
                  Verktyg <ChevronDown className="w-4 h-4" />
                </a>
                <hr className="border-white/10" />
                <button className="bg-white text-black text-base font-semibold px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors w-full">
                  Logga in
                </button>
                <button className="text-white/80 hover:text-white transition-colors text-base font-medium text-center w-full">
                  Skapa konto
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </motion.div>
      </nav>

      {/* Bottom content — text left, button right */}
      <div className="relative z-10 mt-auto pb-12 sm:pb-16 md:pb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12">
        {/* Text — bottom left */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-serif text-gradient-hero leading-tight mb-3 md:mb-4">
            Karriärutveckling som ryms i ditt liv
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-sm sm:text-base md:text-lg text-primary-foreground max-w-xl leading-relaxed">
            Oavsett om du vill accelerera, växla ner eller hitta en ny riktning. Vi hjälper dig navigera genom arbetslivet på dina villkor.
          </motion.p>
        </div>

        {/* CTA — bottom right on desktop, full-width on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex-shrink-0 flex flex-col items-start md:items-end">

          <div className="relative">
            <button className="flex items-center justify-between gap-3 sm:gap-4 md:gap-6 bg-white text-[hsl(264,55%,46%)] px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 rounded-full hover:bg-white/90 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">Utforska dina möjligheter</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            </button>
            <p className="mt-2 sm:mt-3 text-white/60 text-xs sm:text-sm md:absolute md:top-full md:left-1/2 md:-translate-x-1/2">
              Det tar fem minuter
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}