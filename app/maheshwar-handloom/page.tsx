import type { Metadata } from "next";
import MaheshwarHandloomClient from "./MaheshwarHandloomClient";

export const metadata: Metadata = {
  title: "Maheshwar Handloom Sarees | Heritage Weaving from Maheshwar",
  description:
    "Maheshwar handloom sarees represent centuries of weaving heritage along the banks of the Narmada. Explore authentic Maheshwari textiles by AADI Handloom.",
};

export default function Page() {
  return <MaheshwarHandloomClient />;
}
