import { CONTACT } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 id="contact" className="my-20 text-center text-4xl">
        Get in Touch
      </h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p href="#" className="my-4">
          {CONTACT.email}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:mt-12 lg:mb-24">
          <a
            href="https://www.facebook.com/profile.php?id=100008487134621&mibextid=LQQJ4d"
            target="_blank"
          >
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaFacebook className="text-7xl text-white-500" />
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/ashan-fernando-06960b222/"
            target="_blank"
          >
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaLinkedin className="text-7xl text-white-600" />
            </div>
          </a>

          <a href="https://github.com/ashan0901" target="_blank">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaGithub className="text-7xl text-white-800" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
