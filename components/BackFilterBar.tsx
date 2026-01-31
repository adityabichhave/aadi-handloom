"use client";

import { useRouter, usePathname } from "next/navigation";

interface BackFilterBarProps {
  title: string;
  showTitle: boolean;
  onFilterClick?: () => void;
}

export default function BackFilterBar({
  title,
  showTitle,
  onFilterClick,
}: BackFilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Hide on home
  if (pathname === "/") return null;

  return (
    <div
      className="
        fixed top-[56px] left-0 w-full z-40
        bg-[#e9d8af]
        border-b border-[#bfa25a]/40
      "
    >
      <div className="h-[48px] px-5 flex items-center justify-between">
        {/* BACK */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#2a2118]"
          aria-label="Go back"
        >
          <span className="text-lg">←</span>
        </button>

        {/* TITLE (APPEARS ON SCROLL) */}
        <div className="flex-1 text-center pointer-events-none overflow-hidden">
          <span
            className={`
              block text-[12px] tracking-widest uppercase text-[#2a2118]
              transition-all duration-300
              ${
                showTitle
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }
            `}
          >
            {title}
          </span>
        </div>

        {/* FILTER ICON (optional) */}
        {onFilterClick ? (
          <button
            onClick={onFilterClick}
            className="flex items-center justify-center"
            aria-label="Filter products"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2a2118"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
          </button>
        ) : (
          <div className="w-6" />
        )}
      </div>
    </div>
  );
}
