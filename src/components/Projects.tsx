"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiUsers } from "react-icons/fi";
import { LinkPreview } from "./ui/link-preview";
import Image from "next/image";
import dealFlow from "@/static/deal.png";
import roumeza from "@/static/roumeza.png";
import vegi from "@/static/vegi.png";
import school from "@/static/school.png";
import nita from "@/static/nita.png";
import innocent from "@/static/innocent.png";

const allWorks = [
  {
    name: "frontend",
    projects: [
      {
        type: "featured",
        name: "Deal Flow",
        image: dealFlow,
        description: "A web app for managing deals and workflows.",
        languages: [
          "JavaScript",
          "TypeScript",
          "NextJs",
          "Redux Toolkit",
          "SCSS",
        ],
        link: "https://dealflow-frontend.vercel.app/home",
        collaborate: "Bien Aime",
        collaborateLink: "https://www.bienaime.rw/",
      },
      {
        type: "featured",
        name: "Bright Kids School",
        image: school,
        description:
          "A school website for sharing information with parents and students.",
        languages: ["TypeScript", "React", "Tailwind", "Material UI"],
        link: "https://bright-kids-school.vercel.app/",
        collaborate: "none",
        collaborateLink: "none",
      },
    ],
  },
  {
    name: "backend",
    projects: [
      {
        type: "featured",
        name: "Nita Impressions",
        image: nita,
        description: "A system for managing events, employees, and finances.",
        languages: ["NestJs", "TypeScript", "Postgres", "TypeORM"],
        link: "private",
        collaborate: "Mwungeri Ngabo Sevelin",
        collaborateLink:
          "https://www.linkedin.com/in/mwungeri-ngabo-sevelin-8aa453331/",
      },
      {
        type: "featured",
        name: "Vegi store",
        image: vegi,
        description:
          "An online shop for selling fresh vegetables and groceries.",
        languages: ["NestJs", "TypeScript", "Postgres", "TypeORM"],
        link: "https://vegi-online.vercel.app/",
        collaborate: "Mwungeri Ngabo Sevelin",
        collaborateLink:
          "https://www.linkedin.com/in/mwungeri-ngabo-sevelin-8aa453331/",
      },
    ],
  },
  {
    name: "fullstack",
    projects: [
      {
        type: "featured",
        name: "Roumeza Platform",
        image: roumeza,
        description:
          "An online fashion store with secure shopping and product management.",
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
        collaborate: "Egide IRAGENA",
        collaborateLink: "https://iragena-egide.web.app/",
      },
      {
        type: "featured",
        name: "Innocent Ishimwe Art",
        image: innocent,
        description: "A portfolio website to showcase artwork and projects.",
        languages: ["TypeScript", "NextJs", "Tailwind", "Sanity", "Gsap"],
        link: "https://www.innocentishimwe.com/",
        collaborate: "none",
        collaborateLink: "none",
      },
    ],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allProjects = allWorks.flatMap((category) => category.projects);

  const projectsToDisplay =
    selectedCategory === "all"
      ? allProjects
      : allWorks.find((work) => work.name === selectedCategory)?.projects || [];

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center py-10 text-white px-4"
    >
      <div className="flex flex-col items-start gap-2 mb-8">
        <h2 className="text-3xl font-bold text-green">Some Works</h2>
        <div className="h-[2px] w-8 rounded bg-green" />
      </div>

      <div className="w-full overflow-x-auto mb-6 pb-2 scrollbar-hide">
        <div className="flex space-x-3 min-w-max justify-center">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-2 rounded-full capitalize font-semibold transition-colors duration-300 text-center ${
              selectedCategory === "all"
                ? "bg-green text-black"
                : "bg-green/10 text-slate hover:bg-green/20"
            }`}
          >
            all
          </button>
          {allWorks.map((work) => (
            <button
              key={work.name}
              onClick={() => setSelectedCategory(work.name)}
              className={`px-6 py-2 rounded-full capitalize font-semibold transition-colors duration-300 text-center ${
                selectedCategory === work.name
                  ? "bg-green text-black"
                  : "bg-green/10 text-slate hover:bg-green/20"
              }`}
            >
              {work.name}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-6xl">
        <div className="w-full flex flex-col md:flex-row flex-wrap gap-6 p-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-wrap gap-6 justify-center"
            >
              {projectsToDisplay.map((project, index) => (
                <motion.div
                  key={`${selectedCategory}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-0  w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-xl border-[#122d55] bg-[#0f2958] transition-all  flex flex-col hover:border-green/50  overflow-hidden"
                >
                  <div className="w-full h-48 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent z-10 opacity-60" />
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col gap-2 p-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm capitalize text-green">
                        {project.type} project
                      </h4>
                      {project.link !== "private" && (
                        <a
                          className="font-bold bg-clip-text text-transparent bg-gradient-to-br"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink className="inline text-2xl text-slate hover:text-green from-green to-green/60" />
                        </a>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-lightestSlate">
                      {project.name}
                    </h4>
                    <p className="text-slate mt-2">{project.description}</p>

                    {/* Collaborator section */}
                    {project.collaborate && project.collaborate !== "none" && (
                      <div className="flex items-center gap-2 mt-3 text-sm text-lightestSlate">
                        <FiUsers className="text-green" />
                        <span>
                          Collaborated with{" "}
                          <LinkPreview
                            url={project.collaborateLink}
                            className="text-green font-medium"
                          >
                            {project.collaborate}
                          </LinkPreview>
                        </span>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.languages.map((lang, i) => (
                        <span
                          key={i}
                          className="bg-green/10 rounded-full px-2 py-1 text-green text-[0.8rem]"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
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
