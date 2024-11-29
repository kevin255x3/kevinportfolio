import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import "../css/main.css";


/**
 * The Home component is the main landing page for the website.
 * It contains a header with a navigation menu,
 * a main content section with links to the other pages,
 * and a footer with links to social media and contact information.
 *
 * The menu button toggles the visibility of the menu,
 * and the links in the menu are routed to the respective pages.
 *
 * The main content section has a perspective effect on the text.
 * The flower logo is animated on hover.
 *
 * The footer has links to social media and contact information.
 *
 * @returns A React component representing the home page.
 */
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide logo from left on page load
      gsap.from("#logo", { opacity: 0, x: -50, duration: 1 });

      // On page animation, fade in headers
      gsap.from("#content h1", { opacity: 0, y: 30, duration: 1, stagger: 0.3 });

      // Scale flower logo
      gsap.from("#flower", { opacity: 0, scale: 0.5, duration: 1, delay: 1 });

      // Interactive hover effect for "flowerboy"
      const flower = document.getElementById("flower");
      const flowerAnimation = gsap.to(flower, {
        rotation: 360,
        duration: 5,
        repeat: -1,
        paused: true,
        ease: "linear",
      });

      flower.addEventListener("mouseenter", () => flowerAnimation.play());
      flower.addEventListener("mouseleave", () => flowerAnimation.pause());
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-portPurple text-white font-sans flex flex-col min-h-screen">
      <header className="relative bg-purple-600 text-white z-10">
        <div className="flex justify-between items-center p-4 bg-portPurple">
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt="Kevin Logo"
              className="w-16 h-auto"
              id="logo"
            />
          </Link>
          <button
            id="menu-btn"
            className="border border-white px-4 py-1 rounded-lg text-white hover:bg-portOrange hover:text-white transition"
            onClick={toggleMenu}
          >
            {menuOpen ? "Close Menu" : "Menu"}
          </button>
        </div>

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

      <main className=" perspective-container flex flex-col sm:flex-row justify-center items-center main-content text-center p-6 sm:p-12 space-y-8 sm:space-y-0">
        <div id="content" className="perspective-text space-y-8 sm:mr-8 text-center sm:text-left">
          <Link to="/about" className="header-link">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-wide hover:text-portOrange lowercase" id="about">
              ABOUT ME
            </h1>
          </Link>
          <Link to="/projects" className="header-link">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-wide hover:text-portOrange lowercase" id="projects">
              PROJECTS
            </h1>
          </Link>
          <Link to="/contact" className="header-link">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-wide hover:text-portOrange lowercase" id="contact">
              CONTACT ME
            </h1>
          </Link>
          <Link to="/resume" className="header-link">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-wide hover:text-portOrange lowercase" id="values">
              RESUME
            </h1>
          </Link>
        </div>
        <div>
          <img src="/assets/flowerboy.png" alt="flowerboy" className="w-32 sm:w-48 h-auto" id="flower" />
        </div>
      </main>

      <footer className="flex flex-col sm:flex-row justify-between items-center p-4">
        <p className="font-garamond font-bold">KEVIN LAZO</p>
        <p className="font-garamond font-bold">Front end designer</p>
        <div className="space-x-4 mt-4 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/kevin-lazo-280314285/"
            className="hover:underline font-bold font-garamond"
          >
            LINKEDIN
          </a>
          <a
            href="https://www.instagram.com/kevo.2121/"
            className="hover:underline font-bold font-garamond"
          >
            INSTAGRAM
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;