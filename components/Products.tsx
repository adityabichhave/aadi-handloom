"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#f5efe6]"
      style={{
        backgroundImage: "url('/maheshwari-thread.png')",
        backgroundSize: "420px",
      }}
    >
      {/* ATMOSPHERIC BASE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6f1e9]/95 via-[#efe6d6]/90 to-[#e6dbc7]/95" />

      {/* SOFT TEXTILE VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.55),rgba(0,0,0,0.05))]" />

      {/* ================= ACT I — PHILOSOPHY ================= */}
      <div className="relative max-w-7xl mx-auto px-6 pt-44 pb-36">
        <div
          className={`max-w-4xl transition-all duration-[2400ms]
          ease-[cubic-bezier(0.19,1,0.22,1)]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <p className="text-[11px] tracking-[0.55em] uppercase text-[#8c7a45] mb-10">
            Contact
          </p>

          <h1 className="font-serif text-5xl md:text-6xl text-[#2a2118] leading-[1.15] mb-10">
            A home where
            <br />
            heritage lives quietly.
          </h1>

          {/* Heritage Divider */}
          <div className="w-24 h-[1px] bg-[#c9b37a] opacity-60 mb-12" />

          <p className="text-[18px] leading-[2] text-[#4a4336] max-w-2xl">
            AADI Handloom is not headquartered in glass towers.
            <br /><br />
            We work from Maheshwar — where looms echo through courtyards,
            where time slows, and where Maheshwari weaving is lived
            as a daily discipline rather than a commercial act.
          </p>

          <p className="mt-12 text-[11px] tracking-[0.35em] uppercase text-[#9a8a5a]">
            Established in Maheshwar
          </p>
        </div>
      </div>

      {/* ================= ACT II — PRESENCE ================= */}
      <div className="relative max-w-7xl mx-auto px-6 pb-44">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">

          {/* ORIGIN */}
          <div
            className={`transition-all duration-[1800ms] delay-200
            ease-[cubic-bezier(0.19,1,0.22,1)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
          >
            <p className="uppercase tracking-[0.3em] text-[11px] text-[#8c7a45] mb-6">
              The House
            </p>
            <p className="text-[#2a2118] leading-[1.9]">
              Maheshwar<br />
              Narmada River Plains<br />
              Madhya Pradesh, India
            </p>
          </div>

          {/* CORRESPONDENCE */}
          <div
            className={`transition-all duration-[1800ms] delay-300
            ease-[cubic-bezier(0.19,1,0.22,1)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
          >
            <p className="uppercase tracking-[0.3em] text-[11px] text-[#8c7a45] mb-6">
              Correspondence
            </p>

            <div className="space-y-7 text-[#2a2118]">
              <Link
                href="mailto:contact@aadihandloom.com"
                className="block hover:text-[#bfa25a] transition"
              >
                contact@aadihandloom.com
              </Link>

              <Link
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                className="block hover:text-[#bfa25a] transition"
              >
                WhatsApp · +91 XXXXXXXXXX
              </Link>

              <Link
                href="https://instagram.com/aadihandloom"
                target="_blank"
                className="block hover:text-[#bfa25a] transition"
              >
                Instagram · @aadihandloom
              </Link>
            </div>
          </div>

          {/* BRAND SEAL */}
          <div
            className={`flex items-start transition-all duration-[1800ms] delay-400
            ease-[cubic-bezier(0.19,1,0.22,1)]
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"}`}
          >
            <Image
              src="/logo1.png"
              alt="AADI Handloom — Maheshwari Sarees"
              width={150}
              height={80}
              className="opacity-95"
            />
          </div>
        </div>
      </div>

      {/* ================= ACT III — MAP (DESTINATION) ================= */}
      <div className="relative max-w-6xl mx-auto px-6 pb-44">
        <div
          className={`bg-[#fdfbf6]
          border border-[#d8caa2]/60
          shadow-[0_60px_120px_rgba(0,0,0,0.18)]
          transition-all duration-[2400ms] delay-500
          ease-[cubic-bezier(0.19,1,0.22,1)]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <div className="px-10 md:px-16 py-12 border-b border-[#d8caa2]/40">
            <p className="uppercase tracking-[0.4em] text-[11px] text-[#8c7a45] mb-4">
              Finding the Home
            </p>
            <p className="text-[#2a2118] max-w-xl leading-[1.8]">
              Our doors are open with intention.
              If you plan to visit Maheshwar, we recommend writing to us first.
            </p>
          </div>

          <div className="relative h-[420px] grayscale hover:grayscale-0 transition duration-[2000ms]">
            <iframe
              src="https://www.google.com/maps?q=Maheshwar%20Madhya%20Pradesh&output=embed"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* ================= ACT IV — LETTER ================= */}
      <div className="relative max-w-5xl mx-auto px-6 pb-52">
        <div
          className={`bg-[#fdfbf6]
          border border-[#d8caa2]/60
          px-10 md:px-20 py-16
          shadow-[0_70px_140px_rgba(0,0,0,0.18)]
          transition-all duration-[2400ms] delay-700
          ease-[cubic-bezier(0.19,1,0.22,1)]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <p className="uppercase tracking-[0.35em] text-[11px] text-[#8c7a45] mb-10">
            Write to the House
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <input
              placeholder="Your Name"
              className="border-b border-[#bfa25a]/50 bg-transparent py-4 outline-none"
            />
            <input
              placeholder="Email Address"
              className="border-b border-[#bfa25a]/50 bg-transparent py-4 outline-none"
            />
            <textarea
              placeholder="Inquiries, collaborations, bespoke requests"
              rows={5}
              className="md:col-span-2 border-b border-[#bfa25a]/50 bg-transparent py-4 outline-none resize-none"
            />

            <div className="md:col-span-2 mt-10">
              <button
                type="submit"
                className="
                  px-24 py-4
                  bg-[#d4b86f]
                  text-[#1f1a14]
                  text-[11px]
                  tracking-[0.4em]
                  uppercase
                  hover:bg-[#e4d097]
                  transition
                "
              >
                Send Letter
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
