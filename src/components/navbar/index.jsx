import Wrapper from "../boxes/wrapper";
import { useRef, useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  //nav transparency
  const [val, setVal] = useState(0);
  const [padding, setPadding] = useState(20);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position < 255) {
      setVal(position / 255 / 2);
    } else {
      setVal(0.5);
    }
    if (position <= 200) {
      setPadding(20 - position / 10);
    } else {
      setPadding(0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //active link
  const [activeSection, setActiveSection] = useState("hero");
  const sections = useRef([]);

  const handleActiveLink = () => {
    const pageYOffset = window.pageYOffset;
    const windowHeight = window.innerHeight;

    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionOffsetBottom = sectionOffsetTop + sectionHeight;

      if (
        (pageYOffset >= sectionOffsetTop &&
          pageYOffset < sectionOffsetBottom) ||
        (sectionOffsetTop >= pageYOffset &&
          sectionOffsetBottom <= pageYOffset + windowHeight)
      ) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll("[data-section]");
    window.addEventListener("scroll", handleActiveLink);

    return () => {
      window.removeEventListener("scroll", handleActiveLink);
    };
  }, []);
  return (
    <Wrapper
      className={`z-10 fixed`}
      style={{ backgroundColor: `rgba(0,0,0,${val})` }}
    >
      <div
        className={"px-5"}
        style={{ paddingTop: `${padding}px`, paddingBottom: `${padding}px` }}
      >
        <div className={"flex justify-between items-center"}>
          <div
            className={
              "text-5xl text-text font-semibold hover:text-primary transition-colors"
            }
          >
            <a href="/">./ANGEL</a>
          </div>
          <div className={"text-3xl flex gap-10 text-text"}>
            <Link
              to="hero"
              smooth={true}
              className={
                activeSection === "hero" ? "text-primary font-semibold" : ""
              }
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              className={
                activeSection === "about" ? "text-primary font-semibold" : ""
              }
            >
              About me
            </Link>
            <Link
              to="exp"
              smooth={true}
              className={
                activeSection === "exp" ? "text-primary font-semibold" : ""
              }
            >
              Experience
            </Link>
            <Link
              to="projects"
              smooth={true}
              className={
                activeSection === "projects" ? "text-primary font-semibold" : ""
              }
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              className={
                activeSection === "contact" ? "text-primary font-semibold" : ""
              }
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
