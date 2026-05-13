import { MessageCircle, Phone } from "lucide-react";

export function FloatingCTAs() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:bottom-7 sm:right-7">
      <a
        href="https://wa.me/919999999999?text=Hello%20DhruvIconic"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="relative h-6 w-6" />
      </a>
      <a
        href="tel:+919999999999"
        aria-label="Call DhruvIconic"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
