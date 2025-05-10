"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";

const HeroSection = () => {
  const controls = useAnimation();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-6">
      <div className="w-full max-w-4xl">
        <motion.span
          className="text-green text-base block mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello, my name is
        </motion.span>

        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          MUGABO Shafi Danny.
        </motion.h1>

        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-lightSlate mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          I make things with computer.
        </motion.h2>

        <motion.div
          className="text-slate text-sm md:text-base mt-6 mb-8 max-w-2xl space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>
            I'm Shafi, a software developer currently working at{" "}
            <LinkPreview
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-green to-green/60"
              url="https://academicbridge.xyz/"
            >
              Academic Bridge
            </LinkPreview>
            . I enjoy learning new things, exploring nature, and building useful
            stuff with code.
          </p>

          <div className="mt-4">
            <p className="mb-2 font-semibold text-lightSlate">
              Currently learning:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>System Architecture Design</li>
              <li>Django REST Framework</li>
              <li>Microsoft Azure</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="border-green text-green border-[1px] rounded py-3 px-6 w-full sm:w-52 hover:bg-green/10 transition-colors">
            Let's Build Something
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
