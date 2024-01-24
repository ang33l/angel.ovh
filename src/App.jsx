import Footer from "./components/footer";
import Navbar from "./components/navbar";
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Exp from "./components/sections/exp";
import Hero from "./components/sections/hero";
import Projects from "./components/sections/projects";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Exp />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
