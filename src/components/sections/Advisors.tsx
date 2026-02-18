import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const advisors = [
    {
        name: "Anna Andersson",
        role: "Karriärrådgivare",
        blurb: "Jag brinner för att se människor växa och hitta nya vägar i karriären. Med min bakgrund inom HR kan jag guida dig rätt.",
        expertise: ["Karriärväxling", "Intervjuträning", "CV-granskning"]
    },
    {
        name: "Erik Svensson",
        role: "Starta Eget-expert",
        blurb: "Att starta eget är en dröm för många. Jag hjälper dig att ta steget från idé till verklighet och bolla affärsplaner.",
        expertise: ["Affärsplanering", "Nätverkande", "Marknadsföring"]
    },
    {
        name: "Maria Lindberg",
        role: "Kompetensutvecklare",
        blurb: "Ibland behöver man bara byta perspektiv. Jag hjälper dig att se dina kompetenser med nya ögon och hitta dolda talanger.",
        expertise: ["Kompetensinventering", "LinkedIn-optimering", "Söka jobb"]
    },
    {
        name: "Johan Karlsson",
        role: "Rådgivare",
        blurb: "Osäker på framtiden? Låt oss kartlägga dina möjligheter tillsammans och skapa en handlingsplan som håller.",
        expertise: ["Målsättning", "Framtidsspaning", "Utbildningsval"]
    },
    {
        name: "Sofia Nilsson",
        role: "Karriärcoach",
        blurb: "Det är aldrig för sent att byta bana. Jag stöttar dig genom hela processen, från första tanke till nytt jobb.",
        expertise: ["Omställning", "Motivation", "Intervjuteknik"]
    },
    {
        name: "Marcus Berg",
        role: "Rekryteringsexpert",
        blurb: "Med 15 år inom rekrytering vet jag vad arbetsgivare letar efter. Låt oss slipa på din presentation.",
        expertise: ["Personligt brev", "Pitch", "Löneförhandling"]
    },
    {
        name: "Karin Holmberg",
        role: "Studievägledare",
        blurb: "Funderar du på att plugga vidare? Jag hjälper dig navigera bland utbildningar och finansieringslösningar.",
        expertise: ["Studier", "CSN", "Omställningsstudiestöd"]
    },
    {
        name: "Anders Pettersson",
        role: "Ledarutvecklare",
        blurb: "Är du chef eller ledare i omställning? Jag hjälper dig hitta nästa utmaning där ditt ledarskap kommer till sin rätt.",
        expertise: ["Executive search", "Ledarskap", "Styrelsearbete"]
    }
];

export default function Advisors() {
    // Duplicate list for infinite scroll effect
    const duplicatedAdvisors = [...advisors, ...advisors];

    return (
        <section className="py-16 sm:py-20 md:py-32 bg-secondary/30 overflow-hidden">
            <div className="container section-padding mx-auto mb-16 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-serif mb-4 sm:mb-6 text-foreground">Våra rådgivare</h2>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Vår data visar möjligheter, våra rådgivare hjälper dig realisera dem
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient masks for smooth fade edges */}
                <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-secondary/30 to-transparent z-10" />
                <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-secondary/30 to-transparent z-10" />

                <motion.div
                    className="flex gap-6 section-padding w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 60, // Slow scroll speed
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    {duplicatedAdvisors.map((advisor, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[350px]"
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-card border-none">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="w-20 h-20 rounded-full bg-muted mb-6 mx-auto flex items-center justify-center text-muted-foreground font-serif text-2xl font-bold shrink-0">
                                        {advisor.name.split(' ').map(n => n[0]).join('')}
                                    </div>

                                    <h3 className="text-xl font-bold text-center mb-1">{advisor.name}</h3>
                                    <p className="text-sm text-primary font-medium text-center mb-4">{advisor.role}</p>

                                    <p className="text-muted-foreground text-sm leading-relaxed text-center mb-6 flex-grow">
                                        "{advisor.blurb}"
                                    </p>

                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
