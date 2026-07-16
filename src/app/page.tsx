import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Navigation bar */}
      <Navbar />

      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Value Proposition / 3-column Grid Section */}
        <Features />

        {/* Tabbed Menu Gallery Showcase */}
        <Menu />

        {/* Asymmetric Brand Story Section */}
        <About />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
