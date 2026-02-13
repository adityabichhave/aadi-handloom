"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
   {
    id: 3,
    image: "/Maheshwar-Fort-AADI-HANDLOOM.jpg",
    title: "Where It All Began",
    subtitle: "The Legacy of Maheshwar Fort",
    cta: "View All Products",
    href: "/products",
  },
    {
    id: 2,
    image: "/Classic-Maheshwari-Silk-Saree.jpg",
    title: "Silk That Speaks Heritage",
    subtitle: "Handwoven with Sacred Precision",
    cta: "Discover Sarees",
    href: "/products?type=saree&category=silk&page=1",
  },
  {
    id: 0,
    image: "/Maheshwari-Zari-Saree.jpg",
    title: "Royal Maheshwari Zari",
    subtitle: "Woven for Generations in Maheshwar",
    cta: "Explore Sarees",
    href: "/products",
  },
  {
    id: 1,
    image: "/Temple-Border-Elegance-Maheshwari.jpg",
    title: "Temple Border Elegance",
    subtitle: "An Heirloom Craft Tradition",
    cta: "View Sarees",
    href: "/products", 
  },

];

export default function Hero() {
  const [active, setActive] = useState(0);
  const textRef = useRef<HTMLDivElement | null>(null);

  /* Slideshow – confident, editorial pacing */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 5200);
    return () => clearInterval(timer);
  }, []);

  /* Fade-up animation ONCE */
  useEffect(() => {
    if (!textRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("hero-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  const slide = slides[active];

  return (
    <section
      className="relative h-[92vh] overflow-x-hidden"
      aria-label="Hero section"
    >
      {/* SLIDES */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            active === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={active !== index}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${s.image})` }}
          >
            {/* CINEMATIC GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#1e1a16]/20 to-transparent" />

            {/* FABRIC GRAIN */}
            <div className="absolute inset-0 hero-fabric-grain pointer-events-none" />
          </div>
        </div>
      ))}

      {/* CONTENT */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 md:px-20 flex items-center pt-12">
        <div ref={textRef} className="hero-text max-w-xl md:-ml-6">
          <p className="text-[11px] tracking-[0.5em] uppercase text-[#e8dcc4] mb-4">
            Handwoven Heritage
          </p>

          <h1 className="text-[46px] md:text-[60px] leading-tight font-serif text-[#d6b874] mb-6">
            {slide.title}
          </h1>

          <p className="text-sm tracking-[0.28em] uppercase text-[#e8dcc4]/90 mb-14">
            {slide.subtitle}
          </p>

          {/* SINGLE DOMINANT CTA */}
          <Link
            href={slide.href}
            className="
              inline-block
              px-12 py-4
              bg-[#d6b874]
              text-[#1e1a16]
              text-[11px]
              tracking-[0.35em]
              uppercase
              transition
              hover:bg-[#e3cf95]
              focus:outline-none
              focus:ring-2
              focus:ring-[#d6b874]
            "
          >
            {slide.cta}
          </Link>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-20 w-full flex justify-center gap-4 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              active === i
                ? "bg-[#d6b874] scale-125"
                : "bg-[#e8dcc4]/50"
            }`}
          />
        ))}
      </div>

      {/* TEXTILE DIVIDER */}
      <svg
        viewBox="0 0 1440 70"
        className="absolute bottom-0 w-full pointer-events-none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fadeToBg" x1="0" y1="2" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(191,178,159,1)" />
            <stop offset="100%" stopColor="rgba(208,188,159,1)" />
          </linearGradient>
        </defs>

        <path
          d="M0,40 C120,60 240,20 360,30 480,40 600,60 720,40 840,20 960,40 1080,30 1200,20 1320,40 1440,30 L1440,70 L0,70 Z"
          fill="url(#fadeToBg)"
        />
      </svg>
    </section>
  );
}
