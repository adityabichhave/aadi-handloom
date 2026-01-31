"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products } from "../../components/productsData";
import BackFilterBar from "../../components/BackFilterBar";

type SortType = "newest" | "price-asc" | "price-desc";

const ITEMS_PER_PAGE = 12;

export default function ProductsPage() {
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
  const page = Number(searchParams.get("page") || 1);

  /* ================= TITLE OBSERVER ================= */
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

  /* ================= FILTER ================= */
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

  const safePage = Math.min(page, totalPages || 1);
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

  /* ================= UI ================= */

  return (
    <>
      <BackFilterBar
        title={pageTitle}
        showTitle={showSubTitle}
        onFilterClick={() => setShowFilter(true)}
      />

      <main className="relative min-h-screen bg-[#f3ead7]">

        {/* heritage texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "url('/maheshwari-thread.png')",
            backgroundSize: "420px",
          }}
        />

        <div ref={headingRef} className="h-[1px]" />

        {/* ================= HEADER ================= */}
        <div className="pt-24 md:pt-28 pb-8 md:pb-10 text-center px-4">

          <p className="text-[11px] tracking-[0.5em] uppercase text-[#8b7b4b] mb-3">
            Handwoven Collection
          </p>

          <h1 className="text-3xl md:text-4xl font-serif tracking-[0.28em] text-[#bfa25a] mb-4">
            {pageTitle}
          </h1>

          <p className="text-sm text-[#5a5146]">
            Showing {totalProducts === 0 ? 0 : startIndex + 1}–{endIndex} of{" "}
            {totalProducts} pieces
          </p>
        </div>

        {/* ================= GRID ================= */}
        {/* ================= GRID ================= */}
<div className="
  max-w-7xl mx-auto
  px-4 md:px-6
  grid
  grid-cols-2 md:grid-cols-4
  gap-6 md:gap-12
  pb-20 md:pb-28
">
  {visibleProducts.map((product) => {
    const preview = product.colors?.[0]?.images?.[0];

    return (
      <Link
        key={product.slug}
        href={`/products/${product.slug}`}
        className="group"
      >
        <div className="
          relative bg-[#fbf9f4]
          border border-[#d8caa2]/60
          transition-all duration-400
          hover:shadow-[0_18px_40px_rgba(0,0,0,0.18)]
        ">
          {/* IMAGE — mobile tighter ratio */}
          <div className="relative aspect-[3/4] md:aspect-[3/4] overflow-hidden">
            {preview && (
              <Image
                src={preview}
                alt={product.name}
                fill
                className="
                  object-cover
                  transition-transform duration-[1200ms]
                  group-hover:scale-110
                "
              />
            )}

            {/* soft silk overlay */}
            <div className="
              absolute inset-0
              bg-gradient-to-t
              from-black/20 via-transparent to-transparent
              opacity-70
            " />
          </div>

          {/* INFO — compact mobile / rich desktop */}
          <div className="
            px-3 py-4
            md:px-5 md:py-6
            text-center
          ">
            <h3 className="
              font-serif
              text-[14px] md:text-[15px]
              leading-snug
              text-[#2a2118]
              mb-1 md:mb-2
            ">
              {product.name}
            </h3>

            <p className="
              text-[#8c7a45]
              text-sm md:text-[15px]
              font-medium
            ">
              {product.price}
            </p>
          </div>
        </div>
      </Link>
    );
  })}

  {visibleProducts.length === 0 && (
    <p className="col-span-full text-center text-[#6b6253] py-20">
      No products match the selected filters.
    </p>
  )}
</div>


        {/* ================= PAGINATION ================= */}
        {totalPages > 1 && (
          <div className="flex justify-center pb-24">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const p = i + 1;

                return (
                  <Link
                    key={p}
                    href={`/products?type=${type ?? ""}&category=${category ?? ""}&page=${p}`}
                    className={`
                      w-11 h-11 flex items-center justify-center
                      border text-sm transition
                      ${
                        safePage === p
                          ? "bg-[#bfa25a] text-[#1e140b] border-[#bfa25a]"
                          : "border-[#d8caa2] text-[#6b6253] hover:bg-[#efe6d6]"
                      }
                    `}
                  >
                    {p}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {/* ================= FILTER DRAWER ================= */}
      {showFilter && (
  <>
    {/* OVERLAY */}
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      onClick={() => setShowFilter(false)}
    />

    {/* PANEL */}
    <aside
      className="
        fixed right-0 top-14 z-50
        w-[360px] max-w-[92vw]
        h-[calc(100vh-56px)]
        bg-[#f6f1ea]
        border-l border-[#d8caa2]/60
        p-8 overflow-y-auto
        shadow-[0_0_40px_rgba(0,0,0,0.25)]
        flex flex-col
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-serif text-lg tracking-[0.25em] text-[#bfa25a]">
          Refine Selection
        </h3>

        <button
          onClick={() => setShowFilter(false)}
          className="text-xl text-[#2a2118]"
        >
          ×
        </button>
      </div>

      {/* SCROLL BODY */}
      <div className="space-y-8 flex-1">

        {/* PRICE */}
        <FilterBlock
          title="Price"
          options={[
            ["under-7000", "Under ₹7,000"],
            ["7000-9000", "₹7,000 – ₹9,000"],
            ["above-9000", "Above ₹9,000"],
          ]}
          state={filters.price}
          set={(v) => setFilters((p) => ({ ...p, price: v }))}
        />

        {/* TYPE */}
        <FilterBlock
          title="Product Type"
          options={[
            ["saree", "Sarees"],
            ["suit", "Suits"],
            ["dupatta", "Dupattas"],
          ]}
          state={filters.type}
          set={(v) => setFilters((p) => ({ ...p, type: v }))}
        />



        {/* SORT */}
        <div>
          <p className="text-xs uppercase tracking-[0.35em] mb-3 text-[#2a2118]">
            Sort By
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="
              w-full border border-[#bfa25a]/50
              bg-white px-4 py-3 text-sm
            "
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price — Low to High</option>
            <option value="price-desc">Price — High to Low</option>
          </select>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="pt-8 space-y-3">

        <button
          onClick={() => setShowFilter(false)}
          className="
            w-full py-3
            bg-[#bfa25a]
            text-black
            text-xs tracking-[0.35em] uppercase
          "
        >
          Apply Filters
        </button>

        <button
          onClick={() =>
            setFilters({ price: [], fabric: [], type: [] })
          }
          className="
            w-full py-3
            border border-[#bfa25a]
            text-xs tracking-[0.35em] uppercase
          "
        >
          Clear Filters
        </button>
      </div>
    </aside>
  </>
)}
    </>);

/* ================= FILTER BLOCK ================= */

function FilterBlock({ title, options, state, set }: any) {
  return (
    <div className="mb-8">
      <p className="uppercase tracking-[0.3em] text-xs text-[#8b7b4b] mb-4">
        {title}
      </p>

      {options.map(([id, label]: any) => (
        <label key={id} className="flex items-center gap-3 mb-3 text-sm">
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
          />
          {label}
        </label>
      ))}
    </div>
  );
}
} 
