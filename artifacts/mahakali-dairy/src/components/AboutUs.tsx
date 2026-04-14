import logoImg from "@assets/logo_1776168530282.jpeg";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-5">
              Pure Dairy Tradition Since Decades
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5">
              Shree Mahakali Dairy and Sweets has been serving the community with the finest
              quality dairy products and traditional sweets. Founded with a mission to deliver
              pure, fresh, and wholesome products directly to your doorstep.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Every drop of milk we serve is carefully sourced from healthy, well-cared-for cows.
              Our sweets are crafted with authentic recipes passed down through generations,
              using only the purest ingredients — no artificial flavors, no shortcuts.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🥛", title: "Pure Milk", desc: "Fresh from farm every day" },
                { icon: "🧈", title: "Pure Ghee", desc: "Made with traditional method" },
                { icon: "🍯", title: "Natural Products", desc: "No artificial additives" },
                { icon: "🎁", title: "Festive Sweets", desc: "Traditional recipes, modern taste" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-blue-900 text-sm">{item.title}</h4>
                  <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-blue-100 opacity-60" />
            <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-amber-100 opacity-60 translate-x-6 translate-y-6" />
            <div className="relative z-10 bg-white rounded-3xl shadow-xl p-8 max-w-sm">
              <img
                src={logoImg}
                alt="Shree Mahakali Dairy"
                className="w-full h-auto object-contain rounded-2xl"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-blue-900">Shree Mahakali Dairy</h3>
                <p className="text-amber-600 font-medium">&amp; Sweets</p>
                <p className="text-gray-500 text-sm mt-2">Trusted by families across the region</p>
              </div>
              <div className="mt-4 flex justify-center gap-6 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-700">25+</p>
                  <p className="text-xs text-gray-500">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-700">2</p>
                  <p className="text-xs text-gray-500">Branches</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-700">100%</p>
                  <p className="text-xs text-gray-500">Pure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
