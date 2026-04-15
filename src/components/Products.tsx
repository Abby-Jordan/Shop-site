import { useState } from "react";

const categories = ["All", "Dairy", "Sweets", "Paneer & Chhena", "Special"];

const products = [
  {
    name: "Fresh Full Cream Milk",
    category: "Dairy",
    img: "/products/milk.png",
    desc: "Pure, rich, and creamy full cream milk sourced fresh daily from healthy cows.",
    badge: "Best Seller",
    badgeColor: "bg-blue-600",
  },
  {
    name: "Desi Cow Ghee",
    category: "Dairy",
    img: "/products/ghee.png",
    desc: "Premium quality ghee made using the traditional bilona method from desi cow milk.",
    badge: "Premium",
    badgeColor: "bg-amber-500",
  },
  {
    name: "Fresh Paneer",
    category: "Paneer & Chhena",
    img: "/products/paneer.png",
    desc: "Soft, fresh, homemade-style paneer made from pure cow milk. Available daily.",
    badge: "Fresh Daily",
    badgeColor: "bg-green-600",
  },
  {
    name: "Mishti Doi",
    category: "Sweets",
    img: "/products/mishti-doi.png",
    desc: "Traditional sweet curd, slow-cooked with jaggery. A classic delicacy loved by all.",
    badge: "Traditional",
    badgeColor: "bg-rose-500",
  },
  {
    name: "Rasgulla",
    category: "Sweets",
    img: "/products/rasgulla.png",
    desc: "Soft, spongy chhena balls soaked in light sugar syrup. Melt-in-your-mouth perfection!",
    badge: "Popular",
    badgeColor: "bg-purple-600",
  },
  {
    name: "Dahi (Curd)",
    category: "Dairy",
    img: "/products/dahi.png",
    desc: "Thick, creamy, naturally set curd made from pure milk. Perfect for daily use.",
    badge: "Daily Essential",
    badgeColor: "bg-teal-600",
  },
  {
    name: "Gulab Jamun",
    category: "Sweets",
    img: "/products/gulab-jamun.png",
    desc: "Golden-fried milk solid dumplings soaked in rose-flavored sugar syrup.",
    badge: "Festival Special",
    badgeColor: "bg-orange-500",
  },
  {
    name: "Fresh Butter",
    category: "Dairy",
    img: "/products/butter.png",
    desc: "White homemade butter churned fresh every morning. No salt, no preservatives.",
    badge: "Natural",
    badgeColor: "bg-yellow-500",
  },
  {
    name: "Chhena Poda",
    category: "Paneer & Chhena",
    img: "/products/chhena-poda.png",
    desc: "Baked chhena with caramelized sugar — an authentic delicacy with a smoky aroma.",
    badge: "Specialty",
    badgeColor: "bg-amber-700",
    fallbackEmoji: "🍰",
  },
  {
    name: "Kheer",
    category: "Sweets",
    img: "/products/kheer.png",
    desc: "Creamy rice pudding simmered in full cream milk with saffron and cardamom.",
    badge: "Home Style",
    badgeColor: "bg-pink-500",
  },
  {
    name: "Masala Chaas",
    category: "Dairy",
    img: "/products/chaas.png",
    desc: "Refreshing spiced buttermilk with cumin and mint — the perfect summer cooler.",
    badge: "Seasonal",
    badgeColor: "bg-cyan-600",
    fallbackEmoji: "🧋",
  },
  {
    name: "Kalakand",
    category: "Special",
    img: "/products/kalakand.png",
    desc: "Rich, grainy milk cake with the goodness of pure milk and minimal sugar.",
    badge: "Special",
    badgeColor: "bg-indigo-600",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const whatsappOrder = (productName: string) => {
    const msg = encodeURIComponent(
      `Hello! I'd like to order: *${productName}* from Shree Mahakali Dairy and Sweets. Please let me know the availability and pricing.`
    );
    window.open(`https://wa.me/917600585983?text=${msg}`, "_blank");
  };

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-5">
            Our Products
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Fresh &amp; Pure Products
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            From farm-fresh milk to handcrafted sweets — everything made with love and purity.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                  ? "bg-blue-700 text-white shadow-md shadow-blue-200"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-700 border border-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
            >
              <div className="relative overflow-hidden bg-gray-50 h-52">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = parent.querySelector('.fallback-emoji') as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }
                  }}
                />
                <div
                  className="fallback-emoji hidden absolute inset-0 items-center justify-center text-7xl bg-gradient-to-br from-blue-50 to-amber-50"
                >
                  {product.fallbackEmoji || "🍶"}
                </div>
                <span
                  className={`absolute top-3 left-3 text-white text-xs font-semibold px-2.5 py-1 rounded-full ${product.badgeColor} shadow-sm`}
                >
                  {product.badge}
                </span>
              </div>
              <div className="p-5">
                <span className="text-xs text-blue-600 font-medium">{product.category}</span>
                <h3 className="font-bold text-gray-900 mt-1 mb-2 text-base">{product.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{product.desc}</p>
                <button
                  onClick={() => whatsappOrder(product.name)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Order on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
