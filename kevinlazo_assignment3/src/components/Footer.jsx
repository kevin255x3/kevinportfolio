import React from "react";
import { Link } from "react-router-dom";

// Universal Footer Component

/**
 * The Footer component renders a universal footer for the website.
 * It includes decorative images and navigation links to the contact,
 * projects, and resume pages. The footer is styled with a purple
 * background and adjusts layout for different screen sizes.
 */
const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap justify-center md:justify-between items-center gap-4 p-4 py-20 bg-portPurple">
        <img
          src="/assets/footdecor.png"
          className="w-16 h-auto md:w-20"
          alt="Decoration"
        />
        <Link to="/contact" className="font-bold text-sm md:text-lg text-white">
          CONTACT
        </Link>
        <img
          src="/assets/footdecor.png"
          className="w-16 h-auto md:w-20"
          alt="Decoration"
        />
        <Link to="/projects" className="font-bold text-sm md:text-lg text-white">
          PROJECTS
        </Link>
        <img
          src="/assets/footdecor.png"
          className="w-16 h-auto md:w-20"
          alt="Decoration"
        />
        <Link to="/resume" className="font-bold text-sm md:text-lg text-white">
          RESUME
        </Link>
        <img
          src="/assets/footdecor.png"
          className="w-16 h-auto md:w-20"
          alt="Decoration"
        />
      </footer>
    </>
  );
};

export default Footer;