import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    name: "Ravi Ranjan",
    city: "Patna",
    project: "Icon Residency",
    quote:
      "We are very happy with the support and services. Got a quick response to our questions and were fully satisfied with the purchase of our plot in Icon Residency. We salute Dhruv Iconic for delivering this marvelous project.",
  },
  {
    name: "Rameshwar Yadav",
    city: "Patna",
    project: "Icon Residency",
    quote:
      "I purchased an off‑plan property from Dhruv Iconic at Icon Residency. I'm impressed with the quality of the development — the sales team was extremely helpful and the entire buying experience was straightforward.",
  },
  {
    name: "Anita Singh",
    city: "Bihta",
    project: "Icon City",
    quote:
      "From the first site visit to registry, every step felt premium and transparent. The location is fantastic and the boundary, security and amenities are exactly as promised.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Client Testimonials"
          title="Your satisfaction is our"
          italicWord="top priority."
          align="center"
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          <Quote className="mx-auto h-12 w-12 text-primary opacity-70" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-center"
            >
              <p className="font-display text-2xl leading-snug text-foreground/90 md:text-3xl lg:text-4xl">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="mt-4">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {t.project} · {t.city}
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 text-foreground/80 transition-all hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    k === i ? "w-10 bg-primary" : "w-4 bg-border"
                  }`}
                  aria-label={`Go to testimonial ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 text-foreground/80 transition-all hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
