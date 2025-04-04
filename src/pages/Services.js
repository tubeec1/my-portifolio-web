import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive and interactive UIs using React, Tailwind CSS, and modern JavaScript frameworks.",
  },
  {
    title: "Backend Development",
    description:
      "Designing robust server-side logic and REST APIs using Node.js, Express, and MongoDB.",
  },
  {
    title: "Full Stack Web Apps",
    description:
      "Developing full-featured web applications from scratch — frontend to backend — optimized for performance and scalability.",
  },
  {
    title: "UI/UX Design Integration",
    description:
      "Bringing designs to life with clean, accessible code and attention to user experience.",
  },
  {
    title: "API Integration",
    description:
      "Connecting apps with third-party APIs and services, including authentication, payments, maps, and more.",
  },
  {
    title: "Deployment & Optimization",
    description:
      "Deploying web apps using platforms like Vercel, Netlify, and DigitalOcean with CI/CD and performance tuning.",
  },
];

const aboutBoxCon = {
  hidden: {}, // 👈 Add this for proper initial state
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemBox = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Services = () => {
  const aboutBoxRef = useRef(null);
  const aboutBoxUseInView = useInView(aboutBoxRef, { once: true });

  return (
    <motion.div className="min-h-screen px-5 py-10 md:px-20 text-gray-600 h-fit">
      <h2 className="text-4xl font-bold text-orange-500 text-center mb-10">
        Our Services
      </h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        ref={aboutBoxRef}
        variants={aboutBoxCon}
        initial="hidden"
        animate={aboutBoxUseInView ? "visible" : "hidden"}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl shadow-lg border hover:shadow-xl transition duration-300 bg-white"
            variants={itemBox}
          >
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              {service.title}
            </h3>
            <p className="text-md text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
