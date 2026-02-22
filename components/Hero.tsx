"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Head from "next/head";

export default function LuxuryHero() {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      {/* SEO META */}
      <Head>
        <title>Maheshwari Silk Sarees & Suits | AADI Handloom Maheshwar</title>
        <meta
          name="description"
          content="Discover premium Maheshwari silk sarees and handloom suits crafted in Maheshwar. AADI Handloom supplies boutiques and global clients with timeless Indian textiles."
        />
        <meta
          name="keywords"
          content="Maheshwari silk saree, Maheshwari suit, handloom Maheshwar, Aadi Handloom, Indian silk saree"
        />
      </Head>

      <section
        className="relative w-full bg-[#f3ead9] overflow-hidden"
        aria-label="Maheshwari Silk Hero Section"
      >
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Brand",
              name: "AADI Handloom",
              description:
                "Premium Maheshwari silk sarees and suits crafted in Maheshwar.",
              areaServed: "Worldwide",
              foundingDate: "1990",
            }),
          }}
        />

        {/* BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_30%_20%,#c6a87a,transparent_40%),radial-gradient(circle_at_80%_80%,#b89b6c,transparent_40%)]" />

        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/silk.png')",
          }}
        />

        <div className="max-w-[1550px] mx-auto px-5 md:px-14 pt-1 md:pt-2 pb-16 md:pb-24 relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* TEXT SIDE */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="max-w-[720px] relative"
            >

              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#c6a87a]" />
                <p className="tracking-[6px] text-[10px] md:text-[11px] text-[#662c22] uppercase">
                  Maheshwar Atelier • Est. 1990
                </p>
              </div>

              <h1 className="font-serif leading-[0.92] tracking-[-1px]">
                <span className="block text-[44px] sm:text-[64px] md:text-[96px] text-[#8a2615]">
                  Maheshwari
                </span>

                <span className="block text-[40px] sm:text-[58px] md:text-[82px] italic font-light text-[#8a2615]">
                  Silk
                </span>

                <span className="block mt-5 text-[20px] sm:text-[24px] md:text-[30px] tracking-[10px] uppercase text-[#b8965a]">
                  Reimagined
                </span>
              </h1>

              <p className="mt-8 text-[#6e5c45] text-[15px] md:text-[17px] leading-relaxed max-w-[520px] font-light">
                Handloom traditions translated into contemporary silhouettes.
                Crafted in Maheshwar for boutiques, collectors and global wardrobes.
              </p>

              <div className="flex gap-[10px] mt-10 flex-wrap">
                <motion.a
                  href="/products"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#2a2118] text-white px-9 md:px-11 py-3 text-[12px] tracking-[2.5px] shadow-lg transition-all duration-300"
                >
                  SHOP NOW
                </motion.a>

                <motion.a
                  href="/heritage"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-[#c6a87a] px-9 md:px-11 py-3 text-[12px] tracking-[2.5px] text-[#2a2118] hover:bg-[#efe4d6] transition-all duration-300"
                >
                  OUR HERITAGE
                </motion.a>
              </div>

              <div className="mt-12 text-[11px] tracking-[3px] text-[#a07c4a] uppercase">
                Worn across India • Loved worldwide
              </div>

            </motion.div>

            {/* IMAGE SIDE */}
            <div className="relative flex justify-center lg:justify-end items-end gap-5 md:gap-10 mt-10 lg:mt-0">

              <div className="absolute right-[10%] top-[10%] w-[260px] h-[260px] md:w-[420px] md:h-[420px] bg-[#e8dccb] rounded-full blur-3xl opacity-60" />

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[280px] md:h-[430px] rounded-[160px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.18)] border border-[#e8dccb] bg-white"
              >
                <Image
                  src="/hero2.jpg"
                  alt="Maheshwari silk suit with dupatta"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative w-[180px] h-[270px] sm:w-[230px] sm:h-[340px] md:w-[340px] md:h-[520px] rounded-[200px] overflow-hidden shadow-[0_35px_100px_rgba(0,0,0,0.25)] border border-[#e8dccb] bg-white -mb-4 md:-mb-10"
              >
                <Image
                  src="/hero1.jpg"
                  alt="Maheshwari silk saree green and gold"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

            </div>
          </div>
        </div>

        {/* SEARCH MODAL */}
        {openSearch && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md w-[90%] max-w-md">
              <input
                type="text"
                placeholder="Search Maheshwari sarees..."
                className="w-full border p-3 outline-none"
              />
              <button
                onClick={() => setOpenSearch(false)}
                className="mt-4 text-sm text-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </section>
    </>
  );
}