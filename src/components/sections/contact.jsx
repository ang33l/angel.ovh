import Wrapper from "../boxes/wrapper";
import { MdMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Contact({ reference }) {
  return (
    <Wrapper ref={reference} id="contact">
      <div className={"px-5 py-10"}>
        <h2 className={"text-3xl pb-10"}>Contact with me</h2>
        <div className="flex gap-2 justify-center">
          <a
            href="mailto:contact@angel.ovh"
            className="p-3 border border-background flex flex-col items-center"
          >
            <MdMailOutline className="text-7xl" />
            CONTACT@ANGEL.OVH
          </a>
          <a
            href="https://github.com/ang33l"
            target="_blank"
            className="p-3 border border-background flex flex-col items-center"
          >
            <FaGithub className="text-7xl" />
            GITHUB.COM/ANG33L
          </a>
          <a
            href="https://www.linkedin.com/in/aleksander-marek-pl/"
            target="_blank"
            className="p-3 border border-background flex flex-col items-center"
          >
            <FaLinkedin className="text-7xl" />
            LINKEDIN
          </a>
        </div>
      </div>
    </Wrapper>
  );
}
