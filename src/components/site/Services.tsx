import { motion } from "framer-motion";
import { Building2, Home, LineChart, KeyRound, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Home, title: "Residential Plots", text: "Premium RERA‑approved plots for building your dream home." },
  { icon: Building2, title: "Commercial Properties", text: "Strategic commercial spaces in Patna's high‑growth corridors." },
  { icon: LineChart, title: "Investment Advisory", text: "Data‑led guidance to grow long‑term wealth with land assets." },
  { icon: KeyRound, title: "End‑to‑End Sales", text: "Site visit, paperwork, registry and mutation — fully managed." },
];

export function Services() {
  return (
    <section id="services" className="relative bg-secondary/30 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <SectionHeading
            eyebrow="Our Services"
            title="A complete real estate"
            italicWord="experience."
            subtitle="From discovery to ownership, our specialists handle every step with the polish you'd expect from a luxury brand."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <motion.a
                key={s.title}
                href="#contact"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative flex flex-col gap-4 rounded-2xl border border-border/40 bg-card p-6 hover-lift"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 text-primary transition-colors group-hover:bg-gradient-blue group-hover:text-primary-foreground group-hover:border-transparent">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-foreground/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
