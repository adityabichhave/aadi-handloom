"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AboutClient() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  /* ========= BODY LOCK FOR LIGHTBOX ========= */
  useEffect(() => {
    document.body.style.overflow = activeImage ? "hidden" : "";
  }, [activeImage]);

  /* ========= INTERSECTION ========= */
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <main className="bg-[#1e140c] overflow-hidden">

      {/* ================= ABOUT HERO ================= */}

      <section
        ref={ref}
        className="relative pt-32 pb-28 px-6 overflow-hidden bg-[#2a1d12]"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(42,29,18,0.96), rgba(28,20,12,1)),
            url('/maheshwari-thread.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 fabric-motion pointer-events-none" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <div
            className={`transition-all duration-[1200ms] ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-[#d6b874] tracking-[0.4em] uppercase text-lg mb-6">
              About Us
            </p>

            <h1 className="text-4xl md:text-5xl font-serif text-[#f2ead8] leading-tight mb-8">
              Preserving Maheshwari Handloom
              <br />
              Since Generations in Maheshwar.
            </h1>

            <div className="border-l border-[#d6b874]/50 pl-6 max-w-xl space-y-6 text-[16px] leading-[1.9] text-[#e8dcc4]">
              <p>
                Established as a family-led handloom house in Maheshwar,
                AADI Handloom represents generations of authentic Maheshwari weaving.
              </p>
              <p>
                Knowledge passed not through manuals — but through lived practice.
              </p>
            </div>
          </div>

          {/* IMAGE + LOGO */}
          <div
            className={`relative flex flex-col items-center transition-all duration-[1400ms] delay-200 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-[320px] h-[420px] border border-[#d6b874]/50 shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
              <Image
                src="/AADI-HANDLOOM-heritage.jpg"
                alt="AADI Handloom heritage Maheshwar weaving"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-10 bg-[#d6b874]/60" />
              <Image
                src="/aadi-handloom-logo.png"
                alt="AADI Handloom Logo"
                width={110}
                height={55}
              />
              <div className="h-px w-10 bg-[#d6b874]/60" />
            </div>
          </div>

        </div>
      </section>

      {/* ================= TRUST GRID ================= */}

      <section className="relative py-24 px-6 bg-[#24180f]">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-serif text-[#d6b874] mb-12 text-center">
            Trust & Recognition
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["certificate-1.png","certificate-2.png","award-1.png","award-2.png"].map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(`/Trust/${img}`)}
                className="group relative w-full aspect-[3/4] border border-[#d6b874]/40 bg-[#1e140c] overflow-hidden"
              >
                <Image
                  src={`/Trust/${img}`}
                  alt="Handloom certificate or award recognition"
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}

      {activeImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/90"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="fixed top-4 right-4 w-10 h-10 text-3xl text-[#d6b874] bg-black/40 rounded-full"
            >
              ×
            </button>

            <Image
              src={activeImage}
              alt="Certificate enlarged"
              width={1300}
              height={1700}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= ANIMATION ================= */}

      <style jsx global>{`
        @keyframes fabric {
          0% { opacity: .85 }
          50% { opacity: 1 }
          100% { opacity: .85 }
        }
        .fabric-motion {
          background: radial-gradient(circle, rgba(255,255,255,.05), transparent 70%);
          animation: fabric 14s ease-in-out infinite;
        }
      `}</style>

    </main>
  );
}
