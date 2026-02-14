"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  /* REVEAL ONLY ON LAST SCROLL */
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const docHeight = document.body.scrollHeight;
      if (scrollY > docHeight * 0.85) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* MAGNETIC CURSOR */
  const magnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const resetMagnetic = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = "translate(0,0)";
  };

  return (
    
    <footer
      ref={footerRef}
      className="relative bg-[#2a2118] text-[#f4efe8]"
    >
      
      <div
        className={`max-w-7xl mx-auto px-6 py-20 transition-all duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}
      `}
      >
        {/* TOP ROW */}
        {/* ===== TOP GRID ===== */}
<div className="
  grid
  grid-cols-1
  md:grid-cols-[1.2fr_1fr_1fr]
  gap-16
  md:gap-20
  items-start
">

{/* ===== LEFT : BRAND ===== */}
<div className="space-y-10">

  {/* LOGO + NAME */}
  <div className="flex items-center gap-6">

    <img 
      src="/aadi-handloom-logo.png"
      alt="AADI Handloom"
      className="w-20 md:w-24 object-contain"
    />

    <div className="leading-tight">

      <div className="
        text-[#d6b874]
        font-serif
        tracking-[0.42em]
        text-[30px] md:text-[38px]
      ">
        AADI
      </div>

      <div
        className="text-[#e8dcc4] text-[22px] md:text-[26px] -mt-1"
        style={{ fontFamily: "Great Vibes, cursive" }}
      >
        Handloom
      </div>

    </div>
  </div>

  {/* TAGLINE */}
  <p className="
    text-[#e8dcc4]/80
    text-[16px]
    leading-[1.9]
    max-w-[420px]
  ">
    Maheshwari handloom shaped by patience, restraint,
    and quiet continuity.
  </p>

  {/* LOCATION */}
  <div className="
    text-[#d6b874]
    tracking-[0.55em]
    uppercase
    text-[12px]
    space-y-2
  ">
    <p>Maheshwar, India</p>
    <p>Since 1990</p>
  </div>

</div>

          {/* ===== CENTER : NAVIGATION ===== */}
<div>

  <p className="
    uppercase
    tracking-[0.45em]
    text-[13px]
    text-[#d6b874]
    mb-8
  ">
    Navigate
  </p>

  <ul className="space-y-5 text-[18px]">
    {[
      { name: "Home", href: "/" },
      { name: "Products", href: "/products" },
      { name: "Heritage", href: "/heritage" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "FAQ", href: "/faq" },
    ].map((item) => (
      <li key={item.name}>
        <Link
          href={item.href}
          onMouseMove={magnetic}
          onMouseLeave={resetMagnetic}
          className="
            inline-block
            transition
            duration-300
            hover:text-[#d6b874]
            hover:tracking-[0.15em]
          "
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>

</div>

{/* ===== RIGHT : CONTACT ===== */}
<div className="space-y-10">

  <p className="
    uppercase
    tracking-[0.45em]
    text-[13px]
    text-[#d6b874]
  ">
    Connect
  </p>

  <div className="space-y-6 text-[17px]">

    <a href="tel:+918770039639" className="flex gap-4 hover:text-[#d6b874] transition">
      <span>📞</span>
      <span>+91 8770039639</span>
    </a>

    <a href="https://wa.me/+918770039639" target="_blank" className="flex gap-4 hover:text-[#d6b874] transition">
      <span>💬</span>
      <span>WhatsApp : +91 8770039639</span>
    </a>

    <a href="mailto:aadihandloom@gmail.com" className="flex gap-4 hover:text-[#d6b874] transition">
      <span>✉</span>
      <span>aadihandloom@gmail.com</span>
    </a>

    <a href="https://instagram.com/aadihandloom" target="_blank" className="flex gap-4 hover:text-[#d6b874] transition">
      <span>◎</span>
      <span>@aadihandloom</span>
    </a>

  </div>

  {/* ADDRESS */}
  <div className="text-[#e8dcc4]/70 text-sm leading-[1.9] pt-6">
    Panchwadi Nageshwar Marg,<br/>
    Maheshwar - 451224<br/>
    Madhya Pradesh, India
  </div>

</div>


        </div>

        {/* BOTTOM */}
        <div className="
  mt-20
  pt-8
  border-t border-[#c2a45d]/20
  text-center
  text-[14px]
  tracking-[0.25em]
  text-[#bfb6a7]
">
  © {new Date().getFullYear()} AADI Handloom · All rights reserved.
</div>  
      </div>
    </footer>
  );
}
