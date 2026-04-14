import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import Branches from "@/components/Branches";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Products />
      <WhyChooseUs />
      <Branches />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
