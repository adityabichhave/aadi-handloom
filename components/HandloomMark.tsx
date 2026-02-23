"use client";

export default function HandloomMark() {
return (
<section className="relative bg-[#f3ead9] py-10 md:py-10 overflow-hidden">

  {/* background aura */}
  <div className="absolute inset-0 opacity-[0.05] pointer-events-none" />
  <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(191,162,90,0.12),transparent_60%)] blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6 md:px-10">

    {/* ===== HEADER ===== */}
    <div className="text-center mb-20">
      <p className="text-[13px] tracking-[0.55em] uppercase text-[#8b7b4b] mb-4">
        Official Government Recognition
      </p>

      <h2 className="text-4xl md:text-5xl font-serif tracking-[0.25em] text-[#bfa25a]">
        India Handloom Mark Certified Maheshwari Sarees
      </h2>

      <div className="w-32 h-[1px] mx-auto mt-7 bg-gradient-to-r from-transparent via-[#bfa25a] to-transparent" />

      <p className="max-w-3xl mx-auto mt-8 text-[#5b5144] text-[15px] leading-[1.9]">
        A rare mark of authenticity granted only to genuine handloom creators of India.
        Each AADI creation stands verified, protected, and rooted in centuries of Maheshwari weaving heritage.
      </p>
    </div>

    {/* ===== CONTENT ===== */}
    <div className="grid md:grid-cols-2 gap-20 items-center">

      {/* ===== CERTIFICATE ===== */}
      <div className="relative group">

        <div className="absolute -inset-6 bg-gradient-to-br from-[#c6a75d]/30 to-transparent blur-2xl opacity-40 group-hover:opacity-80 transition duration-700" />

        <div className="relative p-[14px] bg-gradient-to-br from-[#e7d6a8] to-[#bfa25a] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <div className="bg-[#fdfaf3] p-3">
            <img
              src="/Trust/certificate-1.png"
              alt="India Handloom Mark certified Maheshwari saree manufacturer AADI Handloom"
              className="w-full shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition duration-[1200ms] group-hover:scale-[1.04]"
            />
          </div>
        </div>

        <div className="absolute -bottom-6 -right-6 bg-[#1e140b] border border-[#c6a75d] px-6 py-3 shadow-xl">
          <p className="text-[#d6b874] text-[11px] tracking-[0.35em] uppercase">
            Govt. Certified
          </p>
        </div>
      </div>

      {/* ===== TEXT ===== */}
      <div className="space-y-8 text-[#2a2118]">

        <h3 className="font-serif text-3xl text-[#bfa25a] leading-snug">
          Recognised Under India Handloom Brand
        </h3>

        <p className="leading-[2] text-[16px] text-[#3d3428]">
          AADI Handloom is officially registered under the prestigious
          <span className="font-semibold text-[#1e140b]"> India Handloom Brand </span>
          by the Ministry of Textiles, Government of India — a recognition given only to authentic handloom manufacturers.
        </p>

        <p className="leading-[2] text-[16px] text-[#3d3428]">
          Every Maheshwari saree is woven in Maheshwar on traditional handlooms by skilled artisans,
          preserving a weaving legacy that dates back to the royal era of Ahilyabai Holkar.
        </p>

        {/* ===== GLOBAL SEO PARAGRAPH (fills empty space) ===== */}
        <p className="leading-[2] text-[16px] text-[#3d3428]">
          AADI Handloom is a globally trusted Maheshwari saree manufacturer and exporter from Maheshwar, India.
          We supply authentic handwoven Maheshwari silk sarees, cotton silk sarees, dupattas, and suits to customers
          across India, USA, UK, UAE, Australia, and worldwide. Our India Handloom Mark certification guarantees
          genuine handloom production — not powerloom, not imitation, only original Maheshwari weaving.
        </p>

        <p className="leading-[2] text-[16px] text-[#3d3428]">
          When you search for the best Maheshwari saree online, pure silk Maheshwari sarees,
          or authentic Maheshwar handloom, AADI represents heritage, authenticity, and luxury rooted in tradition.
        </p>

        <div className="w-20 h-[1px] bg-gradient-to-r from-[#bfa25a] to-transparent" />

        {/* trust points */}
        <div className="grid grid-cols-1 gap-4 pt-4">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#bfa25a] rounded-full" />
            <span>100% Authentic Handloom</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#bfa25a] rounded-full" />
            <span>Government Verified Production</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-[#bfa25a] rounded-full" />
            <span>Worldwide Shipping Available</span>
          </div>
        </div>

        {/* ===== BADGE ===== */}
        <div className="pt-10 flex justify-center md:justify-start">
          <span className="inline-flex items-center justify-center text-center px-6 md:px-10 py-3 md:py-4 text-[11px] md:text-[12px] tracking-[0.35em] uppercase font-medium text-[#1e140b] bg-gradient-to-r from-[#e7d6a8] via-[#d6b874] to-[#bfa25a] border border-[#c6a75d] shadow-[0_10px_25px_rgba(0,0,0,0.25)] w-full md:w-auto max-w-[340px]">
            Official Government Handloom Certified
          </span>
        </div>

      </div>
    </div>
  </div>

  {/* ===== GOOGLE GLOBAL SEO SCHEMA ===== */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "AADI Handloom",
        url: "https://aadihandloom.com",
        logo: "https://aadihandloom.com/logo.png",
        description:
          "Authentic Maheshwari saree manufacturer from Maheshwar India. Government certified India Handloom Mark brand exporting pure handwoven sarees worldwide.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Maheshwar",
          addressRegion: "Madhya Pradesh",
          addressCountry: "India"
        },
        areaServed: ["India", "USA", "UK", "UAE", "Australia", "Worldwide"],
        knowsAbout: [
          "Maheshwari Saree",
          "Maheshwari Silk Saree",
          "Handloom Saree",
          "Maheshwar Handloom",
          "India Handloom Mark"
        ]
      }),
    }}
  />
</section>

);
}