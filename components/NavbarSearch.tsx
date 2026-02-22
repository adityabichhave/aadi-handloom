"use client";

import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { products } from "@/components/productsData";

export default function NavbarSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // filter products
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = products.filter((p: any) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered.slice(0, 6));
  }, [query]);

  return (
    <div className="relative" ref={wrapperRef}>
      {/* ICON */}
      <button
        aria-label="Search products"
        onClick={() => setOpen(!open)}
        className="hover:text-[#b8965a] transition"
      >
        <Search size={20} />
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute left-[-65px] mt-4 w-[360px] md:left-1/2 md:-translate-x-1/2 md:w-[500px] bg-[#f3ead9] border border-[#eadfce] shadow-xl rounded-xl z-50">
          {/* INPUT */}
          <div className="p-4 border-b border-[#e8dccb]">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sarees, suits, dupattas..."
              className="w-full bg-white border border-[#e6d8c7] px-4 py-2 outline-none text-[14px]"
            />
          </div>

          {/* RESULTS */}
          <div className="max-h-[320px] overflow-y-auto">
            {results.length > 0 ? (
              results.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex gap-3 items-center px-4 py-3 hover:bg-[#efe4d6] transition"
                >
                  <img
                    src={product.colors?.[0]?.images?.[0]}
                    className="w-12 h-16 object-cover rounded"
                  />

                  <div>
                    <p className="text-[13px] text-[#2a2118] leading-tight">
                      {product.name}
                    </p>
                    <p className="text-[12px] text-[#b8965a]">
                      {product.price}
                    </p>
                  </div>
                </Link>
              ))
            ) : query !== "" ? (
              <p className="p-4 text-sm text-gray-500">No products found</p>
            ) : (
              <p className="p-4 text-xs text-[#a07c4a]">
                Start typing to search Maheshwari collection
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}