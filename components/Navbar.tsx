"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cart, openCart } = useCart();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  const mainNav = [
    { name: "Home", href: "/" },
    {
      name: "Shop",
      dropdown: [
        { name: "Maheshwari Sarees", href: "/products?type=saree" },
        { name: "Maheshwari Suits", href: "/products?type=suit" },
        { name: "Dupattas", href: "/products?type=dupatta" },
        { name: "View All Products", href: "/products" },
      ],
    },
    { name: "Heritage", href: "/heritage" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#1a1209] border-b border-[#c2a45d]/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/aadi-handloom-logo.png" className="w-9" alt="Aadi Handloom" />
            <div className="flex flex-col leading-none">

  {/* AADI = main brand */}
  <span 
    className="text-[#d6b874] text-[28px] tracking-[0.35em]"
    style={{ fontFamily: "Cinzel, serif" }}
  >
    AADI
  </span>

  {/* HANDLOOM = royal signature */}
  <span 
    className="text-[#e8dcc4] text-[20px] -mt-0.8"
    style={{ fontFamily: "Great Vibes, cursive" }}
  >
    Handloom
  </span>

</div>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-10">

            {mainNav.map((item) => {

              /* ===== SHOP DROPDOWN ===== */
              if (item.dropdown) {
                return (
                  <div key={item.name} className="relative group">

                    {/* SHOP TEXT */}
                    <span className="flex items-center gap-1 cursor-pointer text-[13px] tracking-[0.25em] uppercase text-[#e8dcc4]/80 hover:text-[#f0d48f] transition">

                      {item.name}

                      {/* ARROW */}
                      <svg
                        className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                      </svg>
                    </span>

                    {/* invisible hover bridge */}
                    <div className="absolute top-full left-0 h-4 w-full"/>

                    {/* DROPDOWN */}
                    <div className="
                      absolute left-0 top-full mt-2
                      w-64
                      bg-[#1e140b]
                      border border-[#c2a45d]/30
                      shadow-[0_20px_60px_rgba(0,0,0,0.55)]
                      py-4
                      opacity-0 invisible translate-y-3
                      transition-all duration-300
                      group-hover:opacity-100
                      group-hover:visible
                      group-hover:translate-y-0
                      z-50
                    ">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-6 py-3 text-[15px] text-[#e8dcc4]/85 hover:text-[#f0d48f] hover:bg-[#2a1d10] transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[13px] tracking-[0.25em] uppercase transition ${
                    active
                      ? "text-[#f0d48f]"
                      : "text-[#e8dcc4]/80 hover:text-[#f0d48f]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-3">

            {/* CART */}
            <button
              onClick={openCart}
              className="relative border border-[#c2a45d]/50 w-9 h-9 flex items-center justify-center text-[#d6b874] hover:bg-[#2a1d10] transition"
            >
              🛒
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#d6b874] text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>

            {/* MOBILE MENU BTN */}
            <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1">
              <span className="w-6 h-[2px] bg-[#e8dcc4]" />
              <span className="w-5 h-[2px] bg-[#e8dcc4]" />
              <span className="w-6 h-[2px] bg-[#e8dcc4]" />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <div className={`fixed inset-0 z-40 ${open ? "block" : "hidden"}`}>
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />

        <div className="absolute right-0 top-0 h-full w-[78%] bg-[#1e140b] p-8 pt-20 space-y-7 shadow-2xl">

          {mainNav.map((item) => (
            <div key={item.name}>

              {/* SHOP MOBILE DROPDOWN */}
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setShopOpen(!shopOpen)}
                    className="flex items-center justify-between w-full text-[#d6b874] uppercase tracking-[0.35em]"
                  >
                    {item.name}

                    <svg
                      className={`w-4 h-4 transition ${shopOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </button>

                  {shopOpen && (
                    <div className="pl-3 mt-4 space-y-3">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className="block text-[#e8dcc4]/85"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-[#e8dcc4] uppercase tracking-[0.35em]"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

        </div>
      </div>
    </>
  );
}