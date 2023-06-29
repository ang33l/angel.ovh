import Wrapper from "../boxes/wrapper";

export default function Exp({ reference }) {
  return (
    <Wrapper ref={reference} id={"exp"}>
      <div className={"px-5 py-10"}>
        <h2 className={"text-3xl pb-10"}>My experience</h2>
        <div className={"flex flex-col items-center justify-center "}>
          <div className="max-w-[900px] gap-10 flex flex-col">
            <div
              className={"flex gap-5 p-4 hover:bg-hoverDark transition-colors "}
            >
              <div className="flex-[2_2_0%]">
                <a
                  href={"https://weblance.pl"}
                  target="_blank"
                  className={"flex items-center gap-2 text-2xl"}
                >
                  <img
                    src="/weblance_logo.webp"
                    width={30}
                    alt="weblance logo"
                  />
                  Weblance
                </a>
                <div className={"text-lg"}>05.2023 – still working</div>
              </div>
              <div className="flex-[6_6_0%]">
                <h3 className="text-2xl underline">
                  Fullstack Developer (remote internship)
                </h3>
                <p className="text-justify">
                  Expansion with more functionalities of CRM system based on
                  React.js and Node.js.
                </p>
              </div>
            </div>
            <div
              className={"flex gap-5 p-4 hover:bg-hoverDark transition-colors "}
            >
              <div className="flex-[2_2_0%]">
                <a
                  href={"https://weblance.pl"}
                  target="_blank"
                  className={"flex items-center gap-2 text-2xl"}
                >
                  <img
                    src="/weblance_logo.webp"
                    width={30}
                    alt="weblance logo"
                  />
                  Weblance
                </a>
                <div className={"text-lg"}>12.2022 – 01.2023</div>
              </div>
              <div className="flex-[6_6_0%]">
                <h3 className="text-2xl underline">
                  Fullstack Developer (remote internship)
                </h3>
                <p className="text-justify">
                  The internship included working on building two websites with
                  Wordpress, learning the basics of React.js and Node.js to
                  start working on the company's CRM system, as well as working
                  on the system itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
