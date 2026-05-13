import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { z } from "zod";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Only numbers and + - ( ) allowed"),
  email: z.string().trim().email("Enter a valid email").max(120),
  message: z.string().trim().max(800).optional(),
});

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      message: fd.get("message") ?? "",
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please review the form.");
      setStatus("error");
      return;
    }
    setError(null);
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      e.currentTarget?.reset?.();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Let's design your"
              italicWord="next chapter."
              subtitle="Speak with our advisors for a free consultation, a private site visit or a tailored investment plan."
            />

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="tel:+919297882030"
                id="contact-call"
                className="group flex items-center gap-4 rounded-2xl border border-border/40 bg-card p-5 transition-all hover:border-primary"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-blue text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Call us</div>
                  <div className="text-base font-medium text-foreground">+91 92978 82030</div>
                </div>
              </a>

              <a
                href="https://wa.me/919297882030?text=Hello%20DhruvIconic%2C%20I%27d%20like%20to%20know%20more"
                target="_blank"
                rel="noreferrer"
                id="contact-whatsapp"
                className="group flex items-center gap-4 rounded-2xl border border-border/40 bg-card p-5 transition-all hover:border-primary"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-blue text-primary-foreground">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">WhatsApp</div>
                  <div className="text-base font-medium text-foreground">Chat with our team</div>
                </div>
              </a>

              <a
                href="mailto:info@dhruv-iconic.com"
                id="contact-email"
                className="group flex items-center gap-4 rounded-2xl border border-border/40 bg-card p-5 transition-all hover:border-gold"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-blue text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Email</div>
                  <div className="text-base font-medium text-foreground">info@dhruv-iconic.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-border/40 bg-card p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Headquarters</div>
                  <div className="text-base font-medium text-foreground">R.P Center, RPS More, Bailey Road, Patna</div>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border/40">
              <iframe
                title="DhruvIconic Patna location"
                src="https://www.google.com/maps?q=Patna%2C%20Bihar&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[40%] contrast-110"
              />
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl border border-border/40 bg-card p-8 shadow-elegant md:p-10"
          >
            <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h3 className="font-display text-3xl text-foreground">Free Consultancy</h3>
            <p className="mt-2 text-sm text-muted-foreground">Tell us about your goals — we'll respond within 24 hours.</p>

            <div className="mt-8 grid gap-5">
              <Field name="name" label="Full Name" placeholder="Your name" />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field name="phone" label="Mobile Number" placeholder="+91 ..." type="tel" />
                <Field name="email" label="Email" placeholder="you@example.com" type="email" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Project of interest, plot size, budget…"
                  className="mt-2 w-full resize-none rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                />
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}
              {status === "sent" && (
                <p className="text-sm text-primary">Thank you — we'll be in touch shortly.</p>
              )}

              <button
                id="contact-submit"
                disabled={status === "sending"}
                className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-blue px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform duration-300 hover:scale-[1.03] disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Submit Enquiry"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name, label, placeholder, type = "text",
}: { name: string; label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border/60 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}
