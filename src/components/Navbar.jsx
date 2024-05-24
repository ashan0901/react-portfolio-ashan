import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import logo from "../assets/AshanLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6">
      <div className="flex items-center">
        <img className="w-10" src={logo} alt="logo" />
      </div>
      <div className="hidden md:flex space-x-4">
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="text-gray-300 hover:text-purple-800 cursor-pointer"
        >
          About Me
        </ScrollLink>
        <ScrollLink
          to="technologies"
          smooth={true}
          duration={500}
          className="text-gray-300 hover:text-purple-800 cursor-pointer"
        >
          Technologies
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="text-gray-300 hover:text-purple-800 cursor-pointer"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          className="text-gray-300 hover:text-purple-800 cursor-pointer"
        >
          Contact
        </ScrollLink>
      </div>
      <div className="md:hidden">
        <button
          className="text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="absolute top-16 right-4 bg-gray-900 shadow-lg rounded-lg p-4 md:hidden">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="block text-gray-300 hover:text-white cursor-pointer"
            onClick={() => setOpen(false)}
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="technologies"
            smooth={true}
            duration={500}
            className="block text-gray-300 hover:text-white cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Technologies
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="block text-gray-300 hover:text-white cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="block text-gray-300 hover:text-white cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
