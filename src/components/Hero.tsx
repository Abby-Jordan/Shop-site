export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        background: "linear-gradient(160deg, #0d2b6b 0%, #1553b5 45%, #1e6ac7 75%, #0f3580 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-blue-300/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
          <div className="text-white text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-blue-100 font-medium mb-6">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></span>
              Pure. Fresh. Wholesome.
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4">
              Shree<br />
              <span className="text-amber-400">Mahakali</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-200 mb-6">
              Dairy &amp; Sweets
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Farm-fresh dairy and handcrafted traditional sweets — crafted with love,
              served with purity since decades. Trusted by thousands of families.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Products
              </a>
              <a
                href="https://wa.me/917600585983?text=Hello!%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Order on WhatsApp
              </a>
            </div>

            <div className="mt-12 flex gap-10 justify-center lg:justify-start">
              {[
                { value: "25+", label: "Years of Trust" },
                { value: "2", label: "Branches" },
                { value: "100%", label: "Pure Quality" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-amber-400">{stat.value}</p>
                  <p className="text-blue-200 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl scale-110" />
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 shadow-2xl">
                <img
                  src="/logo.png"
                  alt="Shree Mahakali Dairy and Sweets"
                  className="w-72 h-72 object-contain drop-shadow-2xl"
                />
                <div className="mt-6 text-center">
                  <p className="text-white font-bold text-xl">Shree Mahakali Dairy</p>
                  <p className="text-amber-300 text-sm mt-1">&amp; Sweets — Purity You Can Taste</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 70" className="w-full fill-white">
          <path d="M0,35 C480,70 960,0 1440,35 L1440,70 L0,70 Z" />
        </svg>
      </div>
    </section>
  );
}
