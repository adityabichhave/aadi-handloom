"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > 120 && currentY > lastScrollY) {
        setVisible(false);
      } else if (currentY < 120) {
        setVisible(true);
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 z-40
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        pointer-events-none
      `}
      aria-hidden="true"
    >
      {/* CIRCLED ARROW */}
      <div
        className="
          w-12 h-12
          rounded-full
          bg-[#d6b874]
          flex items-center justify-center
          shadow-[0_8px_24px_rgba(0,0,0,0.35)]
          animate-scrollBounce
        "
      >
        <span className="text-black text-xl leading-none">↓</span>
      </div>

      {/* ANIMATION */}
      <style jsx global>{`
        @keyframes scrollBounce {
          0% {
            transform: translateY(0);
            opacity: 0.85;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 0.85;
          }
        }

        .animate-scrollBounce {
          animation: scrollBounce 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
