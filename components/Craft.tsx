"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Hand-Spun Yarn",
    desc: "Natural fibres are twisted slowly by hand, preserving strength, texture, and soul.",
    image: "/craft/yarn.jpg",
  },
  {
    title: "Loom Woven",
    desc: "Traditional pit looms operated by skilled artisans shape every weave.",
    image: "/craft/AADI-HANDLOOM-loom.jpg",
  },
  {
  title: "Narmada Leher Borders",
  desc: "A rhythmic geometric border inspired by the sacred flow of the Narmada River, translated into stepped wave patterns that echo movement, balance, and timeless Maheshwari craftsmanship.",
  image: "/craft/border.jpg",
},

  {
    title: "Royal Finish",
    desc: "Balanced weight, soft drape, and timeless elegance.",
    image: "/craft/finish.jpg",
  },
];

export default function Craft() {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
<section
  className="relative z-0 py-28 px-6 overflow-hidden isolate"
  style={{
    background: `
      radial-gradient(
        circle at 50% 20%,
        rgba(214,184,116,0.12),
        transparent 60%
      ),
      linear-gradient(
        180deg,
        #f2e8cf 0%,
        #f2ead8 100%
      )
    `,
  }}
>

    {/* MOVING THREAD SHIMMER */}
<div
  className="absolute inset-0 opacity-[0.06] pointer-events-none animate-thread"
  style={{
    backgroundImage: "url('/maheshwari-thread.png')",
    backgroundSize: "260px",
  }}
/>

    {/* TEXTILE TEXTURE */}
<div
  className="absolute inset-0 opacity-[0.08] pointer-events-none"
  style={{
    backgroundImage: "url('/maheshwari-thread.png')",
    backgroundSize: "420px",
  }}

  
/>


      {/* subtle thread texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "url('/maheshwari-thread.png')",
          backgroundSize: "500px",
        }}
      />

      {/* heading */}
      <div className="relative max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-[#bfa25a] tracking-[0.35em] uppercase text-lg mb-4">
          The Craft
        </h2>
        <p className="max-w-xl mx-auto text-[#3a2f23] text-[16px] leading-[1.8]">
          Every Maheshwari saree is patiently shaped by human hands — never by machines.
        </p>
      </div>

      {/* grid */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {steps.map((step, i) => (
          <div
            key={step.title}
            ref={(el) => {
              if (el) itemsRef.current[i] = el;
            }}
            className="craft-item flex flex-col"
          >
            {/* image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden mb-5">
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out craft-img"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_70px_rgba(0,0,0,0.35)]" />
            </div>

            {/* text */}
            <h3 className="font-serif text-xl text-[#bfa25a] mb-2">
              {step.title}
            </h3>
            <p className="text-[#2a2118] text-[15px] leading-[1.75] max-w-md">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* fade into next section */}
      {/* FABRIC DISSOLVE INTO PRODUCTS */}
<div className="absolute bottom-0 left-0 w-full h-36 pointer-events-none">
  {/* base fade */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#f2ead8] via-[#f4efe8]/70 to-transparent" />

  {/* thread texture bridge */}
  <div
    className="absolute inset-0 opacity-[0.12]"
    style={{
      backgroundImage: "url('/maheshwari-thread.png')",
      backgroundSize: "380px",
    }}
  />
</div>


      {/* animations */}
      <style jsx global>{`
        .craft-item {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .craft-item.reveal {
          opacity: 1;
          transform: translateY(0);
        }

        .craft-item.reveal .craft-img {
          transform: scale(1.035);
        }

        @keyframes thread {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 0 260px;
    }
  }
  .animate-thread {
    animation: thread 18s linear infinite;
  }

      `
      }</style>
    </section>
  );
}

