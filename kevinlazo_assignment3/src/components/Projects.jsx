import React from "react";
import { Link } from "react-router-dom";
import "../css/main.css";
import Header from "./Header";
import Footer from "./Footer";

const Projects = () => {
  // Array of different project data
  const projects = [
    {
      id: 1,
      title: "PROJECT 001",
      image: "/assets/project-1.jpg",
      link: "/project-1",
    },
    {
      id: 2,
      title: "PROJECT 002",
      image: "/assets/project-2.png",
      link: "/project-2",
    },
    {
      id: 3,
      title: "PROJECT 003",
      image: "/assets/project-3.png",
      link: "/project-3",
    },
    {
      id: 4,
      title: "PROJECT 004",
      image: "/assets/project-4.png",
      link: "/project-4",
    },
    {
      id: 5,
      title: "PROJECT 005",
      image: "/assets/project-5.png",
      link: "/project-5",
    },
    {
      id: 6,
      title: "PROJECT 006",
      image: "/assets/project-6.png",
      link: "/project-6",
    },
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen px-4 md:px-10 lg:px-20 bg-portPurple">
        {/* Universal project grid component */}
        <div className="flex-grow flex items-center justify-center py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300 bg-white text-portOrange p-4"
              >
                <h3 className="flex justify-start text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <img
                  className="w-full h-48 sm:h-60 md:h-72 lg:h-96 object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <Link
                  to={`/projects/${project.id}`}
                  className="mt-2 block font-bold"
                >
                  MORE INFO
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;