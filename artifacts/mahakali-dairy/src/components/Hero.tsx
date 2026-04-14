import logoImg from "@assets/logo_1776168530282.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, #1a3a6b 0%, #1e5aa8 40%, #2471c8 70%, #1a3a6b 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 bg-white"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
              animation: `pulse ${3 + i * 0.5}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-xl scale-110" />
            <img
              src={logoImg}
              alt="Shree Mahakali Dairy and Sweets"
              className="relative w-40 h-40 sm:w-52 sm:h-52 object-contain drop-shadow-2xl animate-fade-in"
            />
          </div>

          <div className="text-white animate-fade-in-up">
            <p className="text-amber-300 font-semibold text-lg sm:text-xl tracking-widest uppercase mb-2">
              Welcome to
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3">
              Shree Mahakali
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-amber-300 mb-4">
              Dairy &amp; Sweets
            </h2>
            <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Pure, fresh, and wholesome dairy products delivered with love. From creamy milk to
              traditional sweets — taste the difference of quality you can trust.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <a
              href="#products"
              className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold px-8 py-3.5 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Explore Products
            </a>
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20place%20an%20order%20from%20Shree%20Mahakali%20Dairy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3.5 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Order on WhatsApp
            </a>
          </div>

          <div className="flex gap-8 sm:gap-16 text-white text-center mt-4 animate-fade-in">
            {[
              { value: "25+", label: "Years Experience" },
              { value: "2", label: "Branches" },
              { value: "100%", label: "Pure Quality" },
              { value: "500+", label: "Happy Customers" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-amber-300">{stat.value}</p>
                <p className="text-xs sm:text-sm text-blue-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full fill-amber-50">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
