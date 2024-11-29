import React, { useEffect } from "react";
import "../css/main.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./Footer";
import Header from "./Header";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-triggered animations for sections
    gsap.utils.toArray(".panel").forEach((section) => {
      const elements = section.querySelectorAll(".animate");
      gsap.fromTo(
        elements,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Header />
      {/* Main Content */}
      <div className="font-sans text-gray-900 leading-relaxed bg-portPurple">
        <main className="pt-12 space-y-32 px-4 md:px-8 lg:px-16">
          {/* Section 1: Introduction */}
          <section id="section-1" className="panel py-16">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
              <div className="md:w-2/3 space-y-4">
                <p className="text-lg animate text-white">Hi, my name is,</p>
                <h1 className="text-4xl font-bold animate text-white">Kevin Lazo.</h1>
                <h2 className="text-3xl font-semibold animate text-white">I build things on the web.</h2>
                <p className="animate font-garamond text-white">
                  At my core I strive to be{" "}
                  <span className="text-portOrange font-semibold font-garamond">innovative</span>. I truly
                  believe in blending adjacent cultures into the world of web design. I
                  have a creative process grounded in integrity, discipline, and adaptability.
                </p>
                <p className="animate font-garamond text-white">
                  To help create my designs, I am{" "}
                  <span className="text-portOrange font-semibold font-garamond">inspired</span> by the world
                  around me. Inspiration can strike at any moment, and I diligently practice
                  my development skills so that I can produce my ideas into things people can
                  experience.
                </p>
              </div>
              <div className="md:w-1/3 flex-shrink-0 text-center">
                <img
                  src="/assets/aboutpicture1.png"
                  alt="My first experience at a zoo"
                  className="rounded-lg shadow-md w-full max-w-xs mx-auto md:max-w-sm animate"
                />
                <p className="text-portOrange text-sm mt-2 animate font-garamond font-semibold">
                  My first experience at a zoo
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Why Web Design */}
          <section id="section-2" className="panel py-16">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">
              <div className="md:w-1/3 flex-shrink-0 text-center">
                <img
                  src="/assets/aboutpicture2.png"
                  alt="My first personal computer"
                  className="rounded-lg shadow-md w-full max-w-xs mx-auto md:max-w-sm animate"
                />
                <p className="text-portOrange text-sm mt-2 font-garamond animate font-semibold">
                  My first personal computer at three years old
                </p>
              </div>
              <div className="md:w-2/3 space-y-4">
                <h2 className="text-2xl font-bold animate text-white">Why web design?</h2>
                <p className="animate font-garamond text-white">
                  The ability to tell a compelling story with technical skills, bridge the
                  gap between artistic expression and logical thinking. As both are important
                  in my life, I present a youthful excitement for{" "}
                  <span className="text-portOrange font-semibold font-garamond">continuous learning</span>{" "}
                  yet a refined view on managing projects.
                </p>
                <p className="animate font-garamond text-white">
                  My experience with web design is a blend of online hospitality and artistic
                  ability, focusing on creating and providing easy web experiences.
                </p>
                <p className="animate font-garamond text-white">
                  I used to be fascinated with the internet as a child, and I still am. I just keep learning more.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: What's Next */}
          <section id="section-3" className="panel py-16">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold animate text-white">So what now?</h2>
              <h3 className="text-3xl font-bold animate text-white">
                Creating is the best way to stay engaged with creativity.
              </h3>
              <p className="animate font-garamond text-white">
                A career in web design is fulfilling for me because I can serve others,
                provide a solution, and express a purpose. Being able to provide hospitality
                is one of my core values as a human being. Making others' lives easier by
                simply designing things well.
              </p>
              <p className="animate font-garamond text-white">
                For now, my goal is to apprentice as a junior developer at a company! If you
                are interested in connecting, let’s chat!
              </p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default About;