import { products } from "../components/productsData";

export default function sitemap() {
  const base = "https://aadihandloom.com";

  const productUrls = products.map(p => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/products`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/heritage`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    ...productUrls
  ];
}
