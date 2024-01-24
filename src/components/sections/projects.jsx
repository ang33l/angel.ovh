import Wrapper from "../boxes/wrapper";
import { GoLinkExternal } from "react-icons/go";
import { MdOutlineHideImage } from "react-icons/md";

export default function Projects() {
  return (
    <Wrapper id="projects" bg={true}>
      <div className={"px-5 py-10"}>
        <h2 className={"text-3xl pb-10"}>Projects I have implemented</h2>
        <div className={"flex flex-col items-center justify-center "}>
          <div className="max-w-[900px] gap-10 flex flex-col">
            <a
              href="https://github.com/ang33l/online-songbook"
              target="_blank"
              rel="noreferrer"
              className={"flex gap-5 p-4 hover:bg-hover transition-colors "}
            >
              <div className="flex-[4_4_0%]">
                <img
                  className="object-cover"
                  src="/online-songbook.png"
                  alt="songbook image"
                  loading="lazy"
                />
              </div>
              <div className="flex-[12_12_0%]">
                <h3 className="text-2xl underline">
                  Online songbook (Next.js, Shadcn, Convex)
                </h3>
                <p className="text-lg text-justify">
                  App created for personal needs. It&apos;s a songbook with
                  adding and managing system.
                </p>
              </div>
              <GoLinkExternal className="flex-1 self-center" />
            </a>
            <a
              href="https://github.com/ang33l/cyfrowa-ksiega-gosci"
              target="_blank"
              rel="noreferrer"
              className={"flex gap-5 p-4 hover:bg-hover transition-colors "}
            >
              <div className="flex-[4_4_0%]">
                <img
                  className="object-cover"
                  src="/ckg.jpg"
                  alt="ckg image"
                  loading="lazy"
                />
              </div>
              <div className="flex-[12_12_0%]">
                <h3 className="text-2xl underline">
                  Digital guestbook (Next.js, Convex)
                </h3>
                <p className="text-lg text-justify">
                  App created for engineering thesis. It's complex aplication
                  with db, file storage, auth system for 3 independent user
                  types: guest, admin and employee. Every of them have different
                  functionalities.
                </p>
              </div>
              <GoLinkExternal className="flex-1 self-center" />
            </a>
            <a
              href="https://github.com/ang33l/pkp"
              target="_blank"
              rel="noreferrer"
              className={"flex gap-5 p-4 hover:bg-hover transition-colors "}
            >
              <div className="flex-[4_4_0%]">
                <img
                  className="object-cover"
                  src="/pkp.jpg"
                  alt="manssanger image"
                  loading="lazy"
                />
              </div>
              <div className="flex-[12_12_0%]">
                <h3 className="text-2xl underline">
                  PKP Online (PHP + CodeIgniter)
                </h3>
                <p className="text-lg text-justify">
                  App created for &apos;Databases&apos; classes. Trains and
                  tickets managment.
                </p>
              </div>
              <GoLinkExternal className="flex-1 self-center" />
            </a>
            <a
              href="https://github.com/ang33l/CCTV_Online"
              target="_blank"
              rel="noreferrer"
              className={"flex gap-5 p-4 hover:bg-hover transition-colors "}
            >
              <div className="flex-[4_4_0%] flex items-center justify-center text-8xl">
                <MdOutlineHideImage />
              </div>
              <div className="flex-[12_12_0%]">
                <h3 className="text-2xl underline">
                  CCTV Online (PHP + CodeIgniter)
                </h3>
                <p className="text-lg text-justify">
                  Web application made for remote managment of Raspberry
                  Picamera as regular CCTV app. Made for needs of &apos;Smart
                  buildings systems&apos; classes. Created with CodeIgniter3 PHP
                  framework and Python3.
                </p>
              </div>
              <GoLinkExternal className="flex-1 self-center" />
            </a>
            <a
              href="https://github.com/ang33l/mANSsanger"
              target="_blank"
              rel="noreferrer"
              className={"flex gap-5 p-4 hover:bg-hover transition-colors "}
            >
              <div className="flex-[4_4_0%]">
                <img
                  className="object-cover"
                  src="/manssanger.jpg"
                  alt="manssanger image"
                  loading="lazy"
                />
              </div>
              <div className="flex-[12_12_0%]">
                <h3 className="text-2xl underline">mANSsanger (Flutter)</h3>
                <p className="text-lg text-justify">
                  Flutter app created for notification system for high school
                  (ANS - Akademia Nauk Stosowanych w Nowym Sączu) with use of
                  Firebase system.
                </p>
              </div>
              <GoLinkExternal className="flex-1 self-center" />
            </a>
            <a
              href="https://github.com/ang33l/angel.ovh"
              target="_blank"
              rel="noreferrer"
              className={"flex gap-5 p-4 hover:bg-hover transition-colors "}
            >
              <div className="flex-[4_4_0%]">
                <img
                  className="object-cover"
                  src="/portfolio.jpg"
                  alt="manssanger image"
                  loading="lazy"
                />
              </div>
              <div className="flex-[12_12_0%]">
                <h3 className="text-2xl underline">
                  This portfolio website (React.js + Tailwind.css)
                </h3>
                <p className="text-lg text-justify">
                  My portfolio website created with react.js and tailwind.css
                  after hours.
                </p>
              </div>
              <GoLinkExternal className="flex-1 self-center" />
            </a>
            <a
              href="https://exegir.pl"
              target="_blank"
              rel="noreferrer"
              className={"flex gap-5 p-4 hover:bg-hover transition-colors "}
            >
              <div className="flex-[4_4_0%]">
                <img
                  className="object-cover"
                  src="/exegir.jpg"
                  alt="manssanger image"
                  loading="lazy"
                />
              </div>
              <div className="flex-[12_12_0%]">
                <h3 className="text-2xl underline">
                  Website for general construction company
                </h3>
                <p className="text-lg text-justify">
                  Website created in plain HTML + CSS as a basic showcase for
                  general construction company.
                </p>
              </div>
              <GoLinkExternal className="flex-1 self-center" />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
