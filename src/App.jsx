import { useIntersection } from "@mantine/hooks";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import About from "./components/sections/about";
import Contact from "./components/sections/contact";
import Exp from "./components/sections/exp";
import Hero from "./components/sections/hero";
import Projects from "./components/sections/projects";
import { useRef, useEffect } from "react";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const { ref, entry } = useIntersection({
    root: heroRef.current,
    threshold: 1,
  });
  useEffect(() => {
    // Works!
    if (entry !== null) console.log(entry.isIntersecting); // logs <div>Hello, World!</div>
  }, [entry]);
  return (
    <>
      <Navbar />
      <Hero reference={heroRef} />
      {entry?.isIntersecting
        ? console.log("Fully visible")
        : console.log("Obscured")}
      <About reference={aboutRef} />
      <Exp reference={expRef} />
      <Projects reference={projectsRef} />
      <Contact reference={contactRef} />
      <Footer />
    </>
  );
}

export default App;
