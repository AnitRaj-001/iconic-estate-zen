import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import iconCity from "@/assets/properties/icon-city.jpg";
import iconResidency from "@/assets/properties/icon-residency.jpg";
import iconResidency2 from "@/assets/properties/icon-residency-2.jpg";
import iconVillage from "@/assets/properties/icon-village.jpg";
import iconVillage2 from "@/assets/properties/icon-village-2.jpg";
import about1 from "@/assets/properties/about-1.jpg";
import statsBg from "@/assets/properties/stats-bg.jpg";
import delivered from "@/assets/properties/delivered-1.jpg";
import { SectionHeading } from "./SectionHeading";

type Item = { src: string; alt: string; category: "All" | "Township" | "Plots" | "Amenities" };

const items: Item[] = [
  { src: iconCity, alt: "Icon City township", category: "Township" },
  { src: iconResidency, alt: "Icon Residency view", category: "Township" },
  { src: iconVillage, alt: "Icon Village landscape", category: "Township" },
  { src: about1, alt: "DhruvIconic premium plot", category: "Plots" },
  { src: statsBg, alt: "Aerial view of project", category: "Amenities" },
  { src: iconResidency2, alt: "Icon Residency facade", category: "Plots" },
  { src: iconVillage2, alt: "Icon Village amenities", category: "Amenities" },
  { src: delivered, alt: "Delivered DhruvIconic project", category: "Township" },
];

const filters: Item["category"][] = ["All", "Township", "Plots", "Amenities"];

// Masonry-friendly heights
const heights = ["row-span-1", "row-span-2", "row-span-1", "row-span-1", "row-span-2", "row-span-1", "row-span-1", "row-span-1"];

export function Gallery() {
  const [active, setActive] = useState<Item["category"]>("All");
  const [open, setOpen] = useState<Item | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [active]
  );

  return (
    <section id="gallery" className="relative bg-secondary/30 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title="A glimpse of our"
            italicWord="craftsmanship."
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                  active === f
                    ? "border-gold bg-gradient-gold text-primary-foreground"
                    : "border-border/60 text-foreground/70 hover:border-gold hover:text-gold"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((it, i) => (
              <motion.button
                layout
                key={it.src + active}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                onClick={() => setOpen(it)}
                className={`group relative overflow-hidden rounded-xl bg-card ${heights[i % heights.length]}`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{it.category}</div>
                  <div className="mt-1 text-sm font-medium text-foreground line-clamp-1">{it.alt}</div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-md"
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(null)}
              className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full glass text-foreground hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={open.src}
              alt={open.alt}
              className="max-h-[85vh] max-w-[92vw] rounded-xl object-contain shadow-elegant"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
