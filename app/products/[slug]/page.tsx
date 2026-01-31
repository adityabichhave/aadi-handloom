import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "../../../components/productsData";
import ProductClient from "./ProductClient";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found | AADI Handloom",
    };
  }

  const image = product.colors?.[0]?.images?.[0];

  return {
  title: `${product.name} – Maheshwari Handloom`,
  description: product.description,

  alternates: {
    canonical: `/products/${product.slug}`,
  },

  openGraph: {
    title: product.name,
    description: product.description,
    url: `/products/${product.slug}`,
    images: image
      ? [
          {
            url: image,
            width: 1200,
            height: 1600,
            alt: product.name,
          },
        ]
      : [],
  },
};

}

export default function ProductPage({ params }: Props) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) return notFound();

  const image = product.colors?.[0]?.images?.[0];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: image ? [`https://aadihandloom.com${image}`] : [],
    description: product.description,
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: "AADI Handloom"
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price.replace(/\D/g, ""),
      availability: "https://schema.org/InStock",
      url: `https://aadihandloom.com/products/${product.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProductClient product={product} />
    </>
  );
}
