"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X,ChevronLeft, ChevronRight    } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import NavbarSearch from "@/components/NavbarSearch";

export default function LuxuryNavbar() {
  const [open, setOpen] = useState(false);
  const [mobileCat, setMobileCat] = useState(false);
    const messages = [
    "Welcome to AADI Handloom",
    "Pure Maheshwari Silk & Cotton Sarees from Maheshwar",
    "New Luxury Collection Now Available",
    "Free Shipping Across India",
    "Wholesale & Bulk Orders Available",
    "Premium Handwoven Sarees & Suits"
  ];

    const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % messages.length);
      setFade(true);
    }, 200);
  };
  const nextMsg = () => {
  setIndex((prev) => (prev + 1) % messages.length);
};

const prevMsg = () => {
  setIndex((prev) => (prev - 1 + messages.length) % messages.length);
};

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) =>
        prev === 0 ? messages.length - 1 : prev - 1
      );
      setFade(true);
    }, 200);
  };
    useEffect(() => {
    const interval = setInterval(() => {
      nextMsg();
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (

    
    <header className="w-full bg-[#f3ead9] text-[#3a2d1f] py-7 relative z-50">


<div className="relative flex items-center justify-center h-[36px] md:h-[40px] border-b-2 border-[#e8dcc6] mb-2">

  {/* LEFT ARROW */}
  <button
    onClick={prev}
    className="absolute left-[42px] md:left-[420px] top-[5px] -translate-y-1/2
               opacity-70 hover:opacity-100 transition"
  >
    <ChevronLeft size={16} />
  </button>

  {/* MESSAGE */}
  <p
    className={`text-center text-[13px] md:text-[14px] mt-[-25px] tracking-wide transition-opacity duration-500 ${
      fade ? "opacity-100" : "opacity-0"
    }`}
  >
    {messages[index]}
  </p>

  {/* RIGHT ARROW */}
  <button
    onClick={next}
    className="absolute right-[42px] md:right-[420px] top-[5px] -translate-y-1/2
               opacity-70 hover:opacity-100 transition"
  >
    <ChevronRight size={16} />
  </button>

</div>
        <div className="hidden md:flex absolute left-[300px] top-[42px] -translate-x-1/2 -translate-y-1/2 gap-5 text-[22px]">

          <a href="https://instagram.com/aadihandloom" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/Shailendra.bichhave81" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.youtube.com/@aadihandloom" target="_blank">
          <FaYoutube />
        </a>
        <a href="https://wa.me/918770039639">
          <FaWhatsapp />
        </a>
        
        </div>


      {/* ===== LOGO ROW (TIGHT FITTED) ===== */}
      <div className="relative flex items-center justify-center py-[2px]">

        {/* LEFT */}
        <div className="absolute left-4 md:left-[300px] flex items-center gap-7">
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu size={21} />
          </button>
          <NavbarSearch />
        </div>

        {/* LOGO */}
        <Link href="/" className="flex justify-center items-center -mb-9 md:-mb-8 -mt-2 md:-mt-5">
  <Image
    src="/aadi-handloom-logo.png"
    alt="AADI Handloom"
    width={180}
    height={80}
    className="h-[200px] w-auto object-contain"
  />
</Link>

        {/* RIGHT */}
        <div className="absolute right-6 md:right-[300px] flex gap-5 items-center">
          <Link href="/cart">
            <ShoppingBag size={20} className="cursor-pointer"/>
          </Link>
        </div>
      </div>

      {/* ===== DESKTOP MENU (VERY CLOSE TO LOGO) ===== */}
      <nav className="hidden md:flex justify-center gap-8 pt-[4px] pb-[6px] text-[12.5px] tracking-[0.28em] uppercase border-b border-[#e8dcc6]">

        <Link href="/" className="relative group">
          Home
          <span className="absolute left-1/2 -bottom-2 h-[1px] w-0 bg-[#3a2d1f] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
        </Link>

        {/* Categories */}
        <div className="relative group cursor-pointer">
          <span className="flex items-center gap-1 relative">
            Categories
            <span className="text-[10px]">▾</span>
            <span className="absolute left-1/2 -bottom-2 h-[1px] w-0 bg-[#3a2d1f] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </span>

          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[240px]
          bg-[#f6efe6] shadow-xl border border-[#e6dccb]
          opacity-0 translate-y-6 invisible
          group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible
          transition-all duration-500">

            <div className="flex flex-col text-[12px] tracking-widest uppercase py-3">
              <Link href="/products?type=saree" className="px-7 py-3 hover:bg-[#efe4d1]">Sarees</Link>
              <Link href="/products?type=suit" className="px-7 py-3 hover:bg-[#efe4d1]">Suits</Link>
              <Link href="/products?type=dupatta" className="px-7 py-3 hover:bg-[#efe4d1]">Dupattas</Link>

            </div>
          </div>
        </div>

        {[
          { name: "Collection", href: "/products" },
          { name: "Blogs", href: "/blog" },
          { name: "Heritage", href: "/heritage" },
          { name: "Contact", href: "/contact" },
        ].map((item) => (
          <Link key={item.name} href={item.href} className="relative group">
            {item.name}
            <span className="absolute left-1/2 -bottom-2 h-[1px] w-0 bg-[#3a2d1f] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </Link>
        ))}
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <div className={`fixed top-0 left-0 h-full w-[280px] bg-[#f3ead9] shadow-2xl transition-transform duration-500 z-[60] ${open ? "translate-x-0" : "-translate-x-full"}`}>

        <div className="flex justify-between items-center p-5 border-b">
          <span className="font-semibold">Menu</span>
          <X onClick={() => setOpen(false)} className="cursor-pointer"/>
        </div>

        <div className="flex flex-col p-6 gap-6 uppercase tracking-wider text-[14px]">
          <Link href="/" onClick={()=>setOpen(false)}>Home</Link>

          <div className="flex flex-col">
            <button
              onClick={() => setMobileCat(!mobileCat)}
              className="flex justify-between items-center"
            >
              Categories
              <span className={`transition ${mobileCat ? "rotate-180" : ""}`}>▾</span>
            </button>

            {mobileCat && (
              <div className="flex flex-col mt-4 ml-3 gap-4 text-[13px] normal-case tracking-normal">
                <Link href="/products?type=saree" onClick={()=>setOpen(false)}>Sarees</Link>
                <Link href="/products?type=suit" onClick={()=>setOpen(false)}>Suits</Link>
                <Link href="/products?type=dupatta" onClick={()=>setOpen(false)}>Dupattas</Link>
              </div>
            )}
          </div>

          <Link href="/products" onClick={()=>setOpen(false)}>Collection</Link>
          <Link href="/blog" onClick={()=>setOpen(false)}>Blogs</Link>
          <Link href="/heritage" onClick={()=>setOpen(false)}>Heritage</Link>
          <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={()=>setOpen(false)} />
      )}
    </header>
  );
}
