"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Hand-Spun Yarn",
    desc: "Natural fibres are twisted slowly by hand, preserving strength, texture, and character.",
    image: "/craft/yarn.jpg",
  },
  {
    title: "Loom Woven",
    desc: "Traditional pit looms operated by master artisans shape every Maheshwari weave with precision.",
    image: "/craft/AADI-HANDLOOM-loom.jpg",
  },
  {
    title: "Narmada Leher Borders",
    desc: "Inspired by the sacred Narmada River, rhythmic borders echo movement and timeless Maheshwari identity.",
    image: "/craft/border.jpg",
  },
  {
    title: "Royal Finish",
    desc: "Balanced weight, soft drape and enduring elegance define every finished textile.",
    image: "/craft/finish.jpg",
  },
];

export default function Craft() {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal");
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-12 md:py-20 px-5 md:px-8 overflow-hidden bg-[#f3ead9]">

      {/* luxury glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#e8d7a7]/30 blur-[180px] opacity-60 pointer-events-none"/>

      {/* heading */}
      <div className="relative max-w-3xl mx-auto text-center mb-12 md:mb-20">

  <p className="font-[var(--font-cinzel)] text-[10px] tracking-[0.6em] uppercase text-[#b49a5c] mb-5">
    AADI Handloom
  </p>

  <h2 className="
  font-[var(--font-cinzel)]
  text-[30px] md:text-[48px]
  leading-[1.2]
  text-[#2a2118]
  mb-6
  tracking-[0.04em]
  ">
    The Making of a Maheshwari
  </h2>

  <div className="w-20 h-[1px] bg-[#c6a95a] mx-auto mb-6 opacity-70"/>

  <p className="
  font-[var(--font-cormorant)]
  max-w-xl mx-auto
  text-[#4a3f31]
  text-[16px] md:text-[18px]
  leading-[1.9]
  tracking-[0.02em]
  ">
    Every Maheshwari textile is patiently shaped by human hands — never rushed, never automated.
  </p>

</div>

      {/* steps */}
      <div className="relative max-w-6xl mx-auto space-y-14 md:space-y-24">

        {steps.map((step, i) => {
          const reverse = i % 2 !== 0;

          return (
            <div
              key={step.title}
              ref={(el) => {
                if (el) itemsRef.current[i] = el;
              }}
              className={`
              craft-item
              flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
              items-center gap-8 md:gap-16
              `}
            >

              {/* image */}
              <div className="relative w-full md:w-[52%] aspect-[4/3] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition duration-[1600ms] ease-[cubic-bezier(0.19,1,0.22,1)] craft-img"
                />
                <div className="absolute inset-0 shadow-[inset_0_0_70px_rgba(0,0,0,0.35)]"/>
              </div>

              {/* text */}
              <div className="md:w-[40%] text-center md:text-left">

  {/* step number */}
  <p className="
font-[var(--font-cinzel)]
text-[11px]
tracking-[0.55em]
uppercase
text-[#c6a95a]
mb-4
opacity-80
">
{`0${i + 1}`}
</p>  

  {/* title */}
  <h3 className="
font-[var(--font-cormorant)]
text-[26px] md:text-[34px]
text-[#2a2118]
mb-4
leading-[1.3]
tracking-[0.03em]
">
{step.title}
</h3>

<div className="w-10 h-[1px] bg-[#c6a95a] mb-5 opacity-60"/>

  {/* description */}
 <p className="
font-[var(--font-cormorant)]
text-[#4a3f31]
text-[16px] md:text-[17px]
leading-[2]
tracking-[0.01em]
max-w-md
mx-auto md:mx-0
">
{step.desc}
</p>

</div>
            </div>
          );
        })}
      </div>

      {/* animation */}
      <style jsx global>{`
        .craft-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .craft-item.reveal {
          opacity: 1;
          transform: translateY(0);
        }

        .craft-item.reveal .craft-img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}