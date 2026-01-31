"use client";

import { useEffect } from "react";

export default function Toast({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const t = setTimeout(onClose, 2500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div
      className="
        fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999]
        bg-[#2a2118] text-[#f4efe8]
        px-5 py-3
        text-sm tracking-wide
        shadow-lg
        animate-toast
      "
    >
      {message}
    </div>
  );
}
