"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const IconWrap = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center justify-center w-7 h-7 md:w-5 md:h-5 text-[#8c7a45]">
    {children}
  </span>
);

export default function HomeContactStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-[#f2e8cf] overflow-hidden">
      {/* Depth wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f2ea] to-[#f2e8cf]" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-28">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 transition-all
          duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* LEFT — CONTACT DETAILS */}
          <div>
            <p className="uppercase tracking-[0.35em] text-[10px] md:text-[11px] text-[#8c7a45] mb-5 md:mb-6">
              Reach the House
            </p>

            <p className="text-[#2a2118] leading-[1.8] mb-8 md:mb-10 max-w-md text-sm">
              We work from Maheshwar, where Maheshwari weaving is practiced
              as a living craft. For correspondence or visit intentions,
              you may reach us below.
            </p>

            <div className="space-y-5 text-[#2a2118] text-sm">
              {/* PHONE */}
              <Link
                href="tel:+918770039639"
                className="flex items-center gap-4 hover:text-[#bfa25a] transition"
              >
                <IconWrap>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                    19.86 19.86 0 0 1-8.63-3.07
                    19.5 19.5 0 0 1-6-6
                    19.86 19.86 0 0 1-3.07-8.67
                    A2 2 0 0 1 4.11 2h3" />
                  </svg>
                </IconWrap>
                +91 8770 039 639
              </Link>

              {/* EMAIL */}
              <Link
                href="mailto:aadihandloom@gmail.com"
                className="flex items-center gap-4 hover:text-[#bfa25a] transition"
              >
                <IconWrap>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </IconWrap>
                aadihandloom@gmail.com
              </Link>

              {/* INSTAGRAM */}
              <Link
                href="https://instagram.com/aadihandloom"
                target="_blank"
                className="flex items-center gap-4 hover:text-[#bfa25a] transition"
              >
                <IconWrap>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.5" />
                  </svg>
                </IconWrap>
                @aadihandloom
              </Link>

              {/* WHATSAPP */}
              <Link
                href="https://wa.me/918770039639"
                target="_blank"
                className="flex items-center gap-4 hover:text-[#bfa25a] transition"
              >
                <IconWrap>
                  <svg viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16.04 3C9.39 3 4 8.38 4 15.02c0 2.64.86 5.07 2.32 7.03L4 29l7.16-2.28c1.87 1.02 4.01 1.61 6.25 1.61 6.64 0 12.02-5.38 12.02-12.02C29.43 8.38 22.68 3 16.04 3z"/>
                  </svg>
                </IconWrap>
                WhatsApp : +91 8770039639
              </Link>
            </div>

            {/* ADDRESS */}
            <p className="mt-10 md:mt-12 text-[#4a4336] leading-[1.8] text-sm">
              Panchwadi Nageshwar Marg<br />
              Maheshwar – 451224<br />
              Madhya Pradesh, India
            </p>
          </div>

          {/* RIGHT — MAP */}
          <div className="relative h-[260px] md:h-[320px] overflow-hidden border border-[#d8caa2]/60 shadow-[0_40px_80px_rgba(0,0,0,0.12)] grayscale hover:grayscale-0 transition duration-[2000ms] rounded-sm">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.917153136226!2d75.58492362499236!3d22.176460887192718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962657b74151867%3A0x992f285ce31bab1a!2sAADI%20HANDLOOM!5e0!3m2!1sen!2sin!4v1769308741612!5m2!1sen!2sin"
    className="absolute inset-0 w-full h-full"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>



        </div>
      </div>
    </section>
  );
}
