import { MetadataRoute } from "next";
import { products } from "@/components/productsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aadihandloom.com";

  /* ===== PRODUCT URLS (AUTO) ===== */
  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  /* ===== BLOG URLS ===== */
  const blogs = [
    "/blog/maheshwari-saree-history",
    "/blog/how-to-style-maheshwari-saree",
    "/blog/maheshwari-saree-vs-chanderi",
    "/blog/handloom-vs-powerloom",
    "/blog/maheshwari-saree-buying-guide",
  ];

  const blogUrls = blogs.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  /* ===== STATIC PAGES ===== */
  const staticPages = [
    "",
    "/products",
    "/about",
    "/contact",
    "/heritage",
    "/faq",
  ];

  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  return [...staticUrls, ...blogUrls, ...productUrls];
}
