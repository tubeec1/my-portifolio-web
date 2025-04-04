import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Simple Task Manager",
    description:
      "A minimal task management web app to create, update, and delete daily tasks. Built with React and local storage.",
    link: "https://github.com/tubeec1/simpleTaskManager",
  },
  {
    title: "Simple E-commerce Website",
    description:
      "A basic e-commerce frontend with product listings, shopping cart functionality, and checkout UI using React and Tailwind CSS.",
    link: "https://github.com/tubeec1/simple_ecommerce",
  },
  {
    title: "Social Post App",
    description:
      "A simple social media-style post feed allowing users to post, like, and delete posts. Built with React and mock API.",
    link: "https://github.com/tubeec1/social_post",
  },
  {
    title: "Doctor Appointment Management System",
    description:
      "A full-stack web app to book, cancel, and manage doctor appointments. Features admin panel, patient login, and calendar view.",
    link: "https://github.com/tubeec1/DAMS-with-NodeJS-ExpressJS-MySQL",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website to showcase my projects, skills, and contact info. Built with React, Tailwind, and Framer Motion.",
    link: "https://github.com/tubeec1/my-portifolio-web",
  },
  {
    title: "MSS Somali",
    description:
      "A platform made for MSS Somalia project. It includes admin and user interfaces with authentication, dashboards, and custom features.",
    link: "https://github.com/tubeec1/mssSomali-Voting-Web",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-20">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-orange-500"
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border border-green-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 hover:underline font-medium"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
