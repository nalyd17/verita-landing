import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Ingredients from "@/components/sections/Ingredients";
import Ritual from "@/components/sections/Ritual";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Ingredients />
      <Ritual />
      <Footer />
    </main>
  );
}
