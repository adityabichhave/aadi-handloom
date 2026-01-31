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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* BRAND */}
          <div>
            <Image
              src="/aadi-handloom-logo.png"
              alt="AADI Handloom"
              width={150}
              height={250}
              className="mb-6 opacity-90"
            />

            <p className="text-lg leading-[1.8] text-[#e3dccf] max-w-sm">
              Maheshwari handloom shaped by patience, restraint,
              and quiet continuity.
            </p>

            <p className="mt-6 text-[13px] tracking-[0.4em] uppercase text-[#bfa25a]">
              Maheshwar, India · Since 1990
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="uppercase text-[16px] tracking-[0.35em] text-[#bfa25a] mb-8">
              Navigate
            </p>

            <ul className="space-y-4 text-lg">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "Heritage", href: "/heritage" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "FAQ", href: "/FAQ" },
        
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onMouseMove={magnetic}
                    onMouseLeave={resetMagnetic}
                    className="inline-block transition-transform duration-300 hover:text-[#bfa25a]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         {/* CONNECT */}
<div className="space-y-10">

  <p className="uppercase text-[16px] tracking-[0.35em] text-[#d6b874]">
    Connect
  </p>

  {/* CONTACT DETAILS */}
  <div className="space-y-6 text-lg text-[#f4efe8]">

    {/* PHONE */}
    <div className="flex items-center gap-4">
      <a href='tel:+918770039639' className="flex items-center gap-4 icon-hover hover:text-[#d6b874] transition">
      <span className="icon-wrap">📞</span>
      <span>+91 8770039639</span>
      </a>
    </div>

    {/* WHATSAPP */}
    <a
      href="https://wa.me/+918770039639"
      target="_blank"
      className="flex items-center gap-4 icon-hover hover:text-[#d6b874] transition"
    >
      <span className="icon-wrap">
        <svg
          viewBox="0 0 32 32"
          width="18"
          height="18"
          fill="currentColor"
        >
          <path d="M19.11 17.59c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.98 2.68 1.11 2.86c.14.18 1.93 2.95 4.68 4.13.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.82-1.27.23-.61.23-1.14.16-1.27-.07-.13-.25-.2-.52-.34z"/>
          <path d="M16.04 3C9.39 3 4 8.38 4 15.02c0 2.64.86 5.07 2.32 7.03L4 29l7.16-2.28c1.87 1.02 4.01 1.61 6.25 1.61 6.64 0 12.02-5.38 12.02-12.02C29.43 8.38 22.68 3 16.04 3z"/>
        </svg>
      </span>
      <span>WhatsApp : +91 8770039639</span>
    </a>

    {/* EMAIL */}
    <a
      href="mailto:contact@aadihandloom.com"
      className="flex items-center gap-4 icon-hover hover:text-[#d6b874] transition"
    >
      <span className="icon-wrap">✉</span>
      <span>aadihandloom@gmail.com</span>
    </a>

    {/* INSTAGRAM */}
    <a
      href="https://instagram.com/aadihandloom"
      target="_blank"
      className="flex items-center gap-4 icon-hover hover:text-[#d6b874] transition"
    >
      <span className="icon-wrap">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.5" />
        </svg>
      </span>
      <span>@aadihandloom</span>
    </a>

  </div>

  {/* ADDRESS */}
  <div className="text-sm leading-[1.9] text-[#e3dccf]">
    <p>
      Panchwadi Nageshwar Marg,<br />
      Maheshwar - 451224  <br />
      Madhya Pradesh, India
    </p>


  </div>

</div>


        </div>

        {/* BOTTOM */}
        <div className="mt-16 text-center text-xs text-[#cfc6b8]">
          © {new Date().getFullYear()} AADI Handloom. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
