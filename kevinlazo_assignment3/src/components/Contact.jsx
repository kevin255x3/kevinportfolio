import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/main.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import "../css/main.css";

const Contact = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Interactive hover effect for "flowerbg"
      const flowerBg = document.querySelector(".flowerbg");
      if (flowerBg) {
        const flowerBgAnimation = gsap.to(flowerBg, {
          rotation: 360,
          duration: 5,
          repeat: -1,
          paused: true,
          ease: "linear",
        });

        flowerBg.addEventListener("mouseenter", () => flowerBgAnimation.play());
        flowerBg.addEventListener("mouseleave", () => flowerBgAnimation.pause());
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-portPurple bg-blend-normal">
        <div className="flex flex-col min-h-screen px-6 md:px-16 lg:px-32 text-gray-900 font-sans">
          {/* Main Content */}
          <main className="flex flex-col md:flex-row gap-10 mt-10 relative main-content ">
            {/* Left Sidebar */}
            <aside className="flex-1 md:max-w-sm space-y-6 relative z-10">
              {/* Things I Do */}
              <section>
                <h2 className="text-portOrange font-bold mb-2 ">Things I do & learn</h2>
                <ul className="text-sm space-y-1 font-garamond font-bold text-white">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>
                  <li>GSAP</li>
                  <li>THREE.JS</li>
                </ul>
              </section>

              {/* Things I Use */}
              <section>
                <h2 className="text-portOrange font-bold mb-2">Things I use</h2>
                <ul className="text-sm space-y-1 font-garamond font-bold text-white">
                  <li>PREMIERE PRO</li>
                  <li>AFTER EFFECTS</li>
                  <li>ILLUSTRATOR</li>
                  <li>PHOTOSHOP</li>
                  <li>DIMENSION</li>
                  <li>FIGMA</li>
                  <li>VISUAL STUDIO CODE</li>
                </ul>
              </section>

              {/* Clients & Projects */}
              <section>
                <h2 className="text-portOrange font-bold mb-2">Clients & Projects</h2>
                <ul className="text-sm space-y-1 font-garamond font-bold text-white">
                  <li>DOUBLEBACK VINTAGE</li>
                  <li>NEWTOWN VINTAGE</li>
                  <li>BALDYLOX VINTAGE</li>
                </ul>
              </section>

              {/* Links */}
              <section>
                <h2 className="text-portOrange font-bold mb-2 ">Links</h2>
                <ul className="text-sm space-y-1 font-garamond font-bold text-white">
                  <li><a href="https://www.linkedin.com/in/kevin-lazo-280314285/" > LINKEDIN </a> </li>
                  <li><a href="https://www.are.na/kevin-lazo/channels" > AREN.NA </a> </li>
                  <li><a href="https://www.youtube.com/@dinnereservations" > YOUTUBE </a></li>
                </ul>
              </section>

              {/* My Interests */}
              <section>
                <h2 className="text-portOrange font-bold mb-2">My interests</h2>
                <ul className="text-sm space-y-1 font-garamond font-bold text-white">
                  <li>WEB DESIGN</li>
                  <li>WEB ANIMATIONS</li>
                  <li>VIDEO STORYTELLING</li>
                  <li>PRODUCT DESIGN</li>
                  <li>AUDIO ENGINEER</li>
                  <li>FASHION SHOOTS</li>
                  <li>SPORTS HIGHLIGHTS</li>
                  <li>BRAND CONCEPTS</li>
                  <li>MAGAZINE PRINTS</li>
                  <li>COPYWRITING</li>
                </ul>
              </section>
            </aside>

            {/* Main Section */}
            <section className="flex-[2] relative">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/assets/valuesdec.png"
                  alt="Background"
                  className="w-full flowerbg z-10 xl:h-[95%]"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-4 text-white">I enjoy</h1>
                <h2 className="text-4xl font-bold text-white mb-8 ">
                  Web Development <br />
                  Visual Storytelling
                </h2>

                {/* Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h3 className="text-portOrange font-bold mb-2">creativity</h3>
                    <ul className="space-y-1 font-garamond font-bold text-white">
                      <li>Mood boarding</li>
                      <li>Storyboarding</li>
                      <li>Brand identity</li>
                      <li>Merchandising</li>
                      <li>Mockups</li>
                      <li>Color correction</li>
                      <li>Graphic design</li>
                      <li>Visual communication</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-portOrange font-bold mb-2 ">development</h3>
                    <ul className="space-y-1 font-garamond font-bold text-white">
                      <li>HTML structure</li>
                      <li>CSS styling</li>
                      <li>CSS grid</li>
                      <li>Javascript function</li>
                      <li>Semantic code</li>
                      <li>React component building</li>
                      <li>Three JS basics</li>
                      <li>GSAP animation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-portOrange font-bold mb-2">business</h3>
                    <ul className="space-y-1 font-garamond font-bold text-white">
                      <li>Retail management</li>
                      <li>Guest experience</li>
                      <li>Product knowledge</li>
                      <li>Merchandising</li>
                      <li>Cash handling</li>
                      <li>Negotiation</li>
                      <li>Order fulfillment</li>
                      <li>Retail operations</li>
                    </ul>
                  </div>
                </div>

                {/* Form Section */}
                <section className="mt-10">
                  <h3 className="text-xl font-bold mb-2 text-portOrange">Let's work</h3>
                  <p className="text-sm mb-4 text-white">Hi, I'm looking forward to meeting you!</p>
                  <form className="space-y-4">
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      rows="4"
                      placeholder="What can I help you with?"
                    ></textarea>
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Your email address"
                    />
                    <button
                      type="submit"
                      className="bg-portOrange text-white py-2 px-4 rounded-lg hover:bg-white hover:text-portPurple transition"
                    >
                      All good!
                    </button>
                  </form>
                </section>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;