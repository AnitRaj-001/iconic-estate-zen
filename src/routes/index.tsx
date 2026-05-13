import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Gallery } from "@/components/site/Gallery";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCTAs } from "@/components/site/FloatingCTAs";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DhruvIconic — Luxury Real Estate & RERA Plots in Patna" },
      { name: "description", content: "Premium RERA‑approved townships across Patna by DhruvIconic Pvt. Ltd. Icon City, Icon Residency, Icon Village and more — luxury living, world‑class amenities and trusted investment value for over 20 years." },
      { property: "og:title", content: "DhruvIconic — Luxury Real Estate in Patna" },
      { property: "og:description", content: "Discover premium RERA‑approved plots and townships across Patna." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "DhruvIconic Pvt. Ltd.",
          areaServed: "Patna, Bihar, India",
          description:
            "Luxury real estate developer specialising in RERA‑approved townships and premium plots across Patna.",
          url: "/",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingCTAs />
    </main>
  );
}
