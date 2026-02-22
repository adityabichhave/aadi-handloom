"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "918770039639";
const INSTAGRAM_URL = "https://instagram.com/aadihandloom";
const EMAIL = "aadihandloom@gmail.com";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
    inquiryType: "general",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: "",
  });

  /* ---------- OBSERVER (once) ---------- */
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  /* ---------- VALIDATION ---------- */
  const validate = () => {
    let ok = true;
    const e = { name: "", phone: "", message: "" };

    if (form.name.trim().length < 2) {
      e.name = "Please enter your name";
      ok = false;
    }

    if (form.phone && !/^[0-9+\-\s]{10,}$/.test(form.phone)) {
      e.phone = "Invalid phone number";
      ok = false;
    }

    if (form.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters";
      ok = false;
    }

    setErrors(e);
    return ok;
  };

  /* ---------- WHATSAPP ---------- */
  const handleWhatsAppSend = () => {
    if (!validate()) return;

    const inquiryMap: Record<string, string> = {
      general: "General Inquiry",
      product: "Product Inquiry",
      custom: "Custom / Bespoke",
      wholesale: "Wholesale",
      collaboration: "Business",
    };

    const text = `
🌿 AADI Handloom — Inquiry

Name: ${form.name}
${form.phone ? `Phone: ${form.phone}` : ""}
Type: ${inquiryMap[form.inquiryType]}

Message:
${form.message}

— Sent from aadihandloom.com
`.trim();

    window.location.href =
      "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f3ead9] mt-[-150px] overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f2e8cf]/95 via-[#f2e8cf]/90 to-[#f2e8cf]/95" />

      {/* ================= HERO ================= */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-6 pt-28 md:pt-40 pb-16 md:pb-24">
        <div
          className={`grid md:grid-cols-[1fr_auto] gap-10 md:gap-12 items-start
          transition-all duration-[1200ms]
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div>
            <p className="uppercase tracking-[0.5em] text-[11px] text-[#8c7a45] mb-6">
              Contact
            </p>

            <h1 className="font-serif text-3xl md:text-6xl text-[#2a2118] mb-6 md:mb-10 leading-tight">
              Speak with the house<br className="hidden md:block" />
              behind the weave.
            </h1>

            <p className="text-[15px] md:text-[18px] leading-[1.9] text-[#4a4336] max-w-2xl">
              Whether you are selecting a saree, planning a custom piece,
              or enquiring for wholesale — we respond personally.
            </p>
          </div>

          <div className="hidden md:block">
            <Image
              src="/aadi-handloom-logo.png"
              alt="AADI Handloom"
              width={300}
              height={210}
              className="opacity-95"
              priority
            />
          </div>
        </div>
      </div>

      {/* ================= QUICK ACTION STRIP ================= */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-6 pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuickCard
          title="WhatsApp"
          value="+91 87700 39639"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
        />
        <QuickCard
          title="Email"
          value={EMAIL}
          href={`mailto:${EMAIL}`}
        />
        <QuickCard
          title="Instagram"
          value="@aadihandloom"
          href={INSTAGRAM_URL}
        />
      </div>

      {/* ================= ADDRESS ================= */}
      <div className="relative max-w-7xl mx-auto px-5 md:px-6 pb-20 grid md:grid-cols-3 gap-10 md:gap-20 text-[#4a4336]">
        <div>
         <b> <p className="label">The House</p></b>
          <p className="leading-[1.9]">
            Panchwadi Nageshwar Marg<br />
            Maheshwar, Madhya Pradesh<br />
            India — 451224
          </p>
        </div>

        <div>
         <b> <p className="label">Response Time</p></b>
          <p>WhatsApp replies usually within 1–3 hours.</p>
        </div>

        <div>
         <b> <p className="label">Business Scope</p></b>
          <p>Sarees · Suits · Dupattas · Custom Orders · Wholesale</p>
        </div>
      </div>

      {/* ================= FORM ================= */}
      <div className="relative max-w-4xl mx-auto px-5 md:px-6 pb-40">
        <div className="bg-[#fdfbf6] border border-[#d8caa2]/60 px-6 md:px-16 py-10 md:py-14 shadow-xl">
          <p className="uppercase tracking-[0.35em] text-[11px] text-[#8c7a45] mb-8">
            Send WhatsApp Message
          </p>

          <form className="space-y-8 md:space-y-10">
            {/* TYPE */}
            <div className="flex flex-wrap gap-2">
              {[
                ["general", "General"],
                ["product", "Product"],
                ["custom", "Custom"],
                ["wholesale", "Wholesale"],
                ["collaboration", "Business"],
              ].map(([v, l]) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setForm((p) => ({ ...p, inquiryType: v }))}
                  className={`chip ${
                    form.inquiryType === v && "chipActive"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              error={errors.name}
            />

            <Input
              placeholder="Phone Number (optional)"
              value={form.phone}
              onChange={(v) => setForm({ ...form, phone: v })}
              error={errors.phone}
            />

            <TextArea
              placeholder="Your message"
              value={form.message}
              onChange={(v) => setForm({ ...form, message: v })}
              error={errors.message}
            />

            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="w-full mt-6 py-5 bg-[#25D366] text-white uppercase tracking-[0.35em] text-[11px] hover:bg-[#1ebe5d] transition"
            >
              Send on WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t p-3 z-40">
        <Link
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          className="block text-center bg-[#25D366] text-white py-3 uppercase text-sm"
        >
          WhatsApp Us
        </Link>
      </div>

      <style jsx global>{`
        .label {
          text-transform: uppercase;
          letter-spacing: .3em;
          font-size: 14px;
          color: #8c7a45;
          margin-bottom: 12px;
        }
        .chip {
          border: 1px solid #d8caa2;
          padding: 8px 12px;
          font-size: 11px;
          text-transform: uppercase;
        }
        .chipActive {
          border-color: #bfa25a;
          background: rgba(191,162,90,.12);
        }
      `}</style>
    </section>
  );
}

/* ===== SMALL COMPONENTS ===== */

function QuickCard({ title, value, href }: any) {
  return (
    <Link
      href={href}
      target="_blank"
      className="border border-[#d8caa2]/100 p-5 hover:bg-[#bfa25a]/5 transition"
    >
      <p className="text-[14px] uppercase tracking-[0.3em] text-[#8c7a45] mb-2">
        {title}
      </p>
      <p className="font-[12]">{value}</p>
    </Link>
  );
}

function Input({ placeholder, value, onChange, error }: any) {
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-[#bfa25a]/50 py-4 outline-none focus:border-[#bfa25a]"
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function TextArea({ placeholder, value, onChange, error }: any) {
  return (
    <div>
      <textarea
        rows={5}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-[#bfa25a]/50 py-4 outline-none resize-none focus:border-[#bfa25a]"
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
