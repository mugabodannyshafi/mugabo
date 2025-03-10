"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    date: "February 2024 - November 2024",
    title: "Full-Stack Developer Intern",
    company: "Andela, Kigali",
    description:
      "Worked on full-stack web applications, enhancing backend API performance and frontend UX. Learned best practices in scalable software development.",
    skills: ["JavaScript", "React", "Node.js", "Express", "PostgresDB", "Tailwind"],
  },
  {
    date: "August 2024 - Present",
    title: "Backend Developer",
    company: "Academic Bridge, Kigali",
    description:
      "Building robust backend solutions using Node.js and NestJS. Focused on optimizing database queries and API development for scalable applications.",
    skills: ["Node.js", "NestJS", "Mysql", "Docker", "Jest", "nginx", "REST APIs"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div
      className="w-full flex flex-col items-center py-10 text-white"
      ref={ref}
    >
      <motion.div
        className="flex flex-col justify-start items-start gap-1 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-2xl text-green">Experience</span>
        <motion.div
          className="w-10 h-[2px] rounded bg-green"
          initial={{ width: 0 }}
          animate={isInView ? { width: 40 } : { width: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex justify-center items-center"
      >
        <Timeline className="w-2/3">
          {experiences.map((exp, index) => (
            <Timeline.Item key={index}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Timeline.Point className="bg-green-500" />
                <Timeline.Content>
                  <Timeline.Time className="text-green-400">
                    {exp.date}
                  </Timeline.Time>
                  <Timeline.Title className="text-xl font-semibold text-white">
                    {exp.title}
                  </Timeline.Title>
                  <p className="text-green-400">{exp.company}</p>
                  <Timeline.Body className="text-gray-300">
                    {exp.description}
                  </Timeline.Body>
                  <div className="flex flex-row gap-2 flex-wrap">
                    {exp.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-green/10 rounded-full px-2 py-1 text-white text-[0.8rem] flex justify-center items-center"
                      >
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </Timeline.Content>
              </motion.div>
            </Timeline.Item>
          ))}
        </Timeline>
      </motion.div>
    </div>
  );
};

export default Experience;