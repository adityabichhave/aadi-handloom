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
      <Hero />
      <ScrollIndicator/>
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
