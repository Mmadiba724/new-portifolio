import Hero from "@/section/Hero";
import Navbar from "@/layout/Navbar";
import About from "@/section/About";
import Experience from "@/section/Experience";
import Projects from "@/section/Projects";
import Testimonials from "@/section/Testimonials";
import { Contact } from "@/section/Contact";

function App() {
  return (
    <div
      className={`min-h-screen overflow-x-hidden bg-background text-foreground`}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
