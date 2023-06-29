import Wrapper from "../boxes/wrapper";
import Button from "../button";
import { FaLaptopCode } from "react-icons/fa";
import { useIntersection } from "@mantine/hooks";
import { useRef, useEffect } from "react";

export default function Hero({ reference }) {
  const refer = useRef(null);
  const { ref, entry } = useIntersection({
    root: refer.current,
    threshold: 1,
  });
  useEffect(() => {
    // Works!
    if (entry !== null) console.log(entry.isIntersecting); // logs <div>Hello, World!</div>
  }, []);
  return (
    <Wrapper ref={reference} id="hero">
      <div ref={refer} className={"px-5 py-24 flex min-h-[100dvh]"}>
        <div className={"flex-1 flex flex-col justify-center gap-8"}>
          <h1 className={"text-4xl font-bold text-center"}>
            Aleksander Marek /{" "}
            <span className={"text-primary"}>web developer</span>
          </h1>
          <p className={"text-2xl text-center"}>
            I am Fullstack Developer from Poland.
          </p>
          <div className={"flex justify-center gap-4"}>
            <Button type={"link"} to={"contact"} variant={"primary"}>
              Contact with me!
            </Button>
            <Button type={"link"} to={"projects"} variant={"secondary"}>
              Check out projects
            </Button>
          </div>
        </div>
        <div className={"flex-1 flex items-center justify-center"}>
          <FaLaptopCode
            className={
              "text-primary text-[25rem] hover:skew-y-3 transition-transform"
            }
          />
        </div>
      </div>
    </Wrapper>
  );
}
