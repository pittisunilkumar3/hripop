import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Journey from "./components/journey";
import Philosophy from "./components/philosophy";
import Worlds from "./components/worlds";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Lab from "./components/lab";
import Serve from "./components/serve";
import FinalCta from "./components/final-cta";
import Enquiry from "./components/enquiry";
import SiteFooter from "./components/site-footer";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <Philosophy />
        <Worlds />
        <Experience />
        <Projects />
        <Lab />
        <Serve />
        <FinalCta />
        <Enquiry />
      </main>
      <SiteFooter />
    </div>
  );
}
