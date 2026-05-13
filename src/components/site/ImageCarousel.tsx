import { useState, useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export function ImageCarousel({ images, alt, className = "" }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setCurrent((index + images.length) % images.length);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [current, images.length, isAnimating]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, images.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Images */}
      <div className="relative aspect-[16/10] w-full">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${alt} — view ${i + 1}`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}

        {/* Dark gradient */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />

        {/* Counter badge */}
        <div className="absolute top-4 right-4 z-30 rounded-full glass px-3 py-1 text-xs text-foreground/80">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Arrows — only if more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full glass text-foreground/80 hover:text-gold transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full glass text-foreground/80 hover:text-gold transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 bg-gold"
                    : "w-1.5 bg-foreground/40 hover:bg-foreground/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
