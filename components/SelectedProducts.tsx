"use client";

import Image from "next/image";
import Link from "next/link";

export default function SelectedPieces() {
  return (
    <section className="relative bg-[#f2e8cf] py-14 md:py-24 overflow-hidden">

      {/* soft luxury light */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#fff6dc]/40 blur-[160px] opacity-60 pointer-events-none"/>

      {/* ================= HEADER ================= */}
      <div className="max-w-5xl mx-auto px-5 mb-12 md:mb-16 text-center">

        <h2 className="font-serif text-[26px] md:text-[44px] text-[#2a2118] leading-[1.25] mb-4">
          Authentic Maheshwari Weaves from Maheshwar
        </h2>

        <div className="w-16 h-[1px] bg-[#c9b37a] mx-auto mb-4 opacity-60" />

        <p className="text-[#5a5146] text-[14px] md:text-[15px] leading-[1.8] max-w-xl mx-auto">
          Handwoven Maheshwari sarees, suits and dupattas crafted in Maheshwar.  
          Timeless textiles trusted across India and worldwide.
        </p>
      </div>

      {/* ================= PRODUCTS ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* ===== MOBILE: 2 COL GRID ===== */}
        <div className="grid grid-cols-1 gap-14 md:hidden">

          {/* item */}
          <ProductCard
            link="/products"
            main="/products/Sarees/Silk/heavy-pallu/classic-silk-WineRed-7.jpg"
            hover="/products/Sarees/Silk/heavy-pallu/classic-silk-WineRed-6.jpg"
            title="Silk Maheshwari"
          />

          <ProductCard
            link="/products?type=suit&page=1"
            main="/products/Suits/Star buti/2-piece-star-buti-green-1.jpg"
            hover="/products/Suits/Star buti/2-piece-star-buti-green-2.jpg"
            title="Maheshwari Suits"
          />

          <ProductCard
            link="/products?type=dupatta&page=1"
            main="/products/dupatta/Tie and Dye/tie-and-dye-dupatta-orangish-yellow-1.jpg"
            hover="/products/dupatta/Tie and Dye/tie-and-dye-dupatta-orangish-yellow-2.jpg"
            title="Maheshwari Dupatta"
          />

          <ProductCard
            link="/products?type=saree&category=printed&page=1"
            main="/products/Sarees/printed/printed-ajrak-maheshwari-blue-1.jpg"
            hover="/products/Sarees/printed/printed-ajrak-maheshwari-blue-6.jpg"
            title="Printed Sarees"
          />
        </div>

        {/* ===== DESKTOP EDITORIAL ===== */}
        <div className="hidden md:block">

          {/* row 1 */}
          <div className="flex items-start gap-20 mb-16">

            <div className="w-[52%]">
              <ProductCard
                link="/products"
                main="/products/Sarees/Silk/heavy-pallu/classic-silk-WineRed-7.jpg"
                hover="/products/Sarees/Silk/heavy-pallu/classic-silk-WineRed-6.jpg"
                title="Handwoven Silk Maheshwari"
                big
              />
            </div>

            <div className="w-[34%] mt-20">
              <ProductCard
                link="/products?type=suit&page=1"
                main="/products/Suits/Star buti/2-piece-star-buti-green-1.jpg"
                hover="/products/Suits/Star buti/2-piece-star-buti-green-2.jpg"
                title="Maheshwari Silk Suits"
              />
            </div>
          </div>

          {/* row 2 */}
          <div className="flex items-start gap-20">

            <div className="w-[34%]">
              <ProductCard
                link="/products?type=dupatta&page=1"
                main="/products/dupatta/Tie and Dye/tie-and-dye-dupatta-orangish-yellow-1.jpg"
                hover="/products/dupatta/Tie and Dye/tie-and-dye-dupatta-orangish-yellow-2.jpg"
                title="Maheshwari Dupattas"
              />
            </div>

            <div className="w-[52%] mt-20">
              <ProductCard
                link="/products?type=saree&category=printed&page=1"
                main="/products/Sarees/printed/printed-ajrak-maheshwari-blue-1.jpg"
                hover="/products/Sarees/printed/printed-ajrak-maheshwari-blue-6.jpg"
                title="Printed Maheshwari Sarees"
                big
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= BUTTON ================= */}
      <div className="max-w-md mx-auto px-6 mt-12 md:mt-16">
        <Link href="/products">
          <button className="
          w-full md:w-auto
          px-10 md:px-16 py-4
          bg-[#d4b86f]
          text-[#1f1a14]
          text-[11px]
          tracking-[0.35em]
          uppercase
          hover:bg-[#e6cf8e]
          transition
          md:hover:-translate-y-1
          ">
            Explore Full Collection
          </button>
        </Link>
      </div>

    </section>
  );
}

/* ================= CARD ================= */

function ProductCard({ link, main, hover, title, big=false }: any) {
  return (
    <Link href={link} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#fbf9f4]">

        <Image
          src={main}
          alt={title}
          fill
          className="object-cover transition-all duration-[1400ms] group-hover:scale-105"
        />

        <Image
          src={hover}
          alt="detail"
          fill
          className="object-cover opacity-0 scale-110 transition-all duration-[1600ms] group-hover:opacity-100 group-hover:scale-100"
        />
      </div>

      <h3 className={`font-serif mt-3 text-[#2a2118] ${big ? "text-2xl" : "text-lg"}`}>
        {title}
      </h3>
    </Link>
  );
}