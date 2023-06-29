import { FaPhp, FaSkiing } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { GiCycling } from "react-icons/gi";
import { GrCloudComputer } from "react-icons/gr";
import { BiSwim, BiLogoFlutter } from "react-icons/bi";
import Wrapper from "../boxes/wrapper";

export default function About({ reference }) {
  return (
    <Wrapper ref={reference} bg={true} id="about">
      <div className={"px-5 py-10"}>
        <h2 className={"text-3xl pb-10"}>Few words about me...</h2>

        <div className={"flex gap-10 justify-between text-center"}>
          <div className={"flex-1"}>
            <h3 className={"text-2xl border-b-2 border-primary pb-2"}>
              Education
            </h3>
            <div
              className={
                "flex gap-2 p-4 items-center text-lg hover:bg-hover transition-colors"
              }
            >
              <div
                className={
                  "w-[60px] h-[60px] bg-date text-text p-2 rounded-[30px] flex items-center justify-center text-xl"
                }
              >
                2020
              </div>
              <p>Completion of an IT technical school</p>
            </div>
            <div
              className={
                "flex gap-2 p-4 items-center text-lg hover:bg-hover transition-colors"
              }
            >
              <div
                className={
                  "w-[60px] h-[60px] bg-date text-text p-2 rounded-[30px] flex items-center justify-center text-xl"
                }
              >
                2020
              </div>
              <p>Start of IT college</p>
            </div>
            <div
              className={
                "flex gap-2 p-4 items-center text-lg hover:bg-hover transition-colors"
              }
            >
              <div
                className={
                  "w-[60px] h-[60px] bg-date text-text p-2 rounded-[30px] flex items-center justify-center text-xl"
                }
              >
                2024
              </div>
              <p>
                End of IT college{" "}
                <span className={" px-1 bg-green rounded-md text-text"}>
                  soon
                </span>
              </p>
            </div>
          </div>
          <div className={"flex-1"}>
            <h3 className={"text-2xl border-b-2 border-primary pb-2"}>
              Languages learned
            </h3>

            <div
              className={
                "flex justify-center gap-2 p-4 items-center text-lg hover:bg-hover transition-colors"
              }
            >
              <div
                className={
                  "w-[60px] h-[60px]  text-text p-2 rounded-[30px] flex items-center justify-center text-xl"
                }
              >
                <img src="/js.svg" alt="js-logo" width={40} height={40} />
              </div>
              <p>JavaScript (Node.js, React.js, Next.js)</p>
            </div>
            <div
              className={
                "flex justify-center gap-2 p-4 items-center text-lg hover:bg-hover transition-colors"
              }
            >
              <div
                className={
                  "w-[60px] h-[60px] text-text p-2 rounded-[30px] flex items-center justify-center text-xl"
                }
              >
                <FaPhp className={"text-7xl text-[#787CB5]"} />
              </div>
              <p>PHP and CodeIgniter framework</p>
            </div>

            <div
              className={
                "flex justify-center gap-2 p-4 items-center text-lg hover:bg-hover transition-colors"
              }
            >
              <div
                className={
                  "w-[60px] h-[60px]  text-text p-2 rounded-[30px] flex items-center justify-center text-xl"
                }
              >
                <BsCodeSlash className={"text-7xl text-secondary"} />
              </div>
              <p>Basics of C++, Python, Bash</p>
            </div>
            <div
              className={
                "flex justify-center gap-2 p-4 items-center text-lg hover:bg-hover transition-colors"
              }
            >
              <div
                className={
                  "w-[60px] h-[60px]  text-text p-2 rounded-[30px] flex items-center justify-center text-xl"
                }
              >
                <SiMysql className={"text-7xl text-primary"} />
              </div>
              <p>SQL languages</p>
            </div>
            <div
              className={
                "flex justify-center gap-2 p-4 items-center text-lg hover:bg-hover transition-colors"
              }
            >
              <div
                className={
                  "w-[60px] h-[60px]  text-text p-2 rounded-[30px] flex items-center justify-center text-xl"
                }
              >
                <BiLogoFlutter className={"text-7xl text-[#54c0f4]"} />
              </div>
              <p>Dart (Flutter)</p>
            </div>
          </div>
          <div className={"flex-1"}>
            <h3 className={"text-2xl border-b-2 border-primary pb-2"}>
              Interests
            </h3>
            <div
              className={
                "flex justify-end gap-2 p-4 items-center text-lg hover:bg-hover transition-colors"
              }
            >
              <p>Variously swimming</p>
              <div
                className={
                  "w-[60px] h-[60px] text-text p-2 rounded-[30px] flex items-center justify-center text-xl"
                }
              >
                <BiSwim className={"text-7xl text-secondary"} />
              </div>
            </div>
            <div
              className={
                "flex justify-end gap-2 p-4 items-center text-lg hover:bg-hover transition-colors"
              }
            >
              <p>Mountain biking</p>
              <div
                className={
                  "w-[60px] h-[60px] text-text p-2 rounded-[30px] flex items-center justify-center text-xl"
                }
              >
                <GiCycling className={"text-7xl text-primary"} />
              </div>
            </div>
            <div
              className={
                "flex justify-end gap-2 p-4 items-center text-lg hover:bg-hover transition-colors"
              }
            >
              <p>Skiing</p>
              <div
                className={
                  "w-[60px] h-[60px] text-text p-2 rounded-[30px] flex items-center justify-center text-xl"
                }
              >
                <FaSkiing className={"text-7xl text-accent"} />
              </div>
            </div>
            <div
              className={
                "flex justify-end gap-2 p-4 items-center text-lg hover:bg-hover transition-colors"
              }
            >
              <p>IT</p>
              <div
                className={
                  "w-[60px] h-[60px] text-text p-2 rounded-[30px] flex items-center justify-center text-xl"
                }
              >
                <GrCloudComputer className={"text-7xl text-background"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
