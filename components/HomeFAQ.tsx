"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "918770039639";

const faqs = [
  {
    q: "How do I place an order?",
    a: "Orders are confirmed directly on WhatsApp. Once you message us, we personally verify availability, pricing, and delivery timelines.",
  },
  {
    q: "Are all sarees handwoven?",
    a: "Yes. Every saree is handwoven in Maheshwar on traditional pit looms. We do not use power looms or factory production.",
  },
  {
    q: "Do you ship across India?",
    a: "Yes, we ship across India. Shipping charges and timelines are confirmed during WhatsApp discussion.",
  },
  {
    q: "Can I request custom or bespoke designs?",
    a: "Custom colours, borders, and limited-run designs can be discussed depending on loom availability and weaving timelines.",
  },
  {
    q: "Is Cash on Delivery available?",
    a: "COD depends on order value and delivery location and is confirmed individually during order discussion.",
  },
  {
    q: "How do I know if a saree is available?",
    a: "Maheshwari sarees are woven in limited runs. Availability is confirmed only at the time of WhatsApp inquiry.",
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
      {/* SUBTLE TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url('/maheshwari-thread.png')",
          backgroundSize: "420px",
        }}
      />

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6 py-32">

        {/* HEADER */}
        <div
          className={`max-w-3xl mb-20 transition-all duration-[1600ms]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
        >
          <p className="uppercase tracking-[0.45em] text-[16px] text-[#c9b37a] mb-8">
            Questions
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-[#f4efe8] mb-6">
            Before you explore further.
          </h2>

          <div className="w-20 h-[1px] bg-[#c9b37a]/70 mb-8" />

          <p className="text-[#d8cfc2] leading-[1.9]">
            Maheshwari sarees are woven slowly and produced in limited numbers.
            These answers help set the right expectations before you connect with us.
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
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-[#f4efe8] text-[15px] md:text-[16px]">
                    {item.q}
                  </span>

                  <span
                    className={`text-[#c9b37a] text-2xl transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
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
          className={`mt-24 text-center transition-all duration-[1600ms] delay-500
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <p className="text-sm text-[#c9bfb1] mb-6">
            Still unsure about something?
          </p>

          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            className="
              inline-block
              px-16 py-4
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
