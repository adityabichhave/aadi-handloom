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
    default: "AADI Handloom – Authentic Maheshwari Sarees from Maheshwar",
    template: "%s | AADI Handloom",
  },

  description:
    "AADI Handloom offers authentic Maheshwari sarees handcrafted in Maheshwar. Pure silk, cotton-silk, and traditional handloom sarees rooted in heritage.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "ZrLHUD6fceporjl65QYGySoQzHMNBQHSm-FQ",
  },

  openGraph: {
    title: "AADI Handloom – Authentic Maheshwari Sarees",
    description:
      "Discover pure handwoven Maheshwari sarees from Maheshwar. Heritage, craftsmanship, and authenticity since 1990.",
    url: "https://aadihandloom.com",
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AADI Handloom",
              "url": "https://aadihandloom.com",
              "logo": "https://aadihandloom.com/aadi-handloom-logo.png",
              "image": "https://aadihandloom.com/aadi-handloom-logo.png",
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
          <main className="pt-[54px]">
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
