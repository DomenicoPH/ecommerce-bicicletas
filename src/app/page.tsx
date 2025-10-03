import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import BikesGrid from "./components/BikesGrid";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Features />
      <BikesGrid />
      <Testimonials />
      <Footer />
    </main>
  );
}
