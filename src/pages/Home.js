import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="flex flex-col-reverse mt-[60px] md:mt-0 md:flex-row h-[85vh] items-center ">
        <motion.div
          className="md:w-1/2 flex flex-col md:justify-center md:items-center"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          animation={{ transition: "ease", duration: 2, delayChildren: 0.3 }}
        >
          <h1 className="font-bold text-center text-4xl  mb-5 ">
            Hi, I'm <span className="text-green-700"> Mohamed Suleyman</span>
          </h1>
          <p className="text-justify text-gray-400 text-lg">
            I'm a passionate Full Stack Developer with 2 years of real-world
            experience building modern, scalable web applications. Beyond
            development, I also work as a mentor — having guided and supported
            over 100 students on their tech journeys. I love writing clean code,
            solving meaningful problems, and helping others grow in the world of
            software development.
          </p>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              className="text-center bg-orange-500 px-12 py-3 my-8 flex justify-center
            items-center text-white rounded-full"
              to="/about"
            >
              About Us
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-1/2 my-10 md:mb-0 flex md:justify-end justify-center "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Rotating border wrapper */}
          <motion.div
            className="inline-block p-2 border-2 border-dashed border-orange-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              type: "spring",
            }}
          >
            {/* Static image inside */}
            <div className="rounded-full overflow-hidden w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <img src="./tubec.jpeg" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
