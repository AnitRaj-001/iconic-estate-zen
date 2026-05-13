import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "85+", label: "Acres Delivered" },
  { value: "1200+", label: "Happy Families" },
  { value: "100%", label: "RERA Approved" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury master-planned township by DhruvIconic"
          width={1920}
          height={1080}
          className="h-full w-full object-cover scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,transparent_0%,oklch(0.05_0.005_60/0.65)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow">Patna's Luxury Real Estate</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Where dreams<br />
          <span className="italic text-gradient-gold">meet</span> opportunity.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg"
        >
          Crafting premium RERA‑approved townships across Patna for over two decades.
          Luxury living, world-class amenities and timeless investment value.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-[1.04]"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-border/60 px-7 py-4 text-sm font-semibold text-foreground/90 backdrop-blur transition-all duration-300 hover:border-gold hover:text-gold"
          >
            Free Consultancy
          </a>
        </motion.div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.95 }}
          className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/40 glass md:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-6 text-center">
              <div className="font-display text-3xl text-gold md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/65">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.22em] text-foreground/60"
        >
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> RERA Approved</span>
          <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> Award‑Winning</span>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Patna, Bihar</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/60">Scroll</span>
        <div className="relative h-10 w-[1px] overflow-hidden bg-border/60">
          <span className="absolute left-0 top-0 h-2 w-px bg-gold scroll-dot" />
        </div>
      </div>
    </section>
  );
}
