"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const collections = [
  {
    id: "sarees",
    title: "Explore Sarees",
    type: "saree",
    viewAllLabel: "View All Sarees",
    items: [
      { name: "Plain Maheshwari", slug: "Plain", image: "/categories/Plain-Maheshwari.jpg" },
      { name: "Silk Sarees", slug: "silk", image: "/categories/AADI-HANDLOOM-silk.jpg" },
      { name: "Printed Sarees", slug: "printed", image: "/categories/AADI-HANDLOOM-printed.jpg" },
      { name: "Buti Sarees", slug: "buti", image: "/categories/buti-Maheshwari.jpg" },
      { name: "Checks Sarees", slug: "checks", image: "/categories/checks-Maheshwari.jpg" },
    ],
  },
  {
    id: "suits",
    title: "Explore Suits",
    type: "suit",
    viewAllLabel: "View All Suits",
    items: [
      { name: "2 - piece Star Buti", slug: "2-piece-Star-Buti", image: "/categories/2-piece-star-buti.jpg" },
      { name: "2 - piece Buta Suits", slug: "2-piece-Buta-Suits", image: "/categories/2-piece-buta-suits.jpg" },
    ],
  },
  {
    id: "dupattas",
    title: "Explore Dupattas",
    type: "dupatta",
    viewAllLabel: "View All Dupattas",
    items: [
      { name: "Resham Dupattas", slug: "resham", image: "/categories/dupatta-resham.jpg" },
      { name: "Fancy Dual shade Dupattas", slug: "dual-shade", image: "/categories/dupatta-dual-shade.jpg" },
      { name: "Silver-Golden ZARI Dupattas", slug: "silver-golden-zari", image: "/categories/dupatta-silver-golden-zari.jpg" },
      { name: "tie and dye Dupattas", slug: "tye-and-dye", image: "/categories/dupatta-tye-and-dye.jpg" },
    ],
  },
];

export default function ProductCategories() {
  return (
    <section className="relative bg-[#f3ead9] py-28 overflow-hidden">

    

      {/* subtle royal gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#efe2c2]/30 to-[#e7d6b1]/40 pointer-events-none"/>

      <div className="relative max-w-7xl mx-auto px-6 space-y-28">
        {collections.map((collection) => (
          <CollectionGrid key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  );
}

/* ================= COLLECTION GRID ================= */

function CollectionGrid({ collection }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* ===== Heading ===== */}
      <div className="text-center mb-16">
        <p className="text-[10px] tracking-[0.55em] uppercase text-[#8b7b4b] mb-4">
          Handwoven Legacy
        </p>

        <h2 className="text-3xl md:text-5xl font-serif tracking-[0.28em] text-[#bfa25a]">
          {collection.title}
        </h2>

        <div className="mx-auto mt-6 h-px w-24 bg-[#bfa25a]/50" />

        {/* luxury underline glow */}
        <div className="mx-auto mt-2 h-px w-10 bg-[#bfa25a]/20 blur-md"/>
      </div>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {collection.items.map((item: any) => (
          <Link
            key={item.slug}
            href={`/products?type=${collection.type}&category=${item.slug}`}
            className="group"
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.45 }}
              className="
                relative aspect-[4/5]
                overflow-hidden
                bg-white
                border border-[#bfa25a]/40
                shadow-[0_18px_50px_rgba(0,0,0,0.25)]
              "
            >

              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-[1800ms]
                  group-hover:scale-[1.22]
                "
              />

              {/* ===== PALLU REVEAL EFFECT ===== */}
              <div className="
                absolute inset-0
                opacity-0 group-hover:opacity-100
                transition duration-700
              ">
                <div className="
                  absolute -left-[120%] top-0 h-full w-[70%]
                  bg-gradient-to-r
                  from-transparent
                  via-[#e7c97a]/35
                  to-transparent
                  rotate-[12deg]
                  group-hover:left-[140%]
                  transition-all
                  duration-[1600ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                "/>
              </div>

              {/* silk shimmer sweep */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="
                  absolute -left-1/2 inset-y-0 w-1/2
                  bg-gradient-to-r from-transparent via-white/40 to-transparent
                  skew-x-[-20deg]
                  animate-[silkShimmer_1.3s_ease-out]
                " />
              </div>

              {/* royal dark overlay */}
              <div className="
                absolute inset-0
                bg-gradient-to-t from-black/40 via-transparent to-transparent
                opacity-0 group-hover:opacity-100
                transition
              "/>

              {/* premium gradient label bar */}
              <div className="
                absolute bottom-0 inset-x-0
                bg-gradient-to-t from-[#3b2b20]/95 via-[#3b2b20]/70 to-transparent
                backdrop-blur-md
                py-5
              ">
                <p className="
                  text-center text-[#f1e6c8]
                  text-sm tracking-[0.3em]
                  uppercase font-medium
                ">
                  {item.name}
                </p>
              </div>

              {/* gold hover frame */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100 transition
                border border-[#bfa25a]
                shadow-[0_0_35px_rgba(191,162,90,0.55)]
              " />

            </motion.div>
          </Link>
        ))}
      </div>

      {/* ===== CTA ===== */}
      <div className="flex justify-center mt-20">
        <Link
          href={`/products?type=${collection.type}`}
          className="
            relative
            border border-[#bfa25a]
            px-16 py-5
            text-[11px]
            tracking-[0.5em]
            uppercase
            text-[#2a2118]
            overflow-hidden
            transition
            hover:text-black
          "
        >
          <span className="relative z-10">{collection.viewAllLabel} →</span>

          {/* gold sweep */}
          <span className="
            absolute inset-0 bg-[#bfa25a]
            scale-x-0 origin-left
            group-hover:scale-x-100
            transition duration-500
          "/>
        </Link>
      </div>
    </motion.div>
  );
}