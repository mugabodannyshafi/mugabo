"use client";
import React from "react";
import { FaPalette } from "react-icons/fa";
import react from "@/static/React-icon.svg.png";
import Image from "next/image";
import tailwind from "@/static/Tailwind_CSS_Logo.svg.png";
import html from "@/static/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.webp";
import next from "@/static/nextjs.png";
import css from "@/static/css3.png";
import node from "@/static/node-js-icon-1817x2048-g8tzf91e.png";
import python from "@/static/Python-logo-notext.svg.png";
import nest from "@/static/nestjs-icon-1024x1020-34exj0g6.png";
import postgres from "@/static/Postgresql_elephant.svg.png";
import mysql from "@/static/mysql.png";
import { PiCodeBold } from "react-icons/pi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="w-full flex justify-center items-center" ref={ref}>
      <motion.div
        className="w-1/2 pb-3 flex flex-col gap-5 justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col justify-start items-start gap-1 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-2xl text-green">Skills Overview</span>
          <motion.div
            className="w-10 h-[2px] rounded bg-green"
            initial={{ width: 0 }}
            animate={isInView ? { width: 40 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>
        <div className="flex flex-row gap-20">
          <motion.div
            className="flex w-[30rem] flex-col justify-center items-center gap-7"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col gap-3 justify-center items-center">
              <motion.div
                className="h-12 w-12 rounded-full bg-green/10 flex flex-col justify-center items-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <FaPalette className="text-[#ffff]" />
              </motion.div>
              <div>
                <span className="text-green">Frontend End</span>
              </div>
            </div>
            <div className="text-center text-lightSlate">
              <span>
                I have 2+ years of experience in building client-side web
                applications. My skills include
                <span className="text-[#ffff] cursor-pointer"> HTML</span>,
                <span className="text-[#ffff] cursor-pointer"> CSS</span>,
                <span className="text-[#ffff] cursor-pointer"> JavaScript</span>
                ,<span className="text-[#ffff] cursor-pointer"> React.js</span>,
                <span className="text-[#ffff] cursor-pointer">
                  {" "}
                  Tailwind CSS
                </span>
                ,
                <span className="text-[#ffff] cursor-pointer">
                  {" "}
                  Material UI
                </span>
                ,<span className="text-[#ffff] cursor-pointer"> Shadcn UI</span>
                , and responsive design. I also work with progressive web apps
                and other modern web technologies to create smooth user
                experiences.
              </span>
            </div>

            <motion.div
              className="flex flex-row gap-5 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { src: html, name: "Html" },
                { src: css, name: "CSS" },
                { src: react, name: "ReactJs" },
                { src: next, name: "Next.Js" },
                { src: tailwind, name: "Tailwind" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <Image src={tech.src} className="h-8 w-8" alt={tech.name} />
                  <span className="text-sm text-lightSlate">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex w-[30rem] flex-col justify-center items-center gap-7"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col gap-3 justify-center items-center">
              <motion.div
                className="h-12 w-12 rounded-full bg-green/10 flex flex-col justify-center items-center"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <PiCodeBold className="text-[#ffff] text-xl" />
              </motion.div>
              <div>
                <span className="text-green">Back End</span>
              </div>
            </div>
            <div className="text-center text-lightSlate">
              <span>
                I have 2+ years of experience in building backend applications.
                I specialize in
                <span className="text-[#ffff] cursor-pointer"> Node.js</span>,
                <span className="text-[#ffff] cursor-pointer"> NestJS</span>,
                <span className="text-[#ffff] cursor-pointer"> Express.js</span>
                ,
                <span className="text-[#ffff] cursor-pointer"> PostgreSQL</span>
                ,<span className="text-[#ffff] cursor-pointer"> MySQL</span>,
                <span className="text-[#ffff] cursor-pointer"> MongoDB</span>,
                <span className="text-[#ffff] cursor-pointer"> Prisma</span>,
                and
                <span className="text-[#ffff] cursor-pointer"> Sequelize</span>.
                I also have experience with authentication, API development, and
                database management, ensuring efficient and scalable backend
                solutions.
              </span>
            </div>

            <motion.div
              className="flex flex-row gap-5 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { src: node, name: "NodeJs" },
                { src: nest, name: "NestJs" },
                { src: python, name: "Python" },
                { src: postgres, name: "Postgres" },
                { src: mysql, name: "Mysql" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <Image src={tech.src} className="h-8 w-8" alt={tech.name} />
                  <span className="text-sm text-lightSlate">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
