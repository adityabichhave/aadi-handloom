import type { Metadata } from "next";
import MaheshwariClient from "./MaheshwariClient";

export const metadata: Metadata = {
  title: "Maheshwari Sarees – Authentic Handloom from Maheshwar | AADI Handloom",
  description:
    "Explore authentic Maheshwari sarees handwoven in Maheshwar. Pure silk and cotton-silk Maheshwari sarees crafted by traditional artisans at AADI Handloom.",
};

export default function MaheshwariSareesPage() {
  return <MaheshwariClient />;
}
