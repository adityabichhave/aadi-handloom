"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SelectedPieces() {
  return (
    <section className="bg-[#f3ead9] py-20 md:py-32">

      {/* ================= HEADER ================= */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-[-9px] md:mt-[-80px]">

        <p className="tracking-[12px] text-[20px] text-[#b8965a] uppercase mb-[60px]">
          Curated Collection
        </p>

        <div className="w-16 h-[1px] bg-[#c9b37a] mx-auto opacity-60"/>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

          <CategoryCard
            link="/products"
            image="/products/Sarees/Silk/heavy-pallu/classic-silk-WineRed-7.jpg"
            title="Silk Sarees"
          />

          <CategoryCard
            link="/products?type=suit&page=1"
            image="/products/Suits/Star buti/2-piece-star-buti-green-1.jpg"
            title="Silk Suits"
          />

          <CategoryCard
            link="/products?type=dupatta&page=1"
            image="/products/dupatta/Tie and Dye/tie-and-dye-dupatta-orangish-yellow-1.jpg"
            title="Dupattas"
          />

          <CategoryCard
            link="/products?type=saree&category=printed&page=1"
            image="/products/Sarees/printed/printed-ajrak-maheshwari-blue-1.jpg"
            title="Printed Sarees"
          />

        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-8 md:mt-12">
        <Link href="/products">
          <button className="
            px-14 py-4
            border border-[#c9b37a]
            text-[#3a2d21]
            tracking-[0.35em]
            uppercase text-[12px]
            hover:bg-[#efe4d6]
            transition-all duration-300
          ">
            View Entire Collection
          </button>
        </Link>
      </div>

    </section>
  );
}


/* ================= CATEGORY CARD ================= */

function CategoryCard({ link, image, title }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Link href={link} className="group block text-center">

        {/* Image Frame */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#fbf9f4]">

          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
          />

        </div>

        {/* Title */}
        <h3 className="
          mt-5
          font-serif
          text-[18px] md:text-[20px]
          text-[#4a3a2c]
          tracking-[1px]
          group-hover:text-[#b8965a]
          transition-colors duration-300
        ">
          {title}
        </h3>

      </Link>
    </motion.div>
  );
}