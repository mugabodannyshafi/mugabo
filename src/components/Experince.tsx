"use client";

import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { LinkPreview } from "./ui/link-preview";

const experiences = [
  {
    date: "August 2024 - Present",
    title: "Backend Developer",
    company: "Academic Bridge, Kigali",
    link: "https://academicbridge.xyz/",
    description:
      "Building robust backend solutions using Node.js and NestJS. Focused on optimizing database queries and API development for scalable applications.",
    skills: [
      "TypeScript",
      "NestJS",
      "Mysql",
      "Docker",
      "Jest",
      "nginx",
      "REST APIs",
      "Redis",
    ],
  },
  {
    date: "February 2024 - November 2024",
    title: "Full-Stack Developer Intern",
    company: "Andela, Kigali",
    link: "https://www.andela.com/",
    description:
      "Worked on full-stack web applications, enhancing backend API performance and frontend UX. Learned best practices in scalable software development.",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "PostgresDB",
      "Tailwind",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full text-white font-sans px-4 md:px-6"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10">
        <div className="flex flex-col justify-start items-center md:items-start gap-1 mb-8 w-full max-w-4xl">
          <span className="text-xl md:text-2xl text-green">Experience</span>
          <motion.div
            className="w-10 h-[2px] rounded bg-green"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-start pt-10 md:pt-24 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-navy flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-green/30 border border-green/50 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-green">
                {item.date}
              </h3>
            </div>
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-lg mb-2 text-left font-bold text-green">
                {item.date}
              </h3>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h4>
                <LinkPreview url={item.link} className="text-green">
                  {item.company}
                </LinkPreview>
                <p className="mt-2 text-gray-300">{item.description}</p>
                <div className="flex flex-row gap-2 flex-wrap mt-3">
                  {item.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-green/10 rounded-full px-2 py-1 text-green text-sm flex justify-center items-center"
                    >
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-green via-green/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
