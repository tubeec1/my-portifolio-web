import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="min-h-screen px-5 py-10 md:px-20  h-fit text-gray-400 text-justify"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-orange-500">About Me</h2>

      <p className="text-lg leading-relaxed mb-4">
        Hi, I'm
        <span className="font-semibold text-green-600"> Mohamed Suleyman</span>,
        a passionate and results-driven{" "}
        <span className="text-green-600 font-medium">Full Stack Developer</span>{" "}
        with a strong focus on building modern, scalable, and user-friendly web
        applications.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        I specialize in both frontend and backend development. I love creating
        beautiful interfaces with tools like
        <span className="font-semibold">
          ReactJS, Tailwind CSS, Sass, Framer Motion and NextJS,
        </span>
        , and I build powerful backends using
        <span className="font-semibold">
          Node.js, Express, and MongoDB, NextJS for server side and NestJS
        </span>
        .
      </p>

      <p className="text-lg leading-relaxed mb-4">
        With a solid foundation in software engineering, I enjoy solving complex
        problems, learning new technologies, and collaborating with teams to
        bring ideas to life. Whether it's building a single-page app or a
        full-stack system, I’m always ready to take on a challenge.
      </p>

      <p className="text-lg leading-relaxed">
        Let’s build something great together!
      </p>
    </motion.div>
  );
};

export default About;
