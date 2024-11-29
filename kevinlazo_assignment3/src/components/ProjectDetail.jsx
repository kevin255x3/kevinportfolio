import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/**
 * The ProjectDetail component displays a project's details when the user navigates to /projects/:id.
 *
 * The component fetches the project details from the projects array based on the id passed from the route.
 * If the project does not exist in the array, it displays a "Project not found" message.
 *
 * The component displays the project details in a format that is visually appealing and easy to read.
 * The details include the project title, synopsis, client, went well, challenges faced, retrospective, info, software used, and creative process.
 *
 * The component also includes a link to return to the projects page and a link to view the project.
 * The links are wrapped in a footer component.
 *
 * The component is a functional component and does not have any state.
 *
 * @param {number} id - The ID of the project to display.
 */
const ProjectDetail = () => {
  const { id } = useParams(); // Capture the project ID from the route

  // Define the details for each project
  const projects = {
    1: {
      title: "PROJECT 001",
      image: "/assets/project-1.jpg",
      synopsis: "Working with a business owner specializing in vintage secondhand consignment.",
      client: "Jesse Managuelod",
      wentWell: "Storyboarding, video capture, and meeting people!",
      challenges: "Challenging lighting environments, weather conditions, unexpected adjustments!",
      retrospective:
        "I had fun with this one! Unforeseen challenges are expected but they don’t get easier at all! Essentially, we wanted to capture the people attending the UBC Shop Local Event, there were many vintage consignors, what surprised me was the large turnoutand sense of community we felt when we were there! Many of the students were enthusiastic and wanted to show off their outfits, which we were able to capture in this project with their consent. This was only the first day, however to generate awareness that we would be attending the second day we quickly edited and uploaded the retrospective of day one to social media which created more attention going into day 2.",
      info: "Video Format | 1920 x 1080 60fps | H.264 Codec",
      software: "Premiere Pro, After Effects, Captured on Sony a6100",
      creative: "Moodboarding, Research, Video Capture, Post Production, Music Synchronization, Storyboarding, Color Correction, Target Audience",
      link: "https://www.are.na/kevin-lazo/baldylox-x-doubleback",
    },
    2: {
      title: "PROJECT 002",
      image: "/assets/project-2.png",
      synopsis: "Working with MSNRY.js, HTML audio elements, and CSS styles, to create a fictional shopping web page.",
      client: "n/a",
      wentWell: "Creative expression, HTML/CSS refinement and Javascript audio controls!",
      challenges: "Unfamiliarity with certain video and audio elements/styling techniques.",
      retrospective: "This was a fun project, I am a big fan of Nigo and am glad to showcase his work! I used msnry.js to create a gallery, and I also used HTML audio elements to create a music player. I also used CSS styles to create a clean and modern look for the page.",
      info: "HTML, CSS, and Javascript",
      software: "Visual Studio Code",
      creative: "Research, Layout Design, Audio Controls, Visual Design",
    },
    3: {
      title: "PROJECT 003",
      image: "/assets/project-3.png",
      synopsis: "Working with a business owner specializing in curate secondhand consignment at the UBC Shop Local Market.",
      client: "Jesse Managuelod",
      wentWell: "Meeting new people, video capture, and storyboard!",
      challenges: "Weather condition, lighting, and unexpected adjustments!",
      retrospective: "I had fun hanging out with the vendors, and meeting the students at UBC! Just like day one, we were able to capture the energy of the day, and the sense of community that was there! Day two was just as fun as day one if not more. With our day one being viewed, even more students wanted to make an appearance in the video, volunteering to show off their outfits. A local brand called OUTLAWS made an appearance and we were able to screenprint t-shirts and recieved a discount on any of our purchases with them. I met many need people and look forward to another event where we are all able to express our interest in fashion as well as the creative work surrounding it.",
      info: "Video Format | 1920 x 1080 30fps | H.264 Codec",
      software: "Premiere Pro,",
      creative: "Research, Layout Design, Audio Controls, Visual Design",
      link: "https://youtu.be/ZarqpjynOmU",
    },
    4: {
      title: "PROJECT 004",
      image: "/assets/project-4.png",
      synopsis: "UBC Shop Local Market Day 2",
      client: "Jesse Managuelod",
      wentWell: "The video capture was fun, being able to meet people and different vendors. The post production was fun too and I focused on storytelling primarily.",
      challenges: "There was enough footage to make a long video, however this video was made for social media and could not be longer than 3 minutes.",
      retrospective: "This was our first event at UBC, and our first attempt doing video content for the vintage page. What was really cool about this experience was that we ended up enjoying the process and actually did it again in the future. We built on the hype we created from the day one video and went even harder on our second video. Our efforts were recognized and the video did well on instagram reels. This would eventually be an opportunity for us to promote future appearances in different markets around Vancouver.",
      info: "Video Format | 1920 x 1080 30fps | H.264 Codec",
      software: "Adobe Premiere Pro, Adobe Audition, Adobe After Effects, Adobe Illustrator, Captured on JVC Everio",
      creative: "Storyboarding, Video Capture, Music Production, Post Production, Target Audience",
      link: "https://youtu.be/S-E-T1zbNdI",
    },
    5: {
      title: "PROJECT 005",
      image: "/assets/project-5.png",
      synopsis: "Working with Jesse Managuelod during his highly anticipated curated archive sales in collaboration with Alex at Baldylox Vintage in Chinatown.",
      client: "Jesse Managuelod, Baldylox Vintage",
      wentWell: "Not our first time doing a project of this scope. However this time, I have greatly improved my post production abilities. I learned different techniques in After Effects and Premiere that I was able to showcase in this project.",
      challenges: "This was a challenge for me because I am not familiar with the team at Baldylox and I wanted to appear proffesional and provide the best possible content. However, the team, models, and photographers were so much fun to work with that I was able to learn a lot from them. I immediately felt at ease. This was also fun in the sense that since my last effort in post production and video storytelling I have learned new techniques in motion graphics and wardrobe styling. We ended up covering alot, and capturing alot of footage, photos and highlights of the day. We ended up with a full length video prepared before the event which was uploaded onto social media. A full photogallery shot by Kiana. This was so much fun, i'm looking forward to working with them again!",
      retrospective: "This was a fun project, I am a big fan of Nigo and am glad to showcase his work!",
      info: "VIdeo Format | 1920 x 1080 30fps | H.264 Codec",
      software: "After Effects, Premiere Pro, Adobe Illustrator, Captured on Sony a6100",
      creative: "Storyboarding, Moodboarding, Photography, Music Selection, Motion Graphics, Wardobe Styling",
      link: "https://youtu.be/Qtj2uKibhmo",
    },
    6: {
      title: "PROJECT 006",
      image: "/assets/project-6.png",
      synopsis: "Using Adobe Creative Cloud to create social media assets to marketing upcoming events.",
      client: "Jesse Managuelod",
      wentWell: "I am just happy we had something to share with social media.",
      challenges: "Graphic design is not my strength, and the lack of technical skills really showed here, challenging me to be happy with I put out regardless of the result.",
      retrospective: "I want to learn more about Adobe Illustrating techniques because I understand that there are many potential graphics that I could make in the future. I made a few quick graphics and uploaded them to social media. Jesse and our team were really happy with the outcome.",
      info: "Social Media Marketing",
      software: "Adobe Illustrator",
      creative: "Research, Layout Design, Graphic Design, Visual Design",
      link: "https://www.are.na/kevin-lazo/doubleback-graphic-designs",
    },
    
  };

  // Get the project details based on the `id`
  const project = projects[id];

  // If the project does not have details in the array above, display project not found message.
  if (!project) {
    return <p className="text-center text-red-500">Project not found.</p>;
  }
  
 // Universal project details format.
 return (
   <>
     <Header />
     <div className="bg-portPurple">
       <div className="container mx-auto px-4 py-8">
         {/* Image */}
         <div className="flex justify-center mb-10">
           <img
             src={project.image}
             alt={`${project.title} Banner`}
             className="w-full md:w-3/4 lg:w-1/2 rounded-lg shadow-lg object-cover"
           />
         </div>

         {/* Content */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
           {/* Left Column */}
           <div className="text-left">
             <h4 className="text-portOrange font-bold">Synopsis</h4>
             <p className="mb-6 font-garamond text-white">{project.synopsis}</p>

             <h4 className="text-portOrange font-bold">Client</h4>
             <p className="mb-6 font-garamond text-white">{project.client}</p>

             <h4 className="text-portOrange font-bold">What Went Well</h4>
             <p className="mb-6 font-garamond text-white">{project.wentWell}</p>

             <h4 className="text-portOrange font-bold">Challenges Faced</h4>
             <p className="mb-6 font-garamond text-white">{project.challenges}</p>

             <h4 className="text-portOrange font-bold">Retrospective</h4>
             <p className="mb-6 font-garamond text-white">{project.retrospective}</p>
           </div>

           {/* Right Column */}
           <div className="space-y-6">
             <div>
               <h4 className="text-portOrange font-bold">Info</h4>
               <p className="font-garamond text-white">{project.info}</p>
             </div>

             <div>
               <h4 className="text-portOrange font-bold">Software Used</h4>
               <p className="font-garamond text-white">{project.software}</p>
             </div>

             <div>
               <h4 className="text-portOrange font-bold">Creative Process</h4>
               <p className="font-garamond text-white">{project.creative}</p>
             </div>
           </div>
         </div>

         {/* Link to return to projects page */}
         <footer className="text-center lg:text-right pb-10">
           <Link to="/projects" className="font-bold text-portOrange block lg:inline">
             Back to Projects
           </Link>

           <div className="mt-4">
             <a href={project.link} className="text-portOrange font-bold block">
               View Project
             </a>
             <img
               src="/assets/footdecor.png"
               alt="Flower Decoration"
               className="inline-block mt-2 w-6 h-6"
             />
           </div>
         </footer>
       </div>
     </div>
     <Footer />
   </>
 );
};

export default ProjectDetail;