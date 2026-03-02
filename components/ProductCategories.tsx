"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const collections = [
  {
    id: "sarees",
    title: "Maheshwari Sarees",
    type: "saree",
    viewAllLabel: "View All Sarees",
    items: [
      { name: "Plain Maheshwari", slug: "Plain", image: "/categories/Plain-Maheshwari.jpg" },
      { name: "Silk ", slug: "silk", image: "/categories/AADI-HANDLOOM-silk.jpg" },
      { name: "Printed", slug: "printed", image: "/categories/AADI-HANDLOOM-printed.jpg" },
      { name: "Buti", slug: "buti", image: "/categories/buti-Maheshwari.jpg" },
      { name: "Checks", slug: "checks", image: "/categories/checks-Maheshwari.jpg" },
      { name: "Coin Buti", slug: "Coin Buti", image: "/categories/coin-buti.jpg" },
      { name: "Tie & Dye", slug: "Tie and Dye", image: "/categories/tie-and-dye-Maheshwari.jpg" },
    ],
  },
  {
    id: "suits",
    title: "Maheshwari Suits",
    type: "suit",
    viewAllLabel: "View All Suits",
    items: [
      { name: "2 Piece Star Buti", slug: "2-piece-Star-Buti", image: "/categories/2-piece-star-buti.jpg" },
      { name: "2 Piece Buta Suits", slug: "2-piece-Buta-Suits", image: "/categories/2-piece-buta-suits.jpg" },
    ],
  },
  {
    id: "dupattas",
    title: "Maheshwari Dupattas",
    type: "dupatta",
    viewAllLabel: "View All Dupattas",
    items: [
      { name: "Resham Dupattas", slug: "resham", image: "/categories/dupatta-resham.jpg" },
      { name: "Dual Shade Dupattas", slug: "dual-shade", image: "/categories/dupatta-dual-shade.jpg" },
      { name: "Zari Dupattas", slug: "silver-golden-zari", image: "/categories/dupatta-silver-golden-zari.jpg" },
      { name: "Tie & Dye Dupattas", slug: "tye-and-dye", image: "/categories/dupatta-tye-and-dye.jpg" },
    ],
  },
];

export default function ProductCategories() {
  return (
    <section
      className="relative bg-[#f3ead9] py-32 overflow-hidden"
      aria-label="Maheshwari Saree Collections AADI Handloom"
    >
      {/* SEO TEXT (hidden but powerful) */}
      <div className="hidden">
        Maheshwari sarees online, Maheshwari suits, Maheshwari dupatta,
        handloom Maheshwari sarees from Maheshwar, buy Maheshwari saree India,
        AADI Handloom Maheshwari collection.
      </div>

      {/* subtle luxury gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#efe2c2]/30 to-[#e7d6b1]/40 pointer-events-none"/>

      <div className="relative max-w-7xl mx-auto px-6 space-y-36">
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
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      {/* ===== HEADING ===== */}
      <div className="text-center mb-20">
        <p className="text-[10px] tracking-[0.6em] uppercase text-[#8b7b4b] mb-5">
          AADI Handloom Collection
        </p>

        <h2 className="text-3xl md:text-5xl font-serif tracking-[0.25em] text-[#bfa25a]">
          {collection.title}
        </h2>

        <div className="mx-auto mt-7 h-px w-24 bg-[#bfa25a]/50" />
      </div>

      {/* ===== GRID ===== */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 md:py-[5px] md:gap-12 ">

        {collection.items.map((item: any) => (
          <Link
            key={item.slug}
            href={`/products?type=${collection.type}&category=${item.slug}`}
            className="group"
          >
            <motion.div
              whileHover={{ y: -12 }}
              transition={{ duration: 0.45 }}
              className="relative"
            >

              {/* ===== OUTER ELEGANT FRAME (distance from image) ===== */}
              <div className="
                p-1
                border border-[#8b0000] border-{rounded, 2px}
                rounded-xl
                bg-[#f7f1e4]
                shadow-[0_25px_70px_rgba(0,0,0,0.25)]
              ">

                {/* ===== INNER IMAGE CONTAINER ===== */}
                <div className="relative w-full h-[200px] sm:h-[180px] md:h-[500px] overflow-hidden bg-white">

                  <Image
                    src={item.image}
                    alt={`${item.name} Maheshwari by AADI Handloom`}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-[1800ms]
                      group-hover:scale-[1.22]
                    "
                  />

                  {/* PALLU LIGHT SWEEP */}
                  <div className="
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700
                  ">
                    <div className="
                      absolute -left-[120%] top-0 h-full w-[60%]
                      bg-gradient-to-r from-transparent via-[#e7c97a]/40 to-transparent
                      rotate-[12deg]
                      group-hover:left-[140%]
                      transition-all duration-[1600ms]
                      ease-[cubic-bezier(0.22,1,0.36,1)]
                    "/>
                  </div>

                  {/* DARK LUXURY OVERLAY */}
                  <div className="
                    absolute inset-0
                    bg-gradient-to-t from-black/40 via-transparent to-transparent
                    opacity-0 group-hover:opacity-100
                    transition
                  "/>

                  {/* LABEL */}
                  <div className="
                    absolute bottom-0 inset-x-0
                    bg-gradient-to-t from-[#3b2b20]/95 via-[#3b2b20]/70 to-transparent
                    py-5
                  ">
                    <p className="
                      text-center text-[#f1e6c8]
                      text-sm tracking-[0.35em]
                      uppercase
                    ">
                      {item.name}
                    </p>
                  </div>

                </div>
              </div>

              {/* gold hover glow */}
              <div className="
                absolute inset-0 opacity-0 group-hover:opacity-100 transition
                border border-[#bfa25a]
                shadow-[0_0_40px_rgba(191,162,90,0.55)]
                pointer-events-none
              "/>

            </motion.div>
          </Link>
        ))}
      </div>

      {/* ===== CTA ===== */}
      <div className="flex justify-center mt-8 mb-[-60px]">
        <Link
          href={`/products?type=${collection.type}`}
          className={
            `border border-[#bfa25a] px-6 sm:px-12 md:px-20 py-4 text-[11px] tracking-[0.55em] uppercase text-[#2a2118] hover:bg-[#bfa25a] hover:text-black transition duration-500`
          }
        >
          {collection.viewAllLabel}
        </Link>
      </div>
    </motion.div>
  );
}