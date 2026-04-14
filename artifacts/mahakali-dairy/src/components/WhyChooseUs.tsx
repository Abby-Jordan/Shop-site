const features = [
  {
    icon: "🌿",
    title: "100% Natural",
    desc: "All our products are free from artificial colors, flavors, and preservatives. Pure as nature intended.",
  },
  {
    icon: "🐄",
    title: "Farm Fresh Daily",
    desc: "Milk sourced fresh every single morning from healthy, well-nourished cows. No storage, no dilution.",
  },
  {
    icon: "👨‍🍳",
    title: "Expert Craftsmen",
    desc: "Our sweets are handcrafted by experienced artisans using traditional recipes passed down generations.",
  },
  {
    icon: "✅",
    title: "Quality Certified",
    desc: "All products go through strict quality checks before reaching your hands. Consistency guaranteed.",
  },
  {
    icon: "🚚",
    title: "Timely Delivery",
    desc: "Fresh products delivered on time, every time. Place your order on WhatsApp and we'll take care of the rest.",
  },
  {
    icon: "💚",
    title: "Customer First",
    desc: "Your satisfaction is our priority. We value every customer and strive to exceed expectations always.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.8) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.6) 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Mahakali Dairy Promise
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            We've been earning trust with every drop of milk and every piece of sweet we serve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-400/20 flex items-center justify-center text-3xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to taste the difference?
            </h3>
            <p className="text-blue-200">
              Order fresh dairy products and sweets directly on WhatsApp — quick, easy, reliable.
            </p>
          </div>
          <a
            href="https://wa.me/919876543210?text=Hello!%20I%20would%20like%20to%20place%20an%20order%20from%20Shree%20Mahakali%20Dairy%20and%20Sweets."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Order Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
