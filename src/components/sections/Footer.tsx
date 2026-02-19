import trrLogo from "@/assets/trr-logo.svg";

const footerColumns = [
  {
    title: "Facket",
    links: [
      { label: "Omställningsstöd", href: "#" },
      { label: "Kompetensutveckling", href: "#" },
      { label: "Karriärrådgivning", href: "#" },
      { label: "Förhandlingsstöd", href: "#" },
      { label: "Kontakta oss", href: "#" },
    ],
  },
  {
    title: "Företag",
    links: [
      { label: "Omställningstjänster", href: "#" },
      { label: "Kompetensväxling", href: "#" },
      { label: "Arbetsmarknadsdata", href: "#" },
      { label: "Anmäl uppsägning", href: "#" },
      { label: "Bli kund", href: "#" },
    ],
  },
  {
    title: "Om TRR",
    links: [
      { label: "Vår historia", href: "#" },
      { label: "Så fungerar det", href: "#" },
      { label: "Nyheter & rapporter", href: "#" },
      { label: "Jobba hos oss", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[hsl(264,55%,8%)] text-white/80">
      <div className="section-padding pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12">
        {/* Top: logo + columns */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-16">
            {/* Logo column */}
            <div className="md:col-span-1">
              <img
                src={trrLogo}
                alt="TRR"
                className="h-8 mb-5 brightness-0 invert"
              />
              <p className="text-sm text-white/50 leading-relaxed max-w-[220px]">
                Med dig hela arbetslivet. Karriärstöd genom kollektivavtalet.
              </p>
            </div>

            {/* Link columns */}
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-5">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-14 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} TRR Trygghetsrådet. Alla rättigheter förbehållna.
            </p>
            <div className="flex gap-6 text-xs text-white/30">
              <a href="#" className="hover:text-white/60 transition-colors">Integritetspolicy</a>
              <a href="#" className="hover:text-white/60 transition-colors">Cookies</a>
              <a href="#" className="hover:text-white/60 transition-colors">Tillgänglighet</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
