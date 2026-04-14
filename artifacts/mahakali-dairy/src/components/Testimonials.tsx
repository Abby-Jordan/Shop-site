const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    text: "I've been buying milk and paneer from Mahakali Dairy for years. The freshness and quality are unmatched. The ghee is absolutely divine — pure desi cow ghee just like my grandmother used to make!",
    rating: 5,
    initial: "P",
    color: "bg-blue-600",
  },
  {
    name: "Rajesh Patel",
    role: "Hotel Owner",
    text: "We source all our dairy needs from Shree Mahakali Dairy. Bulk orders are always delivered on time, quality is consistent, and the WhatsApp ordering is so convenient! Highly recommended for businesses.",
    rating: 5,
    initial: "R",
    color: "bg-amber-600",
  },
  {
    name: "Sunita Mehta",
    role: "Homemaker",
    text: "The sweets here are just heavenly! Rasgulla, kalakand, gulab jamun — everything is made with so much love. Their Diwali special boxes are my family's favorite gift every year.",
    rating: 5,
    initial: "S",
    color: "bg-green-600",
  },
  {
    name: "Arjun Joshi",
    role: "Fitness Enthusiast",
    text: "Pure, unprocessed milk with high protein content — exactly what I need for my daily nutrition. The curd is thick and natural. I feel confident knowing what I'm consuming is genuinely pure.",
    rating: 5,
    initial: "A",
    color: "bg-purple-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thousands of happy customers trust Shree Mahakali Dairy for their daily dairy needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-amber-50 rounded-2xl p-6 border border-amber-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
