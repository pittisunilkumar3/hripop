import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <Navbar />
      <Hero />
    </section>
  );
}
