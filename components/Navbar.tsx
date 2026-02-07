"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartContext";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Heritage", href: "/heritage" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/FAQ" },
  ({ name: "Blog", href: "/blog" }),
];

export default function Navbar() {
  const { cart, openCart } = useCart();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full h-14 z-50">

        {/* heritage layered background */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#2a1d10,#1a1209)]" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,rgba(191,162,90,0.25),transparent_65%)]" />

        {/* silk gold divider */}
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c2a45d]/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">

          {/* ===== LOGO ===== */}
          <Link href="/" className="flex items-center gap-3 group">
            <video
              src="/logo-loop.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-9 drop-shadow-[0_0_10px_rgba(191,162,90,0.35)]"
            />

            <div className="leading-tight">
              <div className="text-[#d6b874] tracking-[0.32em] text-[18px] font-serif group-hover:text-[#f0d48f] transition">
                AADI
              </div>
              <div className="text-[#e8dcc4]/70 text-[10px] tracking-[0.35em] uppercase">
                Handloom
              </div>
            </div>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group"
                >
                  <span
                    className={`
                      text-[12px]
                      uppercase
                      tracking-[0.28em]
                      transition
                      ${
                        active
                          ? "text-[#e7c67a]"
                          : "text-[#e8dcc4]/75 group-hover:text-[#f0e6d2]"
                      }
                    `}
                  >
                    {item.name}
                  </span>

                  {/* silk underline */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-[1px]
                      bg-gradient-to-r from-transparent via-[#d6b874] to-transparent
                      transition-all duration-400
                      ${
                        active
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }
                    `}
                  />
                </Link>
              );
            })}
          </div>

          {/* ===== ACTIONS ===== */}
          <div className="flex items-center gap-3">

            {/* CART — compact luxury */}
            <button
              onClick={openCart}
              className="
                relative w-9 h-9
                border border-[#c2a45d]/50
                bg-[#2a1d10]/70
                text-[#d6b874]
                flex items-center justify-center
                hover:bg-[#3a2816]
                transition
              "
            >
              🛒

              {cart.length > 0 && (
                <span className="
                  absolute -top-1 -right-1
                  min-w-[16px] h-[16px]
                  rounded-full
                  bg-[#d6b874]
                  text-[#1e140b]
                  text-[9px]
                  flex items-center justify-center
                  font-semibold
                ">
                  {cart.length}
                </span>
              )}
            </button>

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1 group"
            >
              <span className="w-6 h-[1.5px] bg-[#e8dcc4] group-hover:bg-[#d6b874]" />
              <span className="w-5 h-[1.5px] bg-[#e8dcc4] group-hover:bg-[#d6b874]" />
              <span className="w-6 h-[1.5px] bg-[#e8dcc4] group-hover:bg-[#d6b874]" />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`
          fixed inset-0 z-40
          transition-opacity duration-400
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/60"
        />

        {/* drawer */}
        <div
          className={`
            absolute top-0 right-0 h-full w-[75%] max-w-sm
            bg-[#1e140b]
            border-l border-[#c2a45d]/30
            p-8 pt-20 space-y-7
            transition-transform duration-400
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  block text-[13px]
                  uppercase tracking-[0.35em]
                  ${
                    active
                      ? "text-[#d6b874]"
                      : "text-[#e8dcc4]/85 hover:text-[#f0e6d2]"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
