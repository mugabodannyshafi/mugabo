"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const NavBar = () => {
  const menuItems = [
    { title: "Skills", link: "#skills" },
    { title: "Experience", link: "#experience" },
    { title: "projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ];

  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    controls.start({ opacity: visible ? 1 : 0, y: visible ? 0 : -50 });
  }, [visible, controls]);

  return (
    <motion.div
      className="fixed top-0 left-0 px-5 w-full h-20 flex flex-row justify-center items-center gap-7 bg-darkSlate backdrop-blur-lg bg-opacity-80 z-50"
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="text-white w-full flex gap-7 text-sm justify-end items-end">
        {menuItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            className="hover:text-green duration-200 text-lightSlate relative group"
            whileHover={{ y: -2 }}
          >
            <span className="inline-block">{item.title}</span>
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-green"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        ))}
      </motion.div>

      <motion.div>
        <motion.a
          href="shafi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="shafi.pdf"
          className="border-green text-green border-[1px] rounded py-2 px-5 inline-block"
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(64, 255, 128, 0.1)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default NavBar;
