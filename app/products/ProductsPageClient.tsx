"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products } from "@/components/productsData";
import { motion } from "framer-motion";

import BackFilterBar from "../../components/BackFilterBar";

type SortType = "newest" | "price-asc" | "price-desc";
const ITEMS_PER_PAGE = 12;

export default function ProductsPageClient() {
  const searchParams = useSearchParams();

  const rawType = searchParams.get("type");
  const type =
    rawType === "sarees"
      ? "saree"
      : rawType === "suits"
      ? "suit"
      : rawType === "dupattas"
      ? "dupatta"
      : rawType;

  const category = searchParams.get("category");
  let pageParam = searchParams.get("page");
  const page = pageParam ? Number(pageParam) : 1;

  /* ================= TITLE OBSERVER ================= */
  const headingRef = useRef<HTMLDivElement | null>(null);
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

  /* ================= FILTER STATE ================= */
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    price: [] as string[],
    fabric: [] as string[],
    type: [] as string[],
  });

  const [sortBy, setSortBy] = useState<SortType>("newest");

  /* ================= RESET PAGE ================= */
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "1");
    window.history.replaceState(null, "", `/products?${params.toString()}`);
  }, [type, category, filters, sortBy]);

  /* ================= FILTER LOGIC ================= */
  const filteredProducts = products
    .filter((product) => {
      if (type && product.type !== type) return false;

      if (filters.type.length > 0 && !filters.type.includes(product.type))
        return false;

      if (
        category &&
        product.category.toLowerCase() !== category.toLowerCase()
      )
        return false;

      if (filters.price.length > 0) {
        const price = Number(product.price.replace(/[^\d]/g, ""));
        const match = filters.price.some((r) => {
          if (r === "under-7000") return price < 7000;
          if (r === "7000-9000") return price >= 7000 && price <= 9000;
          if (r === "above-9000") return price > 9000;
          return true;
        });
        if (!match) return false;
      }

      if (filters.fabric.length > 0) {
        const fabric = product.fabric.toLowerCase();
        if (!filters.fabric.some((f) => fabric.includes(f.toLowerCase())))
          return false;
      }

      return true;
    })
    .sort((a, b) => {
      const pa = Number(a.price.replace(/[^\d]/g, ""));
      const pb = Number(b.price.replace(/[^\d]/g, ""));
      if (sortBy === "price-asc") return pa - pb;
      if (sortBy === "price-desc") return pb - pa;
      return 0;
    });

  /* ================= PAGINATION ================= */
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE);

  const safePage = Math.max(1, Math.min(page, totalPages || 1));

  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalProducts);

  const visibleProducts = filteredProducts.slice(startIndex, endIndex);

  const typeLabel =
    type === "saree"
      ? "Sarees"
      : type === "suit"
      ? "Suits"
      : type === "dupatta"
      ? "Dupattas"
      : "Products";

  const pageTitle = category
    ? `${category} ${typeLabel}`
    : type
    ? `All ${typeLabel}`
    : "All Products";

  return (
    <>
      <BackFilterBar
        title={pageTitle}
        showTitle={showSubTitle}
        onFilterClick={() => setShowFilter(true)}
      />

      <main className="relative min-h-screen pt-12 mt-[-250px] bg-[#f3ead7] overflow-hidden">
        {/* heritage texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
        />

        <div ref={headingRef} className="h-[1px]" />

        {/* HEADER */}
        <header className="pt-36 md:pt-44 pb-16 text-center px-4 relative">
          <p className="text-[11px] tracking-[0.65em] uppercase text-[#8b7b4b] mb-6">
            Handwoven Collection
          </p>

          <h1 className="text-[34px] md:text-[48px] font-serif tracking-[0.18em] text-[#bfa25a] mb-6 leading-[1.2]">
            {pageTitle}
          </h1>

          <div className="w-16 h-[1px] bg-[#c9b37a] mx-auto mb-6 opacity-60" />

          <p className="text-sm text-[#5a5146]">
            Showing {totalProducts === 0 ? 0 : startIndex + 1}–{endIndex} of{" "}
            {totalProducts} pieces
          </p>
        </header>

        {/* ================= PRODUCT GRID ================= */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 pb-28 md:pb-32">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-16">
            {visibleProducts.map((product) => {
              const mainImg = product.colors?.[0]?.images?.[0];
              const hoverImg =
                product.colors?.[0]?.images?.[1] ||
                product.colors?.[1]?.images?.[0] ||
                mainImg;

              return (
                <li key={product.slug} className="list-none">
                  <Link href={`/products/${product.slug}`} className="block group">
                    <article className="bg-[#fbf9f4] border border-[#d8caa2]/60 transition-all duration-700 hover:shadow-[0_40px_90px_rgba(0,0,0,0.22)]">

                      {/* ===== IMAGE AREA ===== */}
                      <div className="relative aspect-[3/4] overflow-hidden">

                        {/* main image */}
                        {mainImg && (
                          <Image
                            src={mainImg}
                            alt={product.name}
                            fill
                            className="object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                          />
                        )}

                        {/* pallu reveal image */}
                        {hoverImg && (
                          <Image
                            src={hoverImg}
                            alt="Pallu view"
                            fill
                            className="object-cover opacity-0 scale-110 transition-all duration-[1600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100 group-hover:scale-100"
                          />
                        )}


                        {/* luxury shadow bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent opacity-70" />
                      </div>

                      {/* ===== INFO ===== */}
                      <div className="px-4 py-6 md:px-6 md:py-7 text-center">
                        <h3 className="font-serif text-[15px] md:text-[16px] text-[#2a2118] mb-2 tracking-[0.02em]">
                          {product.name}
                        </h3>

                        <p className="text-[#8c7a45] text-sm tracking-[0.1em] font-medium">
                          {product.price}
                        </p>
                      </div>

                      {/* schema */}
                      <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                          __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Product",
                            name: product.name,
                            image: mainImg
                              ? [`https://aadihandloom.com${mainImg}`]
                              : [],
                            brand: { "@type": "Brand", name: "AADI Handloom" },
                            offers: {
                              "@type": "Offer",
                              priceCurrency: "INR",
                              price: product.price.replace(/[^\d]/g, ""),
                              availability: "https://schema.org/InStock",
                              url: `https://aadihandloom.com/products/${product.slug}`,
                            },
                          }),
                        }}
                      />
                    </article>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <nav className="flex justify-center pb-32">
            <div className="flex gap-3">
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;
                return (
                  <Link
                    key={p}
                    href={`/products?type=${type ?? ""}&category=${category ?? ""}&page=${p}`}
                    className={`w-12 h-12 flex items-center justify-center border text-sm transition-all duration-500 ${
                      safePage === p
                        ? "bg-[#bfa25a] text-black border-[#bfa25a] shadow-md"
                        : "border-[#d8caa2] text-[#6b6253] hover:bg-[#efe6d6]"
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </main>

      {/* FILTER DRAWER */}
      {showFilter && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setShowFilter(false)}
          />

          <aside className="fixed right-0 top-14 z-50 w-[380px] max-w-[92vw] h-[calc(100vh-56px)] bg-[#f6f1ea] border-l border-[#d8caa2]/60 p-10 overflow-y-auto">
            <h3 className="font-serif text-lg tracking-[0.35em] text-[#bfa25a] mb-10">
              Refine Selection
            </h3>

            <FilterBlock
              title="Price"
              options={[
                ["under-7000", "Under ₹7,000"],
                ["7000-9000", "₹7,000 – ₹9,000"],
                ["above-9000", "Above ₹9,000"],
              ]}
              state={filters.price}
              set={(v: any) => setFilters((p) => ({ ...p, price: v }))}
            />

            <FilterBlock
              title="Product Type"
              options={[
                ["saree", "Sarees"],
                ["suit", "Suits"],
                ["dupatta", "Dupattas"],
              ]}
              state={filters.type}
              set={(v: any) => setFilters((p) => ({ ...p, type: v }))}
            />

            <button
              onClick={() => setFilters({ price: [], fabric: [], type: [] })}
              className="w-full mt-10 py-4 border border-[#bfa25a] text-xs tracking-[0.4em] uppercase hover:bg-[#bfa25a] hover:text-black transition-all duration-500"
            >
              Clear Filters
            </button>
          </aside>
        </>
      )}
    </>
  );
}

/* ================= FILTER BLOCK ================= */

function FilterBlock({ title, options, state, set }: any) {
  return (
    <div className="mb-10">
      <p className="uppercase tracking-[0.35em] text-xs text-[#8b7b4b] mb-5">
        {title}
      </p>

      {options.map(([id, label]: any) => (
        <label
          key={id}
          className="flex items-center gap-3 mb-4 text-sm text-[#2a2118] cursor-pointer"
        >
          <input
            type="checkbox"
            checked={state.includes(id)}
            onChange={(e) =>
              set(
                e.target.checked
                  ? [...state, id]
                  : state.filter((x: any) => x !== id)
              )
            }
            className="accent-[#bfa25a]"
          />
          {label}
        </label>
      ))}
    </div>
  );
}