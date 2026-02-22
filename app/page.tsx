import Hero from "../components/Hero";

import Craft from "../components/Craft";
import CraftToProducts from "../components/CraftToProducts";
import ProductCategories from "../components/ProductCategories";
import FeaturedWeaves from "../components/FeaturedWeaves";
import AboutFounder from "../components/AboutFounder";
import HomeContactStrip from "../components/HomeContactStrip";
import HomeFAQ from "../components/HomeFAQ";
import HandloomMark from "@/components/HandloomMark";
import SelectedPieces from "@/components/SelectedProducts";

export default function HomePage() {
  return (
    <>
      {/* SEO H1 — invisible but critical */}
      <h1 className="sr-only">
        Pure Maheshwari Handloom Sarees from Maheshwar – AADI Handloom
      </h1>

      <Hero />
      <SelectedPieces />
      <HandloomMark />
      <Craft />
      <CraftToProducts />
      <FeaturedWeaves />
      <ProductCategories />
      <AboutFounder />
      <HomeFAQ />
      <HomeContactStrip />
    </>
  );
}
