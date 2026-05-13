import { Facebook, Instagram, Youtube, Send, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import { Logo } from "./Logo";

const companyLinks = [
  { label: "About Us", href: "/#about" },
  { label: "Why Choose Us", href: "/#services" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const resourceLinks = [
  { label: "RERA Info", href: "/#contact" },
  { label: "Bank Loans", href: "/#contact" },
  { label: "Site Visits", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-secondary/40 pt-20">
      <div className="luxe-divider mx-auto max-w-7xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.6fr_2fr_1.4fr] lg:px-10">

        {/* Brand Column */}
        <div>
          <Link to="/" className="inline-block mb-6">
            <Logo className="h-12 w-auto" />
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Patna's leading luxury real estate brand crafting RERA‑approved townships
            for over two decades. Where dreams meet opportunity.
          </p>

          {/* Contact Info */}
          <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
            <a
              href="tel:+919297882030"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-gold" />
              +91 92978 82030
            </a>
            <a
              href="mailto:info@dhruv-iconic.com"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-gold" />
              info@dhruv-iconic.com
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              R.P Center, RPS More, Bailey Road, Patna
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.facebook.com/dhruviconicpatna/"
              target="_blank"
              rel="noreferrer"
              aria-label="DhruvIconic on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition-all hover:border-gold hover:text-gold"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="DhruvIconic on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition-all hover:border-gold hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="DhruvIconic on YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition-all hover:border-gold hover:text-gold"
            >
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {/* Projects */}
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold mb-5">Projects</div>
            <ul className="flex flex-col gap-3">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="text-sm text-foreground/75 hover:text-foreground gold-underline"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold mb-5">Company</div>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-foreground/75 hover:text-foreground gold-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-gold mb-5">Resources</div>
            <ul className="flex flex-col gap-3">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-foreground/75 hover:text-foreground gold-underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold mb-5">Newsletter</div>
          <p className="text-sm text-muted-foreground">
            Receive curated property launches and investment insights.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 flex items-center gap-2 rounded-full border border-border/60 bg-background/50 p-1.5 pl-4 focus-within:border-gold"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/35 focus:outline-none"
            />
            <button
              type="submit"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground"
              aria-label="Subscribe"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919297882030?text=Hello%20DhruvIconic%2C%20I%27d%20like%20to%20know%20more"
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-full border border-[#25D366]/50 bg-[#25D366]/10 px-5 py-3 text-sm font-medium text-[#25D366] transition-all hover:bg-[#25D366]/20"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row lg:px-10">
          <div>© {new Date().getFullYear()} DhruvIconic Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
            <a href="#" className="hover:text-gold">RERA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
