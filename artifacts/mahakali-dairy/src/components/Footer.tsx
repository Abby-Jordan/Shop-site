import logoImg from "@assets/logo_1776168530282.jpeg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logoImg}
                alt="Shree Mahakali Dairy"
                className="w-14 h-14 object-contain rounded-lg"
              />
              <div>
                <p className="text-xs text-blue-300">Shree</p>
                <p className="text-base font-bold text-white leading-tight">Mahakali Dairy</p>
                <p className="text-xs text-amber-400">&amp; Sweets</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Serving pure, fresh, and wholesome dairy products and traditional sweets since decades.
              Trusted by thousands of families.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Our Products", href: "#products" },
                { label: "Our Branches", href: "#branches" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Products</h4>
            <ul className="space-y-2.5">
              {[
                "Fresh Milk",
                "Desi Cow Ghee",
                "Fresh Paneer",
                "Dahi / Curd",
                "Traditional Sweets",
                "Kheer & Mishti Doi",
                "Rasgulla & Gulab Jamun",
              ].map((product) => (
                <li key={product}>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Branch 1</p>
                <p className="text-gray-400 text-sm">123, Main Road, Near Temple Chowk,</p>
                <p className="text-gray-400 text-sm">Your City - 000000</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Branch 2</p>
                <p className="text-gray-400 text-sm">456, Market Complex, City Center,</p>
                <p className="text-gray-400 text-sm">Your City - 000001</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Phone / WhatsApp</p>
                <a href="tel:+919876543210" className="text-amber-400 text-sm hover:text-amber-300">+91 98765 43210</a>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Hours</p>
                <p className="text-gray-400 text-sm">Daily: 6:00 AM – 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            &copy; {currentYear} Shree Mahakali Dairy and Sweets. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Made with care for our valued customers
          </p>
        </div>
      </div>
    </footer>
  );
}
