"use client";
import { useRef } from "react";
import { FaPalette } from "react-icons/fa";
import { PiCodeBold } from "react-icons/pi";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import react from "@/static/React-icon.svg.png";
import tailwind from "@/static/Tailwind_CSS_Logo.svg.png";
import html from "@/static/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.webp";
import next from "@/static/nextjs.png";
import css from "@/static/css3.png";
import node from "@/static/node-js-icon-1817x2048-g8tzf91e.png";
import nest from "@/static/nestjs-icon-1024x1020-34exj0g6.png";
import postgres from "@/static/Postgresql_elephant.svg.png";
import mysql from "@/static/mysql.png";
import django from "@/static/django.png";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const frontendTech = [
    { src: html, name: "Html" },
    { src: css, name: "CSS" },
    { src: react, name: "ReactJs" },
    { src: next, name: "Next.Js" },
    { src: tailwind, name: "Tailwind" },
  ];

  const backendTech = [
    { src: node, name: "NodeJs" },
    { src: nest, name: "NestJs" },
    { src: postgres, name: "Postgres" },
    { src: mysql, name: "Mysql" },
    { src: django, name: "Django" },
  ];

  return (
    <div
      className="w-full flex justify-center items-center py-20 px-4 md:px-8 relative"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 border border-green/10 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-green/5 rotate-45"
          animate={{
            rotate: [45, 405],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="w-full md:w-4/5 lg:w-3/4 xl:w-2/3 pb-3 flex flex-col gap-8 justify-center items-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col justify-start items-center md:items-start gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-2xl md:text-3xl text-green font-bold">
            Skills Overview
          </span>
          <motion.div
            className="w-12 h-[3px] rounded-full bg-gradient-to-r from-green to-green/50"
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full">
          {/* Frontend Section */}
          <motion.div
            className="flex w-full lg:w-1/2 flex-col justify-center items-center gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="backdrop-blur-sm bg-slate/5 p-8 rounded-2xl border border-slate/10 w-full hover:border-green/20 transition-all duration-500">
              <div className="flex flex-col gap-4 justify-center items-center mb-6">
                <motion.div
                  className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green/20 to-green/5 flex flex-col justify-center items-center relative overflow-hidden group"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green/0 via-green/20 to-green/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <FaPalette className="text-green text-xl relative z-10" />
                </motion.div>
                <h3 className="text-green text-xl font-semibold">Frontend</h3>
              </div>

              <div className="text-center text-lightSlate text-sm md:text-base px-2 mb-6 leading-relaxed">
                <span>
                  I have 3+ years of experience in building client-side web
                  applications. My skills include{" "}
                  <span className="text-white cursor-pointer hover:text-green transition-colors">
                    HTML
                  </span>
                  ,{" "}
                  <span className="text-white cursor-pointer hover:text-green transition-colors">
                    CSS
                  </span>
                  ,{" "}
                  <span className="text-white cursor-pointer hover:text-green transition-colors">
                    JavaScript
                  </span>
                  ,{" "}
                  <span className="text-white cursor-pointer hover:text-green transition-colors">
                    React.js
                  </span>
                  ,{" "}
                  <span className="text-white cursor-pointer hover:text-green transition-colors">
                    Tailwind CSS
                  </span>
                  , and responsive design.
                </span>
              </div>

              <motion.div
                className="flex flex-row flex-wrap gap-4 md:gap-5 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {frontendTech.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-green/5 transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-green/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Image
                        src={tech.src || "/placeholder.svg"}
                        className="h-8 w-8 md:h-10 md:w-10 relative z-10"
                        alt={tech.name}
                      />
                    </div>
                    <span className="text-xs md:text-sm text-lightSlate group-hover:text-green transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Backend Section */}
          <motion.div
            className="flex w-full lg:w-1/2 flex-col justify-center items-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="backdrop-blur-sm bg-slate/5 p-8 rounded-2xl border border-slate/10 w-full hover:border-green/20 transition-all duration-500">
              <div className="flex flex-col gap-4 justify-center items-center mb-6">
                <motion.div
                  className="h-16 w-16 rounded-2xl bg-gradient-to-br from-green/20 to-green/5 flex flex-col justify-center items-center relative overflow-hidden group"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green/0 via-green/20 to-green/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <PiCodeBold className="text-green text-2xl relative z-10" />
                </motion.div>
                <h3 className="text-green text-xl font-semibold">Backend</h3>
              </div>

              <div className="text-center text-lightSlate text-sm md:text-base px-2 mb-6 leading-relaxed">
                <span>
                  I have 3+ years of experience in building backend
                  applications. I specialize in{" "}
                  <span className="text-white cursor-pointer hover:text-green transition-colors">
                    Node.js
                  </span>
                  ,{" "}
                  <span className="text-white cursor-pointer hover:text-green transition-colors">
                    NestJS
                  </span>
                  ,{" "}
                  <span className="text-white cursor-pointer hover:text-green transition-colors">
                    PostgreSQL
                  </span>
                  , and database management.
                </span>
              </div>

              <motion.div
                className="flex flex-row flex-wrap gap-4 md:gap-5 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {backendTech.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-green/5 transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-green/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Image
                        src={tech.src || "/placeholder.svg"}
                        className="h-8 w-8 md:h-10 md:w-10 relative z-10"
                        alt={tech.name}
                      />
                    </div>
                    <span className="text-xs md:text-sm text-lightSlate group-hover:text-green transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
