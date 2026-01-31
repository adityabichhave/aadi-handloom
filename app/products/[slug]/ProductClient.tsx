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
        <h1 className="font-serif text-xl">Product not found</h1>
      </main>
    );
  }

  /* ================= STATE ================= */

  const [imageIndex, setImageIndex] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 50, y: 50 });
  const [showLens, setShowLens] = useState(false);

  const images: string[] = product?.colors?.[0]?.images ?? [];
  const priceNumber = parseInt(product?.price?.replace(/\D/g, "") || "0");
const TYPE_CONTENT: Record<string, any> = {
  saree: {
    performance: [
      "Weight: Lightweight festive silk-cotton blend",
      "Transparency: Semi-sheer body with zari border",
      "Season: All-season breathable",
      "Fall: Structured saree drape",
    ],
    styling: [
      "Pair with temple or heritage jewelry",
      "Works with contrast or zari blouse",
      "Ideal for weddings & ceremonies",
    ],
    trust: ["Handloom Verified", "Maheshwar Origin", "Artisan Woven", "No Powerloom"],
  },

  suit: {
    performance: [
      "Weight: Medium festive fabric set",
      "Comfort: Breathable day-long wear",
      "Season: Festive & occasion wear",
      "Fall: Structured kurta fall",
    ],
    styling: [
      "Style with minimal gold jewelry",
      "Perfect for festive gatherings",
      "Works with both flats & heels",
    ],
    trust: ["Handloom Fabric", "Artisan Finished", "Maheshwari Textile"],
  },

  dupatta: {
    performance: [
      "Weight: Lightweight drape textile",
      "Transparency: Semi-sheer",
      "Season: All-season layering",
      "Flow: Soft flowing fall",
    ],
    styling: [
      "Pairs with plain silk or cotton suits",
      "Use as statement contrast drape",
      "Suitable for festive layering",
    ],
    trust: ["Handloom Dupatta", "Maheshwar Weave", "Artisan Made"],
  },
};

  /* ================= SCROLL LOCK ================= */

  useEffect(() => {
    document.body.style.overflow = zoomOpen ? "hidden" : "";
  }, [zoomOpen]);

  /* ================= TITLE VISIBILITY ================= */

  const titleRef = useRef<HTMLDivElement>(null);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    if (!titleRef.current) return;
    const obs = new IntersectionObserver(([e]) =>
      setShowTitle(!e.isIntersecting)
    );
    obs.observe(titleRef.current);
    return () => obs.disconnect();
  }, []);

  /* ================= NAV ================= */

  const next = () =>
    images.length > 1 && setImageIndex((i) => (i + 1) % images.length);

  const prev = () =>
    images.length > 1 &&
    setImageIndex((i) => (i - 1 + images.length) % images.length);

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
      .filter(
        (p: any) =>
          p.slug !== product.slug &&
          p.type === product.type
      )
      .slice(0, 4);
  }, [product]);

  const sku = product?.slug
    ? `AH-${product.type}-${product.slug.slice(0, 6)}`
    : "";
