"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";
import { Calendar, MapPin, Briefcase, Building2 } from "lucide-react";

const experiences = [
  {
    date: "August 2024 - Present",
    title: "Software Developer",
    company: "Academic Bridge, Kigali",
    link: "https://academicbridge.xyz/",
    description:
      "Building robust backend solutions using Node.js and NestJS. Focused on optimizing database queries and API development for scalable applications.",
    skills: [
      "TypeScript",
      "NestJS",
      "MySQL",
      "Docker",
      "Jest",
      "nginx",
      "REST APIs",
      "Redis",
    ],
    type: "Full-time",
    location: "Kigali, Rwanda",
  },
  {
    date: "january 2023 - November 2024",
    title: "Full-Stack Developer",
    company: "Andela, Kigali",
    link: "https://www.andela.com/",
    description:
      "Worked on full-stack web applications, enhancing backend API performance and frontend UX. Learned best practices in scalable software development.",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind",
    ],
    type: "fulltime",
    location: "Kigali, Rwanda",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="w-full py-20 px-4 md:px-6 relative" ref={ref}>
      {/* Simple Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 border border-green/10 rounded-full"
          animate={{
            rotate: [0, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-20 h-20 border border-green/5 rotate-45"
          animate={{
            rotate: [45, 405],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-green/10 rounded-lg">
              <Briefcase className="h-6 w-6 text-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Professional Experience
            </h2>
          </div>
          <motion.div
            className="w-16 h-1 bg-green mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lightSlate text-lg max-w-2xl mx-auto">
            My journey in software development and the experiences that shaped
            my career
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-slate/5 backdrop-blur-sm border border-slate/20 rounded-2xl p-6 md:p-8 hover:border-green/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Left Column - Company Info */}
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-green/10 rounded-lg">
                      <Building2 className="h-5 w-5 text-green" />
                    </div>
                    <span className="bg-green/20 text-green px-3 py-1 rounded-full text-sm font-medium">
                      {experience.type}
                    </span>
                  </div>

                  <LinkPreview
                    url={experience.link}
                    className="text-green hover:text-green/80 transition-colors text-lg font-bold block mb-2"
                  >
                    {experience.company}
                  </LinkPreview>

                  <div className="space-y-2 text-sm text-lightSlate">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Role Details */}
                <div className="lg:w-2/3">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {experience.title}
                  </h3>

                  <p className="text-lightSlate leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Skills */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold text-sm">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="bg-green/10 text-green px-3 py-1 rounded-lg text-sm font-medium border border-green/20 hover:bg-green/20 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={
                            isInView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.8 }
                          }
                          transition={{
                            delay: index * 0.2 + skillIndex * 0.05,
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-4 bg-slate/5 backdrop-blur-sm border border-slate/20 rounded-2xl px-6 py-4">
            <div className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-green" />
              <span className="text-white font-semibold">
                3+ Years Experience
              </span>
            </div>
            <div className="w-px h-6 bg-slate/30" />
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-green" />
              <span className="text-lightSlate">Full Stack Development</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
