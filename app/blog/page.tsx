import Link from "next/link";

export default function BlogHome() {
  const blogs = [
    {
      title: "History of Maheshwari Sarees",
      slug: "maheshwari-saree-history",
      desc: "Discover the royal origin of Maheshwari sarees from Queen Ahilyabai Holkar era.",
    },
    {
      title: "Maheshwari Saree Price Guide 2026",
      slug: "maheshwari-saree-price",
      desc: "Complete guide to Maheshwari saree price, silk vs cotton and buying tips.",
    },
    {
      title: "How to Identify Pure Maheshwari Saree",
      slug: "how-to-identify-pure-maheshwari",
      desc: "Learn how to check real handloom Maheshwari saree vs fake powerloom.",
    },
    {
      title: "Best Place to Buy Maheshwari Sarees",
      slug: "best-saree-in-maheshwar",
      desc: "Why Maheshwar is the best place to buy authentic handwoven sarees.",
    },
    {
      title: "Maheshwari vs Chanderi Saree",
      slug: "maheshwari-vs-chanderi",
      desc: "Difference between Maheshwari and Chanderi sarees explained.",
    },
    {
      title: "Buy Maheshwari Saree Online",
      slug: "buy-maheshwari-sarees-maheshwar",
      desc: "How to buy authentic Maheshwari sarees online from AADI Handloom.",
    },
    
  ];

  return (
    <main className="min-h-screen bg-[#f3ead7] pt-28 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-[#bfa25a] mb-10 text-center tracking-[0.2em]">
          AADI Handloom Blog
        </h1>

        <div className="space-y-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="block p-6 bg-white border border-[#d8caa2] hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-serif text-[#2a2118] mb-2">
                {blog.title}
              </h2>
              <p className="text-[#5a5146]">{blog.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