const typeKey = (product.type || "").toLowerCase();
const typeData = TYPE_CONTENT[typeKey] || TYPE_CONTENT.saree;

  /* ================= RENDER ================= */

  return (
    <>
      <BackFilterBar title={product.name} showTitle={showTitle} />

      <main className="pt-[96px] md:pt-[104px] pb-[200px] bg-[#f2e8cf]">
        <div ref={titleRef} className="h-[1px]" />

        {/* ================= GRID ================= */}

        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* ========= GALLERY ========= */}

          <div>
            <div
              className="relative aspect-[3/4] border border-[#bfa25a]/50 bg-[#e9e2d6] overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setShowLens(true)}
              onMouseLeave={() => setShowLens(false)}
              onClick={() => setZoomOpen(true)}
            >
              {images.length > 0 && (
                <Image
                  src={images[imageIndex]}
                  alt={`${product.name} authentic Maheshwari handloom saree`}
                  fill
                  className="object-cover"
                  priority
                />
              )}

              {/* DESKTOP MAGNIFIER */}
              {showLens && (
                <div
                  className="hidden md:block absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `url(${images[imageIndex]})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "600%",
                    backgroundPosition: `${lensPos.x}% ${lensPos.y}%`,
                  }}
                />
              )}

              {images.length > 1 && (
                <>
                  <button onClick={prev} className="navBtn left-2">‹</button>
                  <button onClick={next} className="navBtn right-2">›</button>
                </>
              )}
            </div>

            {/* thumbs */}
            <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
              {images.map((img: string, i: number) => (
                <button key={i} onClick={() => setImageIndex(i)}
                  className={`relative w-14 h-20 shrink-0 border ${
                    i === imageIndex ? "border-[#bfa25a]" : "border-[#bfa25a]/30"
                  }`}>
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* ========= INFO ========= */}

          <div className="pb-6">

            {/* TAG STRIP */}
            <div className="flex flex-wrap gap-2 mb-3 text-[10px] uppercase tracking-widest">
              {product.fabric && <span className="border px-2 py-1">{product.fabric}</span>}
              {product.category && <span className="border px-2 py-1">{product.category}</span>}
              {sku && <span className="border px-2 py-1">SKU {sku}</span>}
            </div>

            <h1 className="font-serif text-2xl md:text-3xl mb-3">
              {product.name}
            </h1>

            <p className="text-xl md:text-2xl text-[#bfa25a] mb-4">
              {product.price}
            </p>

            {/* AUTHENTICITY BADGE STRIP */}
            <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-widest mb-6">
              {["Handloom Verified","Maheshwar Origin","Artisan Made","No Powerloom"]
                .map(t => (
                  <span key={t} className="border px-3 py-1 bg-[#fdfbf7]">{t}</span>
              ))}
            </div>

            {/* COLOR SWITCH */}
            <div className="mb-6">
              <p className="text-xs uppercase mb-2 tracking-widest">Colour</p>
              <div className="flex gap-3 flex-wrap">
                {colourVariants.map((p: any) => {
                  const c = p.colors?.[0];
                  if (!c) return null;
                  const isCurrent = p.slug === product.slug;

                  return (
                    <button key={p.slug}
                      onClick={() => !isCurrent && router.push(`/products/${p.slug}`)}
                      className={`w-9 h-9 rounded-full border ${
                        isCurrent ? "ring-2 ring-[#bfa25a]" : ""
                      }`}
                      style={{ backgroundColor: c.hex }}
                    />
                  );
                })}
              </div>
            </div>

            {/* TECHNICAL FABRIC PANEL */}
            <Section title="Fabric Performance">
  <ul className="space-y-2">
    {typeData.performance.map((t: string) => (
      <li key={t}>• {t}</li>
    ))}
  </ul>
</Section>


            {/* STYLING GUIDANCE */}
            <Section title="How To Style">
  <ul className="space-y-2">
    {typeData.styling.map((t: string) => (
      <li key={t}>• {t}</li>
    ))}
  </ul>
</Section>
<div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-widest mb-6">
  {typeData.trust.map((t: string) => (
    <span key={t} className="border px-3 py-1 bg-[#fdfbf7]">{t}</span>
  ))}
</div>


            {/* SPECS */}
            <Tabs product={product} />

            {/* LOOM JOURNEY */}
            <Section title="Loom to Wardrobe">
              Yarn Selection → Handloom Weaving → Border Finishing → Quality Check → Dispatch
            </Section>

            {/* BUY */}
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
              className="mt-8 w-full buyBtn"
            >
              Add to Cart
            </button>

            <a
              href={`https://wa.me/918770039639?text=${encodeURIComponent(
`Hello AADI Handloom,

I want details about:
${product.name}

Slug: ${product.slug}
Price: ${product.price}`
              )}`}
              target="_blank"
              className="whatsappBtn"
            >
              Enquire on WhatsApp
            </a>

          </div>
        </div>

        {/* RELATED */}
        {relatedProducts.length > 0 && (
          <RelatedGrid relatedProducts={relatedProducts} />
        )}

        {/* MOBILE ZOOM */}
        <AnimatePresence>
          {zoomOpen && images.length > 0 && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setZoomOpen(false)}
            >
              <Image
                src={images[imageIndex]}
                alt=""
                width={1600}
                height={2200}
                className="max-h-[92vh] w-auto object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <style jsx global>{`
        .navBtn{position:absolute;top:50%;transform:translateY(-50%);
        background:#0008;color:#fff;width:34px;height:34px;border-radius:999px}
        .buyBtn{border:1px solid #bfa25a;padding:16px;text-transform:uppercase}
        .buyBtn:hover{background:#bfa25a;color:#000}
        .whatsappBtn{display:block;margin-top:12px;background:#25D366;color:#fff;
        padding:16px;text-align:center;text-transform:uppercase}
      `}</style>
    </>
  );
}

/* ===== HELPERS ===== */

function Section({ title, children }: any) {
  return (
    <div className="mt-8 border border-[#bfa25a]/30 bg-[#fdfbf7] p-6 text-sm">
      <h3 className="font-serif text-lg mb-3">{title}</h3>
      {children}
    </div>
  );
}

function Tabs({ product }: any) {
  return (
    <div className="mt-8 space-y-2 text-sm">
      <SpecRow label="Fabric" value={product.fabric} />
      <SpecRow label="Weave" value={product.details?.weave} />
      <SpecRow label="Length" value={product.details?.length} />

      {product.type === "saree" && (
        <SpecRow label="Blouse Piece" value={product.details?.blouse} />
      )}

      {product.type === "suit" && (
        <SpecRow label="Set Type" value="Top + Dupatta" />
      )}

      <SpecRow label="Origin" value={product.details?.origin} />
    </div>
  );
}


function RelatedGrid({ relatedProducts }: any) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 mt-20">
      <h2 className="text-lg font-serif mb-6">Related Pieces</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {relatedProducts.map((p: any) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="group border">
            <div className="relative aspect-[3/4]">
              <Image src={p.colors?.[0]?.images?.[0]} alt={p.name} fill className="object-cover"/>
            </div>
            <div className="p-3 text-center">
              <p className="font-serif text-sm">{p.name}</p>
              <p className="text-xs text-[#bfa25a]">{p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SpecRow({ label, value }: any) {
  if (!value) return null;
  return (
    <div className="flex justify-between border-b py-2">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
