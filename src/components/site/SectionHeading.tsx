import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  italicWord,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-5 ${alignCls}`}
    >
      <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
        <span className="h-px w-8" style={{ backgroundColor: "var(--brand-blue)" }} />
        <span className="eyebrow" style={{ color: "var(--brand-blue)" }}>{eyebrow}</span>
        <span className="h-px w-8" style={{ backgroundColor: "var(--brand-blue)" }} />
      </div>
      <h2 className="max-w-3xl font-display text-4xl leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
        {title}{" "}
        {italicWord && <span className="italic text-gradient-blue">{italicWord}</span>}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
