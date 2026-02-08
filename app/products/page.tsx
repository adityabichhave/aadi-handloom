import { Suspense } from "react";
import ProductsPageClient from "./ProductsPageClient";
import type { Metadata } from "next";

/* ================= SEO META ================= */

export const metadata: Metadata = {
  title:
    "Maheshwari Sarees Collection | AADI Handloom Maheshwar",
  description:
    "Explore authentic Maheshwari sarees, silk sarees, suits and dupattas from Maheshwar. Handwoven luxury collection by AADI Handloom.",
  
  keywords: [
    "Maheshwari sarees",
    "Maheshwari saree Maheshwar",
    "pure silk Maheshwari saree",
    "Maheshwari suits",
    "Maheshwari dupatta",
    "handloom sarees India",
    "Aadi Handloom"
  ],

  openGraph: {
    title: "Maheshwari Sarees Collection | AADI Handloom",
    description:
      "Shop pure Maheshwari sarees, silk sarees and handwoven collections directly from Maheshwar.",
    url: "https://aadihandloom.com/products",
    siteName: "AADI Handloom",
    images: [
      {
        url: "https://aadihandloom.com/og-home.jpg",
        width: 800,
        height: 800,
        alt: "AADI Handloom Maheshwari Sarees",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Maheshwari Sarees Collection | AADI Handloom",
    description:
      "Buy authentic Maheshwari sarees from Maheshwar. Pure silk and handwoven heritage collection.",
    images: ["https://aadihandloom.com/og-home.jpg"],
  },

  alternates: {
    canonical: "https://aadihandloom.com/products",
  },
};

/* ================= PAGE ================= */

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10">Loading products…</div>}>
      <ProductsPageClient />
    </Suspense>
  );
}
