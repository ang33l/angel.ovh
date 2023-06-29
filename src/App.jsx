import Navbar from "./components/navbar";
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Exp from "./components/sections/exp";
import Hero from "./components/sections/hero";
import Projects from "./components/sections/projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Exp />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
