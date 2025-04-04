import React, { useRef, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { Menu, X } from "lucide-react"; // optional icons
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
const App = () => {
  const navRef = useRef(null);
  const navInView = useInView(navRef, { once: true });
  const [menuOpen, setMenuOpen] = useState(false);

  const linksCont = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const links = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-gray-700 text-white min-h-screen">
      <div className="w-[90%] mx-auto">
        <motion.div
          className="flex justify-between items-center h-[15vh] px-5"
          initial={{ y: -72 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img
            className="w-[160px] h-[30px]"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            src="./modigitalb.png"
            alt="Logo"
          />

          {/* Hamburger for mobile */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>

          {/* Desktop Nav */}
          <motion.nav
            ref={navRef}
            className="hidden md:flex gap-5 items-center text-gray-400 text-md"
            variants={linksCont}
            initial="hidden"
            animate={navInView ? "visible" : "hidden"}
          >
            <motion.div variants={links}>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </motion.div>
            <motion.div variants={links}>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </motion.div>
            <motion.div variants={links}>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </motion.div>
            <motion.div variants={links}>
              <Link to="/projects" className="hover:text-white">
                Projects
              </Link>
            </motion.div>
            <motion.div variants={links}>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </motion.div>
          </motion.nav>
        </motion.div>

        {/* Mobile Dropdown Nav */}
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute left-0 top-[15vh] bottom-0 right-0 z-10 md:hidden flex flex-col gap-4 bg-white text-gray-400 text-center  rounded-md px-6 py-4"
          >
            <Link to="/" className="hover:text-gray-700" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-700"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-gray-700"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="hover:text-gray-700"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-700"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </motion.div>
        )}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
