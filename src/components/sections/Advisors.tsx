import { useState } from "react";

const advisors = [
    {
        name: "Anna",
        quote: "Du har mer att erbjuda än du tror. Låt oss hitta det tillsammans.",
        image: "https://i.pravatar.cc/400?img=5",
    },
    {
        name: "Erik",
        quote: "Att starta eget börjar med ett enda modigt steg. Jag går bredvid dig.",
        image: "https://i.pravatar.cc/400?img=12",
    },
    {
        name: "Maria",
        quote: "Ibland behöver man bara någon som lyssnar och ser det man själv missar.",
        image: "https://i.pravatar.cc/400?img=32",
    },
    {
        name: "Johan",
        quote: "Osäker på framtiden? Då är du på helt rätt plats.",
        image: "https://i.pravatar.cc/400?img=53",
    },
    {
        name: "Sofia",
        quote: "Det är aldrig för sent att hitta något som känns rätt på riktigt.",
        image: "https://i.pravatar.cc/400?img=45",
    },
    {
        name: "Marcus",
        quote: "Jag vet vad arbetsgivare letar efter. Låt oss visa vem du är.",
        image: "https://i.pravatar.cc/400?img=59",
    },
    {
        name: "Karin",
        quote: "Nya kunskaper öppnar dörrar du inte visste fanns.",
        image: "https://i.pravatar.cc/400?img=26",
    },
    {
        name: "Anders",
        quote: "Ditt ledarskap behövs. Låt oss hitta var det gör störst skillnad.",
        image: "https://i.pravatar.cc/400?img=60",
    },
];

export default function Advisors() {
    const duplicatedAdvisors = [...advisors, ...advisors];
    const [paused, setPaused] = useState(false);

    return (
        <section className="py-16 sm:py-20 md:py-32 bg-trr-warm-light overflow-hidden">
            <div className="container section-padding mx-auto mb-16 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif mb-4 sm:mb-6 text-foreground">
                    Människorna bakom stödet
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
                <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-trr-warm-light to-transparent z-10" />
                <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-trr-warm-light to-transparent z-10" />

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
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
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
