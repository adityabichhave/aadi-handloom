import type { Metadata } from "next";
import HandloomMaheshwariClient from "./HandloomMaheshwariClient";

export const metadata: Metadata = {
  title: "Handloom Maheshwari Sarees | Traditional Weaving – AADI Handloom",
  description:
    "Discover handloom Maheshwari sarees woven on traditional looms in Maheshwar. Authentic craft preserved by generations of artisans.",
};

export default function Page() {
  return <HandloomMaheshwariClient />;
}
