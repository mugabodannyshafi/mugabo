"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const allWorks = [
  {
    name: "frontend",
    projects: [
      {
        type: "featured",
        name: "Deal Flow",
        image:
          "https://www.apetogentleman.com/wp-content/uploads/2022/05/FALL-WINTER-TRENDS.jpg",
        description:
          "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had.Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, youll have an app deployed to the internet you can add to your portfolio.",
        languages: [
          "JavaScript",
          "TypeScript",
          "NextJs",
          "Redux Toolkit",
          "SCSS",
        ],
        link: "private",
      },
      {
        type: "featured",
        name: "Bright Kids School",
        image:
          "https://www.apetogentleman.com/wp-content/uploads/2022/05/FALL-WINTER-TRENDS.jpg",
        description:
          "I designed and developed the Bright Kids School website to provide an engaging and user-friendly experience for parents and students. Built with TypeScript, React, Tailwind, and Material UI, the website features a modern design, easy navigation, and essential school information. It ensures accessibility and responsiveness across all devices, enhancing communication between the school and the community.",
        languages: ["TypeScript", "React", "Tailwind", "Material UI"],
        link: "https://bright-kids-school.vercel.app/",
      },
    ],
  },
  {
    name: "backend",
    projects: [
      {
        type: "featured",
        name: "Nita Impressions",
        image:
          "https://www.apetogentleman.com/wp-content/uploads/2022/05/FALL-WINTER-TRENDS.jpg",
        description:
          "a private event management system designed to help the company efficiently handle employees, events, expenses, income, and overall operations. Built with NestJS, TypeScript, Postgres, and TypeORM, the system streamlines event planning and financial management, ensuring smooth coordination and organization.",
        languages: ["NestJs", "TypeScript", "Postgres", "TypeORM"],
        link: "private",
      },
      {
        type: "featured",
        name: "Vegi store",
        image:
          "https://www.apetogentleman.com/wp-content/uploads/2022/05/FALL-WINTER-TRENDS.jpg",
        description:
          "an online platform for selling fresh vegetables and groceries. Developed with NestJS, TypeScript, Postgres, and TypeORM, the system ensures seamless product management, secure transactions, and a smooth shopping experience for customers.",
        languages: ["NestJs", "TypeScript", "Postgres", "TypeORM"],
        link: "https://vegi-online.vercel.app/",
      },
    ],
  },
  {
    name: "fullstack",
    projects: [
      {
        type: "featured",
        name: "Roumeza Platform",
        image:
          "https://www.apetogentleman.com/wp-content/uploads/2022/05/FALL-WINTER-TRENDS.jpg",
        description:
          "an online store for selling fashion and related accessories. Built with NestJS, TypeScript, Postgres, TypeORM, Next.js, Tailwind, Zustand, and ShadCN, the platform offers a modern and seamless shopping experience with secure transactions, intuitive navigation, and efficient product management.",
        languages: [
          "NestJs",
          "TypeScript",
          "Postgres",
          "TypeORM",
          "NextJs",
          "Tailwind",
          "Zustand",
          "Shadcn",
        ],
        link: "https://roumeza.vercel.app/",
      },
      {
        type: "featured",
        name: "Innocent Ishimwe Art",
        image:
          "https://www.apetogentleman.com/wp-content/uploads/2022/05/FALL-WINTER-TRENDS.jpg",
        description:
          "a digital space showcasing the works of contemporary artist Innocent Ishimwe. Built with TypeScript, Next.js, Tailwind, Gsap and Sanity, the website serves as a portfolio where he shares his paintings and artistic projects. It provides an immersive experience, allowing art enthusiasts to explore his creations, inspired by culture, dreams, and human emotions.",
        languages: ["TypeScript", "NextJs", "Tailwind", "Sanity", "Gsap"],
        link: "https://www.innocentishimwe.com/",
      },
    ],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const selectedProjects = allWorks.find(
    (work) => work.name === selectedCategory
  )?.projects;

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: 30, transition: { duration: 0.6, delay: 0.3 } },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const categoryVariants = {
    inactive: { color: "#8892b0", borderColor: "transparent" },
    active: {
      color: "#64ffda",
      borderColor: "#64ffda",
      transition: { duration: 0.3 },
    },
    hover: {
      backgroundColor: "rgba(100, 255, 218, 0.1)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center py-10 text-white"
    >
      <motion.div
        className="flex flex-col items-start gap-2 mb-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants}
      >
        <h2 className="text-3xl font-bold text-green">Some Works</h2>
        <motion.div
          className="h-[2px] rounded bg-green"
          variants={underlineVariants}
        />
      </motion.div>

      <div className="w-full max-w-5xl grid grid-cols-4 gap-6">
        <div className="col-span-1 flex flex-col gap-4 py-4">
          {allWorks.map((work) => (
            <motion.button
              key={work.name}
              onClick={() => setSelectedCategory(work.name)}
              className={`w-full capitalize px-4 py-2 text-left font-semibold relative`}
              initial="inactive"
              animate={selectedCategory === work.name ? "active" : "inactive"}
              whileHover="hover"
              variants={categoryVariants}
            >
              {selectedCategory === work.name && (
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-green"
                  layoutId="activeCategoryIndicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              {work.name}
            </motion.button>
          ))}
        </div>

        <div className="col-span-3 flex flex-wrap w-full gap-6 p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="w-full flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {selectedProjects?.map((project, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  className="p-6 border w-full md:w-[calc(100%-1.5rem)] border-dashed rounded-xl border-[#122d55] transition-all shadow-lg flex flex-col sm:flex-row gap-4 hover:border-green/50 hover:shadow-green/5"
                  custom={index}
                  variants={projectVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col gap-2">
                    <motion.h4
                      className="text-sm capitalize text-green"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {project.type} project
                    </motion.h4>
                    <motion.h4
                      className="text-xl font-bold text-lightestSlate"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {project.name}
                    </motion.h4>
                    <motion.p
                      className="text-slate mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap gap-2 mt-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {project.languages.map((lang, i) => (
                        <motion.span
                          key={i}
                          className="bg-green/10 rounded-full px-2 py-1 text-green text-[0.8rem] flex justify-center items-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + i * 0.05 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {lang}
                        </motion.span>
                      ))}
                    </motion.div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-green font-semibold group"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <FiExternalLink />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
