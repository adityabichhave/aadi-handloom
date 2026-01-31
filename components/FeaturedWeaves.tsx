"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const featuredWeaves = [
  {
    title: "Royal Zari Weave",
    subtitle: "Handwoven with real zari threads",
    image: "/featured/zari-weave.jpg",
  },
  {
    title: "Classic Silk Weave",
    subtitle: "Pure silk Maheshwari tradition",
    image: "/featured/silk-weave.jpg",
  },
  {
    title: "Soft Cotton Weave",
    subtitle: "Breathable elegance for everyday luxury",
    image: "/featured/Checks-cotton-weave.jpg",
  },
];

export default function FeaturedWeaves() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredWeaves.length);
    }, 5000); // slow, luxury pace

    return () => clearInterval(timer);
  }, []);

  const current = featuredWeaves[index];

  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {/* Image */}
          <Image
            src={current.image}
            alt={current.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div>
              <p className="text-[11px] tracking-[0.45em] uppercase text-[#e6d9b8] mb-4">
                Featured Weaves
              </p>

              <h2 className="text-3xl md:text-5xl font-serif tracking-[0.25em] text-[#f4efe8] mb-4">
                {current.title}
              </h2>

              <p className="text-sm md:text-base text-[#e6d9b8]/90 tracking-wide">
                {current.subtitle}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {featuredWeaves.map((_, i) => (
          <span
            key={i}
            className={`h-[2px] w-10 transition-all duration-500 ${
              i === index ? "bg-[#bfa25a]" : "bg-[#bfa25a]/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
