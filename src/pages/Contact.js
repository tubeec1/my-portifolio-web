import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true });

  let con = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="min-h-screen px-5 py-10 md:px-20 text-gray-400"
      variants={con}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
      ref={contactRef}
    >
      <motion.h2
        className="text-4xl font-bold text-center text-orange-500 mb-10"
        variants={fadeInUp}
      >
        Contact Me
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-10"
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Let's get in touch</h3>
          <p className="text-gray-400 mb-6">
            I'm always open to discuss projects, collaboration, or just a tech
            chat!
          </p>
          <ul className="space-y-3 text-gray-400">
            <li>
              <strong>Email:</strong> mohamedsuleyman813@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +252 61 8994037
            </li>
            <li>
              <strong>Location:</strong> Mogadishu, Somalia
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <motion.form
          className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (This is a placeholder)");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-400 transition"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
