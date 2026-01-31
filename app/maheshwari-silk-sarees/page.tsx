import type { Metadata } from "next";
import MaheshwariSilkClient from "./MaheshwariSilkClient";

export const metadata: Metadata = {
  title: "Pure Silk Maheshwari Sarees | Handwoven in Maheshwar – AADI Handloom",
  description:
    "Explore pure silk Maheshwari sarees with zari borders, handwoven by artisans in Maheshwar. Authentic silk craftsmanship by AADI Handloom.",
};

export default function Page() {
  return <MaheshwariSilkClient />;
}
