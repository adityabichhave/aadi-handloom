"use client";

import Image from "next/image";
import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { products } from "../../../components/productsData";
import { useCart } from "../../../components/CartContext";
import BackFilterBar from "../../../components/BackFilterBar";

type Product = any;

export default function ProductClient({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  if (!product) {
    return (
      <main className="pt-32 text-center">
        <h1 className="font-[var(--font-cinzel)] text-xl">Product not found</h1>
      </main>
    );
  }

  /* ================= STATE ================= */

  const images: string[] = product?.colors?.[0]?.images ?? [];
  const [imageIndex, setImageIndex] = useState(0);
  const [lensPos, setLensPos] = useState({ x: 50, y: 50 });
  const [showLens, setShowLens] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);

  const priceNumber = parseInt(product.price.replace(/\D/g, "") || "0");

  /* ================= MAGNIFIER ================= */

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLensPos({ x, y });
  };

  /* ================= VARIANTS ================= */

  const baseName = product?.name?.split("|")[0]?.trim() || "";

  const colourVariants = useMemo(() => {
    return products.filter(
      (p: any) =>
        p.type === product.type &&
        p.category === product.category &&
        p.name?.startsWith(baseName)
    );
  }, [product, baseName]);

  /* ================= RELATED ================= */

  const relatedProducts = useMemo(() => {
    return products
      .filter((p: any) => p.slug !== product.slug && p.type === product.type)
      .slice(0, 4);
  }, [product]);

  /* ================= RENDER ================= */

  return (
    <>
      {/* ===== LUXURY SUB NAV ===== */}
<div className="sticky top-[0px] h-16 z-30 bg-[#f3ead9]/80 backdrop-blur-md border-b -mt-[100px] border-[#c6a95a]/20">
  <div className="max-w-6xl mx-auto px-4 py-4 text-center">

    <p className="text-[10px] tracking-[0.55em] uppercase text-[#9c8451] mb-2">
      AADI HANDLOOM
    </p>

    <h1 className="font-[var(--font-cinzel)] text-[15px] md:text-[16px] tracking-[0.25em] text-[#2a2118] leading-tight">
      {product.name}
    </h1>

  </div>
</div>

      {/* ================= HERO ================= */}
      <main className="bg-[#f2e8cf] pt-[50px]">

        <section className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

          <div>
            <div
  className="relative aspect-[3/4] bg-[#e9e2d6] overflow-hidden cursor-zoom-in group"
  onMouseMove={handleMouseMove}
  onMouseEnter={() => setShowLens(true)}
  onMouseLeave={() => setShowLens(false)}
  onClick={() => setZoomOpen(true)}
>
             <div className="relative w-full aspect-[4/5]">

  <Image
    src={images[imageIndex]}
    alt={product.name}
    fill
    priority
    className="object-cover"
  />

  {/* Logo Overlay */}
  <div className="relative md:top-6 md:left-1 opacity-100">
    <Image
      src="/aadi-handloom-logo.png"
      alt="Aadi Handloom"
      width={120}
      height={60}
      className="object-contain"
    />
  </div>

</div>
              
            </div>

            {/* thumbnails */}
            <div className="flex gap-3 mt-6 justify-center flex-wrap max-w-[420px] mx-auto">
              {images.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setImageIndex(i)}
                  className={`relative w-14 h-20 border transition-all duration-300
${i===imageIndex 
? "border-[#c6a95a] scale-105" 
: "border-[#c6a95a]/30 opacity-70 hover:opacity-100"}
`}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* INFO */}
          <div className="pt-6">

            <p className="font-[var(--font-cinzel)] text-[11px] tracking-[0.45em] uppercase text-[#9c8451] mb-4">
              Handwoven in Maheshwar
            </p>

            <h1 className="font-[var(--font-cinzel)] text-[28px] md:text-[36px] text-[#2a2118] mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="font-[var(--font-cormorant)] text-[26px] text-[#c6a95a] mb-8">
              {product.price}
            </p>

            <p className="font-[var(--font-cormorant)] text-[#3a2f23] leading-[2] text-[17px] max-w-xl mb-10">
              Woven on traditional pit looms in Maheshwar, this textile reflects
              centuries of handloom mastery — refined through patience,
              balance, and restraint.
            </p>

            {/* COLOR */}
            <div className="mb-10">
              <p className="text-[11px] tracking-[0.35em] uppercase mb-3">
                Available Colours
              </p>
              <div className="flex gap-3">
                {colourVariants.map((p: any) => {
                  const c = p.colors?.[0];
                  if (!c) return null;
                  const isCurrent = p.slug === product.slug;

                  return (
                    <button
                      key={p.slug}
                      onClick={() =>
                        !isCurrent && router.push(`/products/${p.slug}`)
                      }
                      className={`w-9 h-9 rounded-full border ${
                        isCurrent ? "ring-2 ring-[#c6a95a]" : ""
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  );
                })}
              </div>
            </div>

            {/* BUY */}
            <div className="space-y-4 max-w-sm">
              <button
                onClick={() =>
                  addToCart({
                    id: product.slug,
                    name: product.name,
                    price: priceNumber,
                    image: images[0],
                    slug: product.slug,
                  })
                }
                className="w-full border border-[#c6a95a] py-4 text-[11px] tracking-[0.4em] uppercase hover:bg-[#c6a95a] hover:text-black transition"
              >
                Add to Cart
              </button>

              <a
                href={`https://wa.me/918770039639?text=${encodeURIComponent(
                  `Hello AADI Handloom,

I am interested in:
${product.name}
Price: ${product.price}`
                )}`}
                target="_blank"
                className="block w-full text-center py-4 bg-[#1e1e1e] text-white text-[11px] tracking-[0.4em] uppercase"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ================= DETAILS ================= */}
        <section className="max-w-5xl mx-auto px-4 md:px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            <Detail title="Fabric" value={product.fabric} />
            <Detail title="Weave" value={product.details?.weave} />
            <Detail title="Length" value={product.details?.length} />
            <Detail title="Origin" value={product.details?.origin} />

            {product.type === "saree" && (
              <Detail title="Blouse Piece" value={product.details?.blouse} />
            )}
          </div>
        </section>

        {/* ================= RELATED ================= */}
        {relatedProducts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 md:px-6 pb-32">
            <h2 className="font-[var(--font-cinzel)] text-2xl mb-10">
              Related Pieces
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p: any) => (
                <Link key={p.slug} href={`/products/${p.slug}`}>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={p.colors?.[0]?.images?.[0]}
                      alt={p.name}
                      fill
                      className="object-cover hover:scale-105 transition"
                    />
                  </div>
                  <p className="mt-3 text-center font-[var(--font-cormorant)]">
                    {p.name}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ZOOM */}
        <AnimatePresence>
          {zoomOpen && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setZoomOpen(false)}
            >
              <Image
                src={images[imageIndex]}
                alt=""
                width={1600}
                height={2200}
                className="max-h-[92vh] object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

/* ===== DETAIL ===== */

function Detail({ title, value }: any) {
  if (!value) return null;
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.35em] text-[#9c8451] mb-2">
        {title}
      </p>
      <p className="font-[var(--font-cormorant)] text-[18px] text-[#2a2118]">
        {value}
      </p>
    </div>
  );
}