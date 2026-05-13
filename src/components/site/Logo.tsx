import React from "react";

interface LogoProps {
  className?: string;
  light?: boolean; // Kept for compatibility, though we use brand blue
}

export function Logo({ className = "" }: LogoProps) {
  // Official Dhruv Iconic Blue Tones
  const bluePrimary = "#004A99";
  const blueMedium = "#0073CF";
  const blueAccent = "#4DA9FF";

  return (
    <div className={`flex items-center gap-3 md:gap-4 ${className}`}>
      {/* Icon Section */}
      <svg
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-12 shrink-0"
      >
        <g transform="translate(0, 5) scale(0.85)">
          {/* Top Chevron */}
          <path
            d="M60 0L120 60H100L60 20L20 60H0L60 0Z"
            fill={bluePrimary}
          />
          {/* Middle Chevron */}
          <path
            d="M60 30L100 70H80L60 50L40 70H20L60 30Z"
            fill={blueMedium}
          />
          {/* Bottom Chevron (Triangle) */}
          <path
            d="M60 60L80 80H40L60 60Z"
            fill={blueAccent}
          />
        </g>
      </svg>

      {/* Text Section */}
      <div className="flex flex-col leading-none">
        <span
          className="font-display text-[22px] font-black uppercase tracking-tight md:text-[22px]"
          style={{ color: bluePrimary }}
        >
          Dhruv Iconic
        </span>
        <div className="mt-1.5 flex items-center gap-2">
          <div className="h-[1px] w-full bg-current opacity-30" style={{ color: blueMedium }} />
          <span
            className="whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.3em] md:text-[8px]"
            style={{ color: blueMedium }}
          >
            Creating Homes
          </span>
          <div className="h-[1px] w-full bg-current opacity-30" style={{ color: blueMedium }} />
        </div>
      </div>
    </div>
  );
}
