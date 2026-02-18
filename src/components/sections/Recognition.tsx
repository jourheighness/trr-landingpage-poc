import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

// Import images
import SmabarnslivetImage from '@/assets/smabarnslivet-image.png';
import VaxlaImage from '@/assets/vaxla-image.png';
import AccelereraImage from '@/assets/accelerera-image.png';
import UppsagdImage from '@/assets/uppsagd-image.png';
import VagskalImage from '@/assets/vagskal-image.png';

// Import videos
import SmabarnslivetVideo from '@/assets/smabarnslivet-video.mp4';
import VaxlaVideo from '@/assets/vaxla-video.mp4';
import AccelereraVideo from '@/assets/accelerera-video.mp4';
import UppsagdVideo from '@/assets/uppsagd-video.mp4';
import VagskalVideo from '@/assets/vagskal-video.mp4';
import { useRef } from "react";

const cards = [
  {
    header: "Småbarnslivet",
    body: "När tiden är knapp men ambitionen finns kvar. Hitta balansen mellan hämtningar och karriärkliv.",
    imgSrc: SmabarnslivetImage,
    videoSrc: SmabarnslivetVideo,
    alt: "Småbarnslivet och karriär"
  },
  {
    header: "Växla ner",
    body: "Redo för mer frihet? Utforska deltidslösningar, mentorskap eller en passion du väntat med.",
    imgSrc: VaxlaImage,
    videoSrc: VaxlaVideo,
    alt: "Växla ner i karriären"
  },
  {
    header: "Accelerera",
    body: "Dags för nästa stora steg? Vi matchar dig med ledarskapsutbildningar och chefsnätverk.",
    imgSrc: AccelereraImage,
    videoSrc: AccelereraVideo,
    alt: "Accelerera karriären"
  },
  {
    header: "Uppsagd",
    body: "När kartan ritas om utan att du bett om det. Vi hjälper dig att vända motgång till nästa möjlighet.",
    imgSrc: UppsagdImage,
    videoSrc: UppsagdVideo,
    alt: "Stöd vid uppsägning"
  },
  {
    header: "Vägskäl",
    body: "Känns det inte rätt längre? Vi ger dig verktygen att utforska nya branscher eller starta eget.",
    imgSrc: VagskalImage,
    videoSrc: VagskalVideo,
    alt: "Vid ett vägskäl i livet"
  },
];

export default function Recognition() {
  const { ref, isVisible } = useScrollAnimation();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play().catch(e => console.log("Video play failed", e));
    }
  };

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-32">
      <div className="max-w-4xl mx-auto section-padding">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif text-center mb-4 sm:mb-6 text-foreground"
        >
          Var befinner du dig i livet?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg text-center mb-12 md:mb-16 lg:mb-20 max-w-2xl mx-auto"
        >
          Ingen karriärväg är rak. Vi har verktygen för varje sväng, gupp och raksträcka
        </motion.p>
      </div>

      <div className="w-full section-padding">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 items-start lg:items-end h-auto lg:h-[650px] w-full">
          {cards.map((item, index) => (
            <motion.div
              key={item.header}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="relative group cursor-pointer w-full sm:w-[calc(50%-0.75rem)] lg:w-full lg:flex-1"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Image/Video Area - Align bottom, grow up */}
              <div
                className={`w-full rounded-2xl mb-6 transition-all duration-700 ease-in-out aspect-[2/3] lg:aspect-auto lg:h-[450px] lg:group-hover:h-[550px] overflow-hidden relative`}
              >
                <video
                  ref={el => videoRefs.current[index] = el}
                  src={item.videoSrc}
                  poster={item.imgSrc}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  muted
                  loop
                  playsInline
                />

                {/* Overlay for better text contrast if needed, or subtle effect */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />

                {/* Top Gradient & Link Action - Appears on Hover */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none" />
                <div className="absolute top-4 right-4 flex items-center gap-2 text-white text-sm font-medium opacity-0 translate-y-[-10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out pointer-events-none">
                  <span>Utforska vägen</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-start px-1 h-auto justify-start">
                <h3 className="font-bold text-foreground text-xl mb-2">{item.header}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
}
