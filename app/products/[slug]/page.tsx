import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/components/productsData";
import ProductClient from "./ProductClient";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Product Not Found | AADI Handloom",
    };
  }

  const image = product.colors?.[0]?.images?.[0];

  return {
    title: `${product.name} | Buy Maheshwari Saree Online`,
    description: product.description,

    alternates: {
      canonical: `https://aadihandloom.com/products/${product.slug}`,
    },

    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://aadihandloom.com/products/${product.slug}`,
      siteName: "AADI Handloom",
      images: image
        ? [
            {
              url: `https://aadihandloom.com${image}`,
              width: 1200,
              height: 1600,
              alt: product.name,
            },
          ]
        : [],
      type: "website",
    },
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const image = product.colors?.[0]?.images?.[0];

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: image ? [`https://aadihandloom.com${image}`] : [],
    description: product.description,
    sku: product.slug,
    brand: {
      "@type": "Brand",
      name: "AADI Handloom",
    },

    offers: {
      "@type": "Offer",
      url: `https://aadihandloom.com/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price.replace(/\D/g, ""),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",

      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByCourier",
        returnFees: "https://schema.org/FreeReturn",
        applicableCountry: "IN",
      },

      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 2,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 3,
            maxValue: 7,
            unitCode: "DAY",
          },
        },
      },
    },
  };

  return (
    <>
      {/* GOOGLE PRODUCT SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ProductClient product={product} />
    </>
  );
}
