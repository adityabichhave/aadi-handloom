"use client";

export default function CraftToProducts() {
  return (
    <section className="relative z-0 isolate h-[80px] overflow-hidden">

      {/* fabric gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#f4efe8]
          via-[#efe6d8]
          to-[#efe6d8]
        "
      />

      {/* thread shimmer */}
      <div
        className="absolute inset-0 opacity-[0.12] animate-thread"
        style={{
          backgroundImage: "url('/maheshwari-thread.png')",
          backgroundSize: "300px",
        }}
      />

      {/* text */}
      <div className="relative h-full flex items-center justify-center">
        <p className="text-center tracking-[0.35em] text-[18px] uppercase text-[#9c8a5b] mb-6">
  From Craft to Creation
</p>

      </div>

      <style jsx global>{`
        @keyframes thread {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 420px;
          }
        }
        .animate-thread {
          animation: thread 14s linear infinite;
        }
          @keyframes seam {
  0% { opacity: 0.1; }
  50% { opacity: 0.18; }
  100% { opacity: 0.1; }
}

      `}</style>
    </section>
  );
}
