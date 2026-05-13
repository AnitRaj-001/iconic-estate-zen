import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronRight,
  Facebook,
} from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { ImageCarousel } from "@/components/site/ImageCarousel";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingCTAs } from "@/components/site/FloatingCTAs";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetailPage,
  loader: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const p = loaderData;
    if (!p) return {};
    return {
      meta: [
        { title: p.seo.title },
        { name: "description", content: p.seo.description },
        { property: "og:title", content: p.seo.title },
        { property: "og:description", content: p.seo.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/projects/${p.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateListing",
            name: p.name,
            description: p.seo.description,
            address: {
              "@type": "PostalAddress",
              addressLocality: p.location,
              addressRegion: "Bihar",
              addressCountry: "IN",
            },
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              description: p.pricing.startingFrom,
            },
          }),
        },
      ],
    };
  },
});

function ProjectDetailPage() {
  const project = Route.useLoaderData();

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  };

  return (
    <main className="relative bg-background text-foreground">
      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          {/* Breadcrumb */}
          <motion.div {...fadeUp} className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/" hash="projects" className="hover:text-gold transition-colors">Projects</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-gold">{project.name}</span>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">

            {/* Left: Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <ImageCarousel images={project.images} alt={project.name} />
            </motion.div>

            {/* Right: Core Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              {/* Status badge */}
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gradient-gold px-4 py-1 text-[10px] uppercase tracking-[0.22em] text-primary-foreground shadow-gold">
                  {project.status}
                </span>
              </div>

              <div>
                <h1 className="font-display text-4xl text-foreground md:text-5xl lg:text-[56px] leading-[1.05]">
                  {project.name}
                </h1>
                <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span className="text-sm">{project.location}</span>
                </div>
              </div>

              <p className="text-base text-foreground/80 leading-relaxed">{project.description}</p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2">
                {project.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Pricing card */}
              <div className="rounded-2xl border border-border/40 bg-card p-5">
                <div className="text-xs uppercase tracking-[0.22em] text-gold mb-1">Price</div>
                <div className="font-display text-2xl text-foreground">{project.pricing.startingFrom}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.pricing.plotSizes.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border/50 bg-secondary/40 px-3 py-1 text-[11px] text-foreground/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {project.pricing.emiNote && (
                  <p className="mt-3 text-xs text-muted-foreground">{project.pricing.emiNote}</p>
                )}
                {project.pricing.registryNote && (
                  <p className="mt-1 text-xs text-muted-foreground">{project.pricing.registryNote}</p>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/919297882030?text=Hello%20DhruvIconic%2C%20I'm%20interested%20in%20${encodeURIComponent(project.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  id={`wa-cta-${project.slug}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-elegant transition-transform duration-300 hover:scale-[1.03]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+919297882030"
                  id={`call-cta-${project.slug}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-sm font-semibold text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-[1.03]"
                >
                  <Phone className="h-4 w-4" />
                  +91 92978 82030
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Amenities Section ── */}
      <section className="py-16 md:py-24 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">Amenities</span>
            </div>
            <h2 className="font-display text-3xl text-foreground md:text-4xl mb-10">
              World‑class <span className="italic text-gradient-gold">facilities.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.amenities.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-border/40 bg-card p-6"
              >
                <div className="text-xs uppercase tracking-[0.22em] text-gold mb-4">{group.category}</div>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA Section ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-card border border-border/40 p-8 md:p-12"
          >
            {/* Decorative top line */}
            <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="eyebrow mb-3">Book Your Site Visit</div>
                <h2 className="font-display text-3xl text-foreground md:text-4xl">
                  Interested in <span className="italic text-gradient-gold">{project.name}?</span>
                </h2>
                <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
                  Talk to our expert advisors today. We offer free site visits, transparent pricing and
                  personalised investment guidance — no obligation.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="tel:+919297882030"
                    className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
                  >
                    <Phone className="h-4 w-4 text-gold" />
                    +91 92978 82030
                  </a>
                  <span className="text-border">|</span>
                  <a
                    href="https://www.facebook.com/dhruviconicpatna/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
                  >
                    <Facebook className="h-4 w-4 text-gold" />
                    Facebook
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 lg:flex-row">
                <a
                  href={`https://wa.me/919297882030?text=Hello%20DhruvIconic%2C%20I'm%20interested%20in%20${encodeURIComponent(project.name)}%20and%20would%20like%20to%20book%20a%20site%20visit.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-white shadow-elegant transition-transform hover:scale-[1.04]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="/#contact"
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.04]"
                >
                  Free Consultancy
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl border border-border/40"
          >
            <div className="px-6 py-4 border-b border-border/40 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium text-foreground">{project.location}</span>
            </div>
            <iframe
              title={`${project.name} location map`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(project.mapQuery)}&output=embed`}
              width="100%"
              height="340"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[40%] contrast-110"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Other Projects ── */}
      <OtherProjects currentSlug={project.slug} />

      <Footer />
      <FloatingCTAs />
    </main>
  );
}

function OtherProjects({ currentSlug }: { currentSlug: string }) {
  const others = projects.filter((p) => p.slug !== currentSlug).slice(0, 3);
  return (
    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-10 bg-gold" />
          <span className="eyebrow">Explore More</span>
        </div>
        <h2 className="font-display text-3xl text-foreground md:text-4xl mb-10">
          Other <span className="italic text-gradient-gold">projects.</span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-2xl border border-border/40 bg-card overflow-hidden hover-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                  {p.status}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  {p.location}
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{p.name}</h3>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="text-sm font-medium text-gold hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
