"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Heritage() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.35 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative z-0 isolate py-32 px-6 overflow-hidden bg-[#2a1d12]"
      style={{
        backgroundImage: `
          linear-gradient(
            180deg,
            rgba(42,29,18,0.96),
            rgba(28,20,12,1)
          ),
          url('/maheshwari-thread.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* SLOW FABRIC MOTION */}
      <div className="absolute inset-0 fabric-motion pointer-events-none" />

      {/* GOLD SHIMMER THREAD */}
      <div className="absolute inset-x-0 top-1/2 h-[1px] gold-thread" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* IMAGE */}
        <div
          className={`
            flex justify-center
            transition-all duration-[1200ms] ease-out
            ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}
          `}
        >
          <div
            className="
              relative w-[260px] h-[260px] md:w-[340px] md:h-[340px]
              rounded-full
              border border-[#d6b874]/60
              shadow-[0_0_90px_rgba(214,184,116,0.45)]
            "
          >
            {/* HALO */}
            <div className="absolute inset-[-18px] rounded-full bg-[#d6b874]/20 blur-2xl animate-halo" />

            <Image
              src="/ahilya-mata-painting.png"
              alt="Ahilya Mata Holkar"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </div>

        {/* TEXT */}
        <div
          className={`
            text-[#f2ead8]
            transition-all duration-[1200ms] delay-200
            ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          <h1 className="text-[#d6b874] tracking-[0.35em] uppercase text-lg mb-6">
  Our Heritage
</h1>

<p className="text-[17px] leading-[1.9] text-[#e8dcc4]">
  Maheshwar has long been a place where discipline shaped beauty.
  On the banks of the Narmada, weaving evolved not as trade,
  but as a measured, purposeful craft.
  <br /><br />
  Under the guidance of Ahilya Mata Holkar, Maheshwari weaving
  was nurtured with restraint and dignity — where precision,
  balance, and continuity became its defining values.
  <br /><br />
  AADI Handloom stands within this lineage, preserving a tradition
  that values patience over pace, and legacy over excess.
</p>

        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx global>{`
        /* FABRIC BREATHING */
        @keyframes fabric {
          0% { opacity: 0.85; }
          50% { opacity: 1; }
          100% { opacity: 0.85; }
        }
        .fabric-motion {
          background: radial-gradient(
            circle,
            rgba(255,255,255,0.05),
            transparent 70%
          );
          animation: fabric 14s ease-in-out infinite;
        }

        /* GOLD THREAD */
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        .gold-thread {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(214,184,116,0.8),
            transparent
          );
          animation: shimmer 3s linear infinite;
        }

        /* HALO */
        @keyframes halo {
          0%,100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }
        .animate-halo {
          animation: halo 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
