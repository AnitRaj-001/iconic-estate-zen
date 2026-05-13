import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import about1 from "@/assets/properties/about-1.jpg";
import delivered from "@/assets/properties/delivered-1.jpg";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  "RERA‑approved gated communities",
  "Two decades of trusted delivery",
  "Bank loans & 0% EMI plans",
  "Registry & Mutation included",
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-elegant">
            <img
              src={about1}
              alt="DhruvIconic premium township in Patna"
              className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-10 -right-6 hidden aspect-[4/5] w-2/3 overflow-hidden rounded-2xl border border-border/40 shadow-elegant md:block">
            <img
              src={delivered}
              alt="DhruvIconic delivered project"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -left-4 top-8 hidden rounded-2xl bg-gradient-blue px-6 py-5 text-primary-foreground shadow-elegant md:block animate-float">
            <div className="font-display text-3xl leading-none">20+</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.25em]">Years of Trust</div>
          </div>
        </motion.div>

        {/* Copy */}
        <div className="flex flex-col justify-center">
          <SectionHeading
            eyebrow="About DhruvIconic"
            title="Stay with us, feel"
            italicWord="at home."
            subtitle="For over two decades, Dhruv Iconic Pvt. Ltd. has been a trusted name in real estate in Patna — offering luxury living at reasonable costs. We craft RERA‑approved townships in prime locations that blend accessibility, tranquility and modern infrastructure."
          />

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-lg border border-border/40 bg-card/50 px-4 py-3"
              >
                 <CheckCircle2 className="h-5 w-5 shrink-0" style={{ color: "var(--brand-blue)" }} />
                <span className="text-sm text-foreground/85">{h}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground/90 transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Get Free Consultancy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
