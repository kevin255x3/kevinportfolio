import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * The Header component is a navigational bar that includes a logo and a menu button.
 * 
 * It manages the state of the menu's visibility using the `menuOpen` state.
 * When the menu button is clicked, the `toggleMenu` function is triggered to show or hide
 * the dropdown menu. The dropdown menu contains links to different sections of the website.
 * 
 * @returns {JSX.Element} A header element with navigation links.
 */
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative bg-purple-600 text-white z-10">
      {/* Navigation */}
      <div className="flex justify-between items-center p-4 bg-portPurple">
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="Kevin Logo"
            className="w-16 h-auto"
            id="logo"
          />
        </Link>

        {/* Menu Button (Always Visible) */}
        <button
          id="menu-btn"
          className="border border-white px-4 py-1 rounded-lg text-white hover:bg-portOrange hover:text-white transition"
          onClick={toggleMenu}
        >
          {menuOpen ? "Close Menu" : "Menu"}
        </button>
      </div>

      {/* Dropdown Menu (Accessible via Button) */}
      <div
        className={`absolute top-20 right-4 bg-white text-purple-600 rounded-lg shadow-lg transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col divide-y divide-gray-300">
          <li>
            <Link
              to="/about"
              className="block px-6 py-3 hover:bg-portOrange hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block px-6 py-3 hover:bg-portOrange hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="block px-6 py-3 hover:bg-portOrange hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-6 py-3 hover:bg-portOrange hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;