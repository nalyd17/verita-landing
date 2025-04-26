import About from "@/sections/About";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Ingredients from "@/sections/Ingredients";
import Ritual from "@/sections/Ritual";

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
