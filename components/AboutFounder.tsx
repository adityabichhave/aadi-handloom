"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHeritage() {
  return (
    <section className="relative bg-[#f3ead9] py-20 md:py-28 overflow-hidden">
      {/* Textile texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/maheshwari-thread.png')",
          backgroundSize: "420px",
        }}
      />

      {/* Soft heritage glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,162,90,0.18),transparent_65%)]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-start md:items-center">
        {/* LEFT — HERITAGE IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden border border-[#bfa25a]/50 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <Image
              src="/ShailendraNandakishoreBichhave.jpg"
              alt="Shailendra Nandakishore Bichhave"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>

          {/* Name Plate — mobile friendly */}
          <div className="relative md:absolute md:-bottom-6 md:left-1/2 md:-translate-x-1/2 mt-6 md:mt-0 mx-auto w-fit bg-[#f6f1ea] border border-[#bfa25a]/60 px-6 py-3 text-center">
            <p className="text-sm font-serif tracking-widest text-[#2a2118]">
  Shailendra Nandakishore Bichhave
</p>
<p className="mt-1 text-[10px] tracking-[0.3em] uppercase text-[#6b5f3d]">
  Steward • AADI Handloom
</p>
<p className="mt-2 text-[14px] text-[#4a4231]">
  Established in Maheshwar,<br></br> Madhya Pradesh — <span className="font-medium">1990</span>
</p>


          </div>
        </motion.div>

        {/* RIGHT — STORY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[10px] md:text-[11px] tracking-[0.45em] uppercase text-[#8b7b4b] mb-5 md:mb-6">
            About the House
          </p>

          <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-[#bfa25a] mb-6 md:mb-8 leading-snug">
            A legacy carried forward through generations.
          </h2>

          <div className="space-y-5 md:space-y-6 text-[#2a2118] text-sm leading-relaxed">
            <p>
              Aadi Handloom is not a brand born in a boardroom.
              It is a heritage that began within a family — shaped by
              the dedication, values, and craftsmanship of our parents
              and elders.
            </p>

            <p>
              From sourcing yarn to understanding the rhythm of Maheshwari
              looms, the knowledge was passed down through generations,
              preserved not in manuals, but in practice.
            </p>

            <p>
              Today, Aadi Handloom is responsibly guided by
              <span className="font-semibold">
                {" "}Shailendra Nandakishore Bichhave
              </span>,
              who carries forward this legacy with respect for tradition
              and a commitment to authenticity.
            </p>

            <p>
              Every Handloom Maheshwari Product reflects not only craftsmanship,
              but continuity — a balance of ancestral wisdom and modern
              refinement.
            </p>

            <p>
              This is not a brand built for trends.
              <br />
              It is a family legacy shaped for generations to come.
            </p>

            <p className="text-[#3f382a]">
  Established in <span className="font-medium">Maheshwar</span>, a historic weaving
  town on the banks of the Narmada, Aadi Handloom has remained
  rooted in the original principles of Maheshwari handloom
  for over four decades.
</p>

          </div>


          {/* CTA — mobile optimized */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-10">
            {/* Divider only on desktop */}
            <div className="hidden sm:block h-12 w-px bg-[#bfa25a]/50" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12">
              <Image
  src="/aadi-handloom-logo.png"
  alt="Aadi Handloom Logo"
  width={220}
  height={120}
  className="w-[140px] sm:w-[180px] md:w-[220px] h-auto"
/>

              <Link
                href="/about"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-14
                  py-3.5
                  bg-[#d6b874]
                  text-[#1e1a16]
                  text-[11px]
                  tracking-[0.35em]
                  uppercase
                  border border-[#bfa25a]
                  transition-all
                  duration-300
                  hover:bg-[#e3cf95]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#bfa25a]/60
                "
              >
                Know More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
