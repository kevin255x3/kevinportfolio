import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Resume = () => {
  return (
    <>
      <Header />

      {/* Full Resume */}
      <div className="bg-portPurple text-white font-sans min-h-screen w-full">
        {/* Resume Content */}
        <div className="py-8 px-4 md:px-8 max-w-7xl mx-auto grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold leading-tight ">KEVIN LAZO | he/him</h1>
              <h2 className="text-2xl">Front-end developer</h2>
            </div>

            {/* Contact Section */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg text-portOrange">CONTACT ME</h3>
              <p>hkevinlazo@gmail.com</p>
              <p>236-777-0049</p>
            </div>

            {/* Values Section */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg text-portOrange">MY VALUES</h3>
              <ul className="list-none space-y-1">
                <li>Creativity</li>
                <li>Engagement</li>
                <li>Integrity</li>
                <li>Punctuality</li>
                <li>Passion for work</li>
                <li>Curiosity</li>
                <li>Innovation</li>
                <li>Professionalism</li>
              </ul>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg text-portOrange">MY SKILLS</h3>
              <ul className="list-none space-y-1">
                <li>Retail management</li>
                <li>Retail design</li>
                <li>Merchandising</li>
                <li>Designing ideas & research for development</li>
                <li>Designing user interface models for development</li>
                <li>Visual communication & identity</li>
                <li>Mock-ups</li>
                <li>Moodboarding</li>
                <li>Layout design & grid system with HTML, CSS</li>
                <li>Design packages, presentations, and proposals</li>
              </ul>
            </div>

            {/* Languages Section */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg text-portOrange">LANGUAGES</h3>
              <p>English: +++++</p>
              <p>Tagalog: ++++</p>
            </div>

            {/* Software Section */}
            <div>
              <h3 className="font-semibold text-lg text-portOrange">SOFTWARES I USE & LEARNING</h3>
              <ul className="list-none space-y-1">
                <li>Photoshop</li>
                <li>Premiere Pro</li>
                <li>After Effects</li>
                <li>Illustrator</li>
                <li>Indesign</li>
                <li>Dimension</li>
                <li>Figma</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Vanilla JavaScript</li>
                <li>React.js</li>
                <li>Three.js</li>
                <li>GSAP</li>
                <li>*Apple User</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between">
            {/* Top Section with Image */}
            <div className="w-full mb-8 flex justify-center lg:justify-end">
              <img
                alt="Resume Decoration"
                src="/assets/resumedec.png"
                className="max-w-xs lg:max-w-sm h-auto"
              />
            </div>

            {/* Middle Section with Experience & Education */}
            <div className="space-y-12">
              {/* Experience Section */}
              <div>
                <h3 className="font-semibold text-lg text-right text-portOrange">MY EXPERIENCE AND WORK</h3>
                <ul className="list-none space-y-1 text-right">
                  <li>Sales Associate | New Balance | 2024</li>
                  <li>Floor Manager & Product Specialist | Reigning Champ | 2021 - 2024</li>
                  <li>Operations Lead | Holt Renfrew | 2019 - 2021</li>
                  <li>Sous Chef | Earls | 2017 - 2019</li>
                </ul>
              </div>

              {/* Education Section */}
              <div>
                <h3 className="font-semibold text-lg text-right text-portOrange">EDUCATION</h3>
                <ul className="list-none space-y-1 text-right">
                  <li>New Media Design and Web Development | BCIT | 2023 - 2025</li>
                  <li>Secondary School | Guildford Park | 2014 - 2019</li>
                </ul>
              </div>
            </div>

            {/* Links Section (Now at the bottom-right corner) */}
            <div className="mt-12 text-right">
              <h3 className="font-semibold text-lg text-portOrange">LINKS</h3>
              <ul className="list-none space-y-1">
                <li>
                  <a href="https://www.linkedin.com/in/kevin-lazo-280314285/" className="text-white hover:underline">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kevo.2121/" className="text-white hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Resume;