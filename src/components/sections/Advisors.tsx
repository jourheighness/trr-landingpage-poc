import { useState } from "react";
import advisor01 from "@/assets/advisor01.jpg";
import advisor02 from "@/assets/advisor2.jpg";
import advisor03 from "@/assets/advisor3.jpg";
import advisor04 from "@/assets/advisor4.jpg";
import advisor05 from "@/assets/advisor5.jpg";
import advisor06 from "@/assets/advisor6.jpg";
import advisor07 from "@/assets/advisor7.jpg";
import advisor08 from "@/assets/advisor8.jpg";

const advisors = [
    {
        name: "Anders",
        quote: "Du har mer att erbjuda än du tror. Låt oss hitta det tillsammans.",
        image: advisor01,
    },
    {
        name: "Erik",
        quote: "Att starta eget börjar med ett enda modigt steg. Jag går bredvid dig.",
        image: advisor02,
    },
    {
        name: "Maria",
        quote: "Ibland behöver man bara någon som lyssnar och ser det man själv missar.",
        image: advisor03,
    },
    {
        name: "Karin",
        quote: "Osäker på framtiden? Då är du på helt rätt plats.",
        image: advisor04,
    },
    {
        name: "Sofia",
        quote: "Det är aldrig för sent att hitta något som känns rätt på riktigt.",
        image: advisor05,
    },
    {
        name: "Anna",
        quote: "Jag vet vad arbetsgivare letar efter. Låt oss visa vem du är.",
        image: advisor06,
    },
    {
        name: "Marcus",
        quote: "Nya kunskaper öppnar dörrar du inte visste fanns.",
        image: advisor07,
    },
    {
        name: "Lisa",
        quote: "Ditt ledarskap behövs. Låt oss hitta var det gör störst skillnad.",
        image: advisor08,
    },
];

export default function Advisors() {
    const duplicatedAdvisors = [...advisors, ...advisors];
    const [paused, setPaused] = useState(false);

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-background overflow-hidden">
            <div className="container section-padding mx-auto mb-16 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif mb-4 sm:mb-6 text-foreground">
                    Våra rådgivare
                </h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Riktiga människor som bryr sig om ditt nästa steg
                </p>
            </div>

            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >

                <div
                    className="flex gap-6 items-end section-padding w-max h-[440px] sm:h-[470px] md:h-[500px] animate-carousel"
                    style={{ animationPlayState: paused ? "paused" : "running" }}
                >
                    {duplicatedAdvisors.map((advisor, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] h-[390px] sm:h-[420px] md:h-[450px] hover:h-[440px] sm:hover:h-[470px] md:hover:h-[500px] rounded-2xl overflow-hidden relative group transition-all duration-700 ease-in-out"
                        >
                            <img
                                src={advisor.image}
                                alt={advisor.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 brightness-110 contrast-90 saturate-75"
                            />
                            <div className="absolute inset-0 bg-[hsl(264,50%,45%)]/25 mix-blend-color pointer-events-none" />
                            <div className="absolute inset-0 bg-[hsl(264,40%,60%)]/10 mix-blend-overlay pointer-events-none" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                <p className="text-sm leading-relaxed mb-2">
                                    &ldquo;{advisor.quote}&rdquo;
                                </p>
                                <p className="text-base font-semibold">
                                    {advisor.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
