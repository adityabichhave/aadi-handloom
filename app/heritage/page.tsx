"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function HeritagePage() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <main className="bg-[#1e140c] -mt-[60px] overflow-hidden">
      {/* ================= INTRO / HERO ================= */}
      <section
        ref={ref}
        className="
          relative pt-40 pb-28 px-6
          overflow-hidden
          bg-[#2a1d12]
        "
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
        {/* FABRIC MOTION */}
        <div className="absolute inset-0 fabric-motion pointer-events-none" />

        {/* GOLD THREAD */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] gold-thread" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div
            className={`
              flex justify-center
              transition-all duration-[1200ms]
              ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
          >
            <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full border border-[#d6b874]/60 shadow-[0_0_90px_rgba(214,184,116,0.45)]">
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
            <p className="text-[#d6b874] tracking-[0.35em] uppercase text-sm mb-6">
              Our Heritage
            </p>

            <h1 className="text-4xl md:text-5xl font-serif text-[#f2ead8] mb-8 leading-tight">
              Where devotion became design.
            </h1>

            <div className="border-l border-[#d6b874]/50 pl-6 space-y-6 text-[16px] leading-[1.9] text-[#e8dcc4]">
              <p>
                Maheshwar is not merely a place of origin — it is the soul of
                Maheshwari weaving.
              </p>

              <p>
                Under the guidance of Ahilya Mata Holkar, weaving transformed
                into seva, where every thread carried faith, patience, and
                purpose.
              </p>

              <p>
                This philosophy continues to guide AADI Handloom, honouring the
                past while weaving for the present.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STORY CONTINUATION ================= */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-[#e8dcc4] text-[15px] leading-[1.9] border-l border-[#d6b874]/40 pl-6 space-y-6">
          <p>
            The Maheshwari saree emerged as a harmonious balance — light yet
            structured, minimal yet meaningful. Borders, pallus, and motifs
            were never excess, but expressions of order and devotion.
          </p>

          <p>
            Over generations, this craft survived not through mass adoption,
            but through discipline — passed quietly from one loom to another.
          </p>

          <p>
            AADI Handloom remains rooted in this discipline, ensuring every
            weave respects proportion, restraint, and rhythm.
          </p>
        </div>
      </section>

      {/* ================= VALUES STRIP ================= */}
      <section className="relative py-20 bg-[#24180f]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          {[
            "Devotion in Craft",
            "Discipline in Design",
            "Continuity of Knowledge",
          ].map((value, i) => (
            <div key={i}>
              <p className="text-xl font-serif text-[#d6b874] mb-3">
                {value}
              </p>
              <div className="mx-auto h-px w-12 bg-[#d6b874]/60" />
            </div>
          ))}
        </div>
      </section>

      {/* ================= PRESENT DAY ================= */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-[#e8dcc4] text-[15px] leading-[1.9] border-l border-[#d6b874]/40 pl-6 space-y-6">
          <p>
            Today, this heritage is carefully preserved by families and
            artisans who continue to treat weaving as a responsibility rather
            than a business.
          </p>

          <p>
            Under the stewardship of{" "}
            <span className="text-[#f2ead8] font-semibold">
              Shailendra Nandakishore Bichhave
            </span>
            , AADI Handloom remains committed to Maheshwari values without
            compromise.
          </p>

          <p>
            Each creation stands as a reminder — that true heritage is not
            revived, but lived.
          </p>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="relative py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#d6b874] leading-relaxed">
          Woven in devotion.
          <br />
          Preserved through generations.
        </h2>
      </section>

      {/* ================= ANIMATIONS ================= */}
      <style jsx global>{`
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

        @keyframes halo {
          0%,100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }
        .animate-halo {
          animation: halo 6s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
