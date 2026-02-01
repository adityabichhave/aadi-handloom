import "./globals.css";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer";
import { CartProvider } from "../components/CartContext";
import type { ReactNode } from "react";
import Footer from "../components/Footer";

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
      <body>
        <CartProvider>
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
