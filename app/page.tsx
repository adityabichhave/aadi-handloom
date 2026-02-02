import Hero from "../components/Hero";
import Heritage from "../components/Heritage";
import Products from "../components/Products";
import ScrollIndicator from "../components/ScrollIndicator";
import Craft from "../components/Craft";
import CraftToProducts from "../components/CraftToProducts";
import ProductCategories from "../components/ProductCategories";
import FeaturedWeaves from "../components/FeaturedWeaves";
import AboutFounder from "../components/AboutFounder";
import HomeContactStrip from "../components/HomeContactStrip";
import HomeFAQ from "../components/HomeFAQ";

export default function HomePage() {
  return (
    <>
      {/* SEO H1 — invisible but critical */}
      <h1 className="sr-only">
        Authentic Maheshwari Handloom Sarees from Maheshwar – AADI Handloom
      </h1>

      <Hero />
      <ScrollIndicator />
      <Heritage />
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
