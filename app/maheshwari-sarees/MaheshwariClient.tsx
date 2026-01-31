"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "../../components/productsData";
import BackFilterBar from "../../components/BackFilterBar";

/* ---------------- TYPES ---------------- */

type SortType = "newest" | "price-asc" | "price-desc";

type MaheshwariClientProps = {
  customTitle?: string;
  customIntro?: string;
  forcedFabric?: string;
};

const ITEMS_PER_PAGE = 12;

/* ================= CLIENT ================= */

export default function MaheshwariClient({
  customTitle,
  customIntro,
  forcedFabric,
}: MaheshwariClientProps) {
  /* ---------- SCROLL TITLE ---------- */
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [showSubTitle, setShowSubTitle] = useState(false);

  useEffect(() => {
    if (!headingRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowSubTitle(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------- FILTER STATE ---------- */
  const [showFilter, setShowFilter] = useState(false);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortType>("newest");

  const [filters, setFilters] = useState({
    price: [] as string[],
    fabric: [] as string[],
  });

  /* ---------- FILTER LOGIC ---------- */
  const filteredProducts = [...products]
    .filter((product) => {
      // Force Maheshwari sarees
      if (product.type !== "saree") return false;
      if (product.category !== "Maheshwari") return false;

      // Force fabric (for silk pages)
      if (forcedFabric && product.fabric !== forcedFabric) return false;

      // Price filter
      if (filters.price.length > 0) {
        const price = Number(product.price.replace(/[₹,]/g, ""));
        const match = filters.price.some((r) => {
          if (r === "under-7000") return price < 7000;
          if (r === "7000-9000") return price >= 7000 && price <= 9000;
          if (r === "above-9000") return price > 9000;
          return true;
        });
        if (!match) return false;
      }

      // Fabric filter (user-selected)
      if (filters.fabric.length > 0) {
        if (!filters.fabric.includes(product.fabric)) return false;
      }

      return true;
    })
    .sort((a, b) => {
      const pa = Number(a.price.replace(/[₹,]/g, ""));
      const pb = Number(b.price.replace(/[₹,]/g, ""));
      if (sortBy === "price-asc") return pa - pb;
      if (sortBy === "price-desc") return pb - pa;
      return 0;
    });

  /* ---------- PAGINATION ---------- */
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalProducts);
  const visibleProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <>
      <BackFilterBar
        title={customTitle ?? "Maheshwari Sarees"}
        showTitle={showSubTitle}
        onFilterClick={() => setShowFilter(true)}
      />

      <main className="pt-[80px] pb-[140px] bg-[#f4efe8]">
        <div ref={headingRef} className="h-[1px]" />

        <h1 className="text-center text-[#bfa25a] text-3xl tracking-widest font-serif mb-6 uppercase">
          {customTitle ?? "Maheshwari Sarees"}
        </h1>

        <p className="max-w-3xl mx-auto text-center text-sm mb-14 text-[#2a2118]/70">
          {customIntro ??
            "Maheshwari sarees are a distinguished handloom tradition originating from Maheshwar, Madhya Pradesh, known for their lightweight texture and architectural motifs."}
        </p>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {visibleProducts.map((product) => {
            const preview =
              product.colors?.[0]?.images?.[0] ??
              (product as any).images?.[0];

            return (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="border border-[#bfa25a]/40 bg-[#fdfbf7]"
              >
                <div className="relative aspect-[3/4]">
                  {preview && (
                    <Image
                      src={preview}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-sm">{product.name}</h3>
                  <p className="text-[#bfa25a] text-sm">{product.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}
