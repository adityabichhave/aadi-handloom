import "./globals.css";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer";
import { CartProvider } from "../components/CartContext";
import type { ReactNode } from "react";
import Footer from "../components/Footer";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import { Cinzel, Cormorant_Garamond, Great_Vibes } from "next/font/google";


const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
  variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  variable: "--font-cormorant",
});

const vibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-vibes",
});
export const brandFont = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400","600"],
});

export const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["300","400"],
});
export const metadata = {
  metadataBase: new URL("https://aadihandloom.com"),

  title: {
    default: "AADI Handloom – Pure Maheshwari Sarees from Maheshwar",
    template: "%s | AADI Handloom",
  },

  description:
    "Shop pure Maheshwari sarees from Maheshwar by AADI Handloom. Handwoven silk, cotton-silk and zari Maheshwari sarees crafted in Maheshwar since 1990. Premium handloom brand of India.",

  keywords: [
    "Maheshwari sarees",
    "Maheshwari saree online",
    "pure Maheshwari silk saree",
    "Maheshwari handloom",
    "Maheshwar sarees",
    "Maheshwari saree manufacturer",
    "handloom sarees India",
    "buy Maheshwari saree online",
    "Maheshwari silk sarees",
    "AADI Handloom"
  ],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    google: "ZrLHUD6fceporjl65QYGySoQzHMNBQHSm-FQ",
  },

  openGraph: {
    title: "AADI Handloom – Pure Maheshwari Sarees from Maheshwar",
    description:
      "Discover luxury Maheshwari sarees handcrafted in Maheshwar. Silk, cotton-silk and zari Maheshwari sarees woven for modern India and global wardrobes.",
    url: "https://aadihandloom.com",
    siteName: "AADI Handloom",
    images: [
      {
        url: "https://aadihandloom.com/og-home.jpg",
        width: 1200,
        height: 1200,
        alt: "AADI Handloom Maheshwari Sarees",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AADI Handloom – Maheshwari Sarees from Maheshwar",
    description:
      "Premium Maheshwari sarees handcrafted in Maheshwar. Explore silk, cotton-silk and zari Maheshwari collections.",
    images: ["https://aadihandloom.com/og-home.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
         {/* PWA + Luxury mobile branding */}
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#2a2118" />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ClothingStore",

        "name": "AADI Handloom",
        "url": "https://aadihandloom.com",
        "logo": "https://aadihandloom.com/aadi-handloom-logo.png",
        "image": "https://aadihandloom.com/aadi-handloom-logo.png",

        "description":
          "AADI Handloom is a premium Maheshwari saree brand from Maheshwar offering pure silk, cotton-silk and handwoven Maheshwari sarees crafted in India since 1990.",

        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Maheshwar",
          "addressRegion": "Madhya Pradesh",
          "postalCode": "451224",
          "addressCountry": "IN"
        },

        "areaServed": "Worldwide",

        "sameAs": [
          "https://www.instagram.com/aadihandloom",
          "https://www.facebook.com/aadihandloom"
        ]
      })
    }}
  />
</head>
      <body className={`${cinzel.variable} ${cormorant.variable} ${vibes.variable} font-[var(--font-cormorant)] bg-[#f3ead9] text-[#2a2118]`}><CartProvider>
          {/* FIXED NAVBAR */}
          <Navbar />

          {/* PUSH CONTENT BELOW NAVBAR */}
          <main className="pt-[0.6px]">
            {children}
          </main>

          {/* CART DRAWER (MUST BE INSIDE PROVIDER) */}
          <CartDrawer />
          <Footer />
        </CartProvider>

      </body>
    </html>
  );
}
