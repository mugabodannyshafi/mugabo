"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import Image from "next/image";
import dealFlow from "@/static/deal.png";
import roumeza from "@/static/roumeza.png";
import vegi from "@/static/vegi.png";
import school from "@/static/school.png";
import nita from "@/static/nita.png";
import innocent from "@/static/innocent.png";
import lost from "@/static/lost.png";
import nest from "@/static/nestjs.jpg"

const projects = [
  {
    name: "Nestify CLI",
    image: nest,
    description:
      "A CLI tool that scaffolds full production-ready NestJS apps with database setup, authentication strategies, Swagger docs, and CI/CD configs — automating what usually takes hours into seconds.",
    tech: ["NestJS", "TypeScript", "CLI", "PostgreSQL", "MongoDB", "MySQL"],
    link: "https://srt.rw/0sGZch",
    type: "Backend Tool",
    status: "Live",
  },
  {
    name: "Lost & Found Kigali",
    image: lost,
    description:
      "A community-driven web app for reporting and finding lost or found items in Kigali. Users can post details, contact owners, and help others recover their belongings.",
    tech: ["NestJS", "Next.js", "MySQL", "Tailwind", "Docker"],
    link: "https://lost-found-kigali.vercel.app/",
    type: "Full Stack",
    status: "Live",
  },
  {
    name: "Roumeza Platform",
    image: roumeza,
    description:
      "Complete fashion e-commerce platform with secure payment processing, inventory management, and customer analytics dashboard.",
    tech: ["NestJS", "Next.js", "PostgreSQL", "Tailwind", "Zustand"],
    link: "https://roumeza.vercel.app/",
    type: "Full Stack",
    status: "Live",
  },
  {
    name: "Deal Flow Management",
    image: dealFlow,
    description:
      "Advanced deal management system with real-time analytics, collaboration tools, and automated workflow processing.",
    tech: ["Next.js", "Redux Toolkit", "TypeScript", "SCSS"],
    link: "https://dealflow-frontend.vercel.app/home",
    type: "Frontend",
    status: "Live",
  },
  {
    name: "Artist Portfolio",
    image: innocent,
    description:
      "Dynamic portfolio platform showcasing artistic works with interactive galleries and content management system.",
    tech: ["Next.js", "Sanity", "GSAP", "Tailwind"],
    link: "https://www.innocentishimwe.com/",
    type: "Full Stack",
    status: "Live",
  },
  {
    name: "Event Management System",
    image: nita,
    description:
      "Comprehensive event management backend with employee tracking, financial operations, and advanced reporting features.",
    tech: ["NestJS", "TypeORM", "PostgreSQL", "JWT"],
    link: "private",
    type: "Backend",
    status: "Private",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full Stack":
        return "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300";
      case "Frontend":
        return "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-300";
      case "Backend":
        return "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-300";
      default:
        return "from-gray-500/20 to-gray-400/20 border-gray-500/30 text-gray-300";
    }
  };

  return (
    <div className="w-full py-20 px-4 relative" ref={ref}>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-green/5 rounded-full"
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-green/10 rounded-lg">
              <FiFolder className="h-6 w-6 text-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Work
            </h2>
          </div>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-green via-green/60 to-transparent mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <p className="text-lightSlate text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills in modern web
            development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="group bg-slate/5 backdrop-blur-sm border border-slate/20 rounded-2xl overflow-hidden hover:border-green/30 hover:shadow-xl hover:shadow-green/5 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Enhanced Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
                      project.status === "Live"
                        ? "bg-green/20 border-green/30 text-green"
                        : "bg-orange/20 border-orange/30 text-orange-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border bg-gradient-to-r ${getTypeColor(
                      project.type
                    )}`}
                  >
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Enhanced Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-green transition-colors duration-300">
                    {project.name}
                  </h3>
                  {project.link !== "private" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-70 hover:opacity-100 text-lightSlate hover:text-green transition-all duration-300 p-1 rounded-lg hover:bg-green/10"
                    >
                      <FiExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <p className="text-lightSlate text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="bg-green/10 text-green px-3 py-1 rounded-lg text-xs font-medium border border-green/20 hover:bg-green/20 hover:border-green/40 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex gap-3">
                  {project.link !== "private" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-lg text-sm font-medium hover:bg-green/20 hover:scale-105 transition-all duration-300 border border-green/20"
                    >
                      <FiExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  <button className="flex items-center gap-2 bg-slate/10 text-lightSlate px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate/20 hover:text-white hover:scale-105 transition-all duration-300 border border-slate/20">
                    <FiGithub className="h-4 w-4" />
                    Source
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { label: "Projects Completed", value: "6+" },
            { label: "Technologies Used", value: "15+" },
            { label: "Live Applications", value: "5+" },
            { label: "Years Experience", value: "3+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-slate/5 backdrop-blur-sm border border-slate/20 rounded-xl hover:border-green/30 transition-all duration-300"
              whileHover={{ y: -2 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-green mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-lightSlate">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="bg-slate/5 backdrop-blur-sm border border-slate/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-lightSlate mb-6">
              Have a project in mind? I'd love to help bring your ideas to life
              with modern web technologies.
            </p>
            <a
              href="mailto:mugabodannyshafi@gmail.com"
              className="inline-flex items-center gap-2 bg-green/10 border border-green/30 text-green px-8 py-3 rounded-lg font-medium hover:bg-green/20 hover:scale-105 transition-all duration-300"
            >
              Start a Conversation
              <FiExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
