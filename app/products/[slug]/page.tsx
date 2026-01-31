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
    title: `${product.name} – Maheshwari Handloom | AADI Handloom`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
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

  return <ProductClient product={product} />;
}
