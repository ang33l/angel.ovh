import { Link } from "react-scroll/modules";
import Wrapper from "../boxes/wrapper";

export default function Footer() {
  return (
    <Wrapper bg={true}>
      <div
        className={
          "px-5 py-10 flex flex-col lg:flex-row items-center lg:items-start gap-10"
        }
      >
        <div className="flex flex-col flex-1">
          <h4 className={"text-2xl font-semibold"}>
            Aleksander Marek /{" "}
            <span className={"text-primary"}>web developer</span>
          </h4>
          <p>Fullstack Developer from Poland</p>
          <p>Obviously created by me 😎</p>
          <p>Feel free to use this template for yourself 😉</p>
        </div>
        <div className="flex flex-[2_2_0%] gap-10">
          <div className="flex-1">
            <h4 className={"text-2xl font-semibold"}>Navigation</h4>
            <ul>
              <li>
                <Link to="hero" smooth={true} className={"text-xl underline"}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="hero" smooth={true} className={"text-xl underline"}>
                  About me
                </Link>
              </li>
              <li>
                <Link to="hero" smooth={true} className={"text-xl underline"}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="hero" smooth={true} className={"text-xl underline"}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="hero" smooth={true} className={"text-xl underline"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h4 className={"text-2xl font-semibold"}>Links</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/ang33l"
                  className={"text-xl underline"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aleksander-marek-pl/"
                  className={"text-xl underline"}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ang33l"
                  className={"text-xl underline"}
                  target="_blank"
                  rel="noreferrer"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
