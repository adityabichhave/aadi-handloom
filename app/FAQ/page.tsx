"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "918770039639";

const faqs = [
  {
    q: "How do I place an order?",
    a: "Orders are confirmed directly on WhatsApp. Once you message us, we personally verify availability, pricing, and delivery timelines before confirming the order.",
  },
  {
    q: "Why don’t you offer instant checkout?",
    a: "Maheshwari sarees are woven in limited quantities. Availability, colours, and borders vary by loom. Direct conversation ensures accuracy and fairness.",
  },
  {
    q: "Are all sarees genuinely handwoven?",
    a: "Yes. Every saree is handwoven on traditional pit looms in Maheshwar. We do not use power looms, mass production, or synthetic shortcuts.",
  },
  {
    q: "How long does shipping take?",
    a: "Dispatch timelines depend on availability. Ready pieces usually ship within 3–5 working days. Custom or reserved pieces may take longer.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes, we ship across India. Shipping charges and delivery timelines are discussed and confirmed on WhatsApp before order confirmation.",
  },
  {
    q: "Do you ship internationally?",
    a: "International shipping is available for select countries. Please reach out on WhatsApp with your location for exact timelines and charges.",
  },
  {
    q: "Can I request custom colours or designs?",
    a: "Custom colours, borders, and bespoke variations may be possible depending on loom availability and weaving schedules.",
  },
  {
    q: "Is Cash on Delivery available?",
    a: "COD depends on order value, delivery location, and courier availability. This is confirmed individually during order discussion.",
  },
  {
    q: "How do I know if a saree is available?",
    a: "Each saree page reflects design intent, not guaranteed stock. Availability is confirmed only at the time of WhatsApp inquiry.",
  },
  {
    q: "What if I need help choosing a saree?",
    a: "We personally assist with fabric, colour, occasion, and budget recommendations via WhatsApp—just ask.",
  },
  {
    q: "Do you accept returns or exchanges?",
    a: "As each saree is handwoven and often reserved specifically, returns are handled on a case-by-case basis and discussed before purchase.",
  },
  {
    q: "Where are your sarees woven?",
    a: "All sarees are woven in Maheshwar, Madhya Pradesh, by skilled artisans continuing a centuries-old weaving tradition.",
  },
];

export default function HomeFAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /* Reveal on scroll */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#2a2118] overflow-hidden border-t border-[#5a4a3a]"
    >
      {/* TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url('/maheshwari-thread.png')",
          backgroundSize: "420px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32">

        {/* HEADER */}
        <div
          className={`max-w-3xl mb-24 transition-all duration-[1600ms]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <p className="uppercase tracking-[0.45em] text-[11px] text-[#c9b37a] mb-8">
            Understanding
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#f4efe8] mb-6 leading-[1.2]">
            Before you choose a handwoven piece.
          </h2>

          <div className="w-20 h-[1px] bg-[#c9b37a]/70 mb-8" />

          <p className="text-[#d8cfc2] leading-[1.9]">
            Maheshwari sarees are not mass-produced garments.
            They carry time, labour, and lineage. These answers
            help set the right expectations.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="max-w-4xl divide-y divide-[#5a4a3a]">
          {faqs.map((item, i) => {
            const open = openIndex === i;

            return (
              <div
                key={i}
                className={`py-6 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className="text-[#f4efe8] text-[15px] md:text-[16px] group-hover:text-[#e4d097] transition">
                    {item.q}
                  </span>

                  <span
                    className={`text-[#c9b37a] text-2xl transition-all duration-300 ${
                      open ? "rotate-45 scale-110" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#d8cfc2] leading-[1.85] max-w-3xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`mt-28 text-center transition-all duration-[1600ms] delay-400
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <p className="text-sm text-[#c9bfb1] mb-6">
            Still have a question or need guidance?
          </p>

          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            className="
              inline-block
              px-20 py-4
              bg-[#25D366]
              text-white
              text-[11px]
              tracking-[0.4em]
              uppercase
              hover:bg-[#1ebe5d]
              transition
            "
          >
            Ask on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
