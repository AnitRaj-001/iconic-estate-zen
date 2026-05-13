import { motion } from "framer-motion";
import { ShieldCheck, Headphones, Truck, FileCheck2, Banknote, TreePine } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const features = [
  { icon: Headphones, title: "24/7 Support", text: "Dedicated client assistance any time of day, regardless of time‑zone." },
  { icon: FileCheck2, title: "Registry & Mutation", text: "Full registry and mutation services included at zero additional cost." },
  { icon: Truck, title: "Free Site Transport", text: "Complimentary chauffeured transport to view your dream land." },
  { icon: ShieldCheck, title: "RERA Approved", text: "Every plot is RERA‑approved and compliant with government guidelines." },
  { icon: Banknote, title: "Easy Finance", text: "Bank loans, flexible payment plans and 0% EMI options available." },
  { icon: TreePine, title: "Green Communities", text: "Lush green surroundings, thoughtfully planned avenues and clubhouses." },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A standard of living,"
          italicWord="redefined."
          subtitle="Every DhruvIconic township is engineered around six uncompromising commitments to our residents."
          align="center"
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border/40 bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative bg-card p-8 transition-colors duration-500 hover:bg-secondary/60"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-blue text-primary-foreground shadow-elegant transition-transform duration-500 group-hover:-rotate-6">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              <div className="mt-6 h-px w-12 bg-primary transition-all duration-500 group-hover:w-24" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
