import { Suspense } from "react";
import ProductsPageClient from "./ProductsPageClient";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10">Loading products…</div>}>
      <ProductsPageClient />
    </Suspense>
  );
}
