import { Facebook, Instagram, Youtube, Send } from "lucide-react";

const cols = [
  {
    title: "Projects",
    links: ["Icon City", "Icon Residency", "Icon Village", "Icon Garden City"],
  },
  {
    title: "Company",
    links: ["About Us", "Why Choose Us", "Testimonials", "Contact"],
  },
  {
    title: "Resources",
    links: ["RERA Info", "Bank Loans", "Site Visits", "Blog"],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-secondary/40 pt-20">
      <div className="luxe-divider mx-auto max-w-7xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.4fr_2fr_1.4fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-gold p-[1.5px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-ink">
                <span className="font-display text-xl text-gold">D</span>
              </div>
            </div>
            <div className="leading-none">
              <div className="font-display text-lg text-foreground">DhruvIconic</div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-gold">Pvt. Ltd.</div>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Patna's leading luxury real estate brand crafting RERA‑approved townships
            for over two decades.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground/70 transition-all hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-[0.22em] text-gold">{c.title}</div>
              <ul className="mt-5 flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-foreground/75 hover:text-foreground gold-underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-gold">Newsletter</div>
          <p className="mt-5 text-sm text-muted-foreground">
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
