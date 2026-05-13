import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import iconCity from "@/assets/properties/icon-city.jpg";
import iconResidency from "@/assets/properties/icon-residency.jpg";
import iconVillage from "@/assets/properties/icon-village.jpg";
import iconResidency2 from "@/assets/properties/icon-residency-2.jpg";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    name: "Icon City",
    location: "Naubatpur, Patna",
    image: iconCity,
    tags: ["Sarmera‑Bihta Highway", "Planned Society", "5 ft Boundary Wall", "24×7 Security"],
    status: "Now Selling",
  },
  {
    name: "Icon Residency",
    location: "Bihta, Patna",
    image: iconResidency,
    tags: ["Plot Demarcation", "Drainage System", "Bank Loan Available", "24×7 Security"],
    status: "RERA Approved",
  },
  {
    name: "Icon Village",
    location: "Maner, Patna",
    image: iconVillage,
    tags: ["Bihar's Biggest Township", "Registry on 25%", "Modern Amenities", "0% EMI Plans"],
    status: "Flagship Project",
  },
  {
    name: "Icon Garden City",
    location: "Chirora, Bihta",
    image: iconResidency2,
    tags: ["Completed 2021", "15 Bigha", "Gated Community", "Premium Plots"],
    status: "Delivered",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Current Projects"
          title="Premium townships"
          italicWord="across Patna."
          subtitle="Discover our hand‑crafted gated communities — each engineered for elegant living, smart investment and lasting value."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border/40 bg-card hover-lift"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name}, ${p.location}`}
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                  {p.status}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-xs text-foreground/70">
                    <MapPin className="h-3.5 w-3.5 text-gold" />
                    {p.location}
                  </div>
                  <h3 className="mt-1 font-display text-3xl text-foreground md:text-4xl">{p.name}</h3>
                </div>
              </div>
              <div className="flex flex-col gap-5 p-6">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/50 bg-secondary/40 px-3 py-1 text-[11px] text-foreground/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="group/link flex items-center justify-between rounded-xl bg-secondary/60 px-5 py-4 transition-colors hover:bg-secondary"
                >
                  <span className="text-sm font-semibold text-foreground">Enquire about {p.name}</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground transition-transform duration-500 group-hover/link:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
