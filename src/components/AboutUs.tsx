export default function AboutUs() {

  const currentYear = new Date().getFullYear();
  const yearsOfTrust = currentYear - 1972;
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-blue-50 rounded-3xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-amber-50 rounded-3xl -z-10" />

            <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl overflow-hidden p-10 shadow-xl">
              <img
                src="/logo.png"
                alt="Shree Mahakali Dairy"
                className="w-full max-w-xs mx-auto block drop-shadow-2xl"
              />
              <div className="mt-8 grid grid-cols-3 gap-4 text-center border-t border-white/20 pt-6">
                {[
                  { val: `${yearsOfTrust}+`, label: "Years" },
                  { val: "2", label: "Branches" },
                  { val: "100%", label: "Pure" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-amber-400">{s.val}</p>
                    <p className="text-blue-200 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
              Our Story
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Pure Dairy Tradition<br />
              <span className="text-blue-700">Since 1972</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              Shree Mahakali Dairy and Sweets has been serving the community with the finest
              quality dairy products and traditional sweets — founded with a mission to deliver
              pure, fresh, and wholesome products directly to your family.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Every product we serve is carefully crafted using authentic recipes and the purest
              ingredients. No artificial flavors, no shortcuts — just the real thing, every time.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🥛", title: "Farm Fresh Milk", desc: "Sourced fresh every day" },
                { icon: "🧈", title: "Pure Desi Ghee", desc: "Traditional bilona method" },
                { icon: "🌿", title: "100% Natural", desc: "Zero artificial additives" },
                { icon: "🎁", title: "Festive Sweets", desc: "Handcrafted with love" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 bg-gray-50 hover:bg-blue-50 rounded-2xl p-4 transition-colors duration-200 border border-gray-100"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
