"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/link-preview";
import { Mail, Download, MapPin } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPos = (clientX / innerWidth - 0.5) * 8;
      const yPos = (clientY / innerHeight - 0.5) * 8;

      hero.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-6 pt-20">
      {/* Simple Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 border border-green/20 rotate-45"
          animate={{
            rotate: [45, 405],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-green/10 rounded-full"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            ref={heroRef}
            className="space-y-6 transition-transform duration-100 ease-out"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Greeting */}
            <motion.span
              className="inline-flex items-center gap-2 text-green text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
              Hello, my name is
            </motion.span>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white">MUGABO Shafi Danny</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-lightSlate mt-2 font-semibold">
                I build things with a computer.
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              className="max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-slate text-base leading-relaxed">
                I'm currently a software engineer at{" "}
                <LinkPreview
                  className="text-green hover:text-green/80 transition-colors font-medium"
                  url="https://academicbridge.xyz/"
                >
                  Academic Bridge
                </LinkPreview>
                , passionate about building scalable web applications and
                exploring new technologies.
              </p>

              <div className="flex items-center gap-2 mt-4 text-sm text-lightSlate">
                <MapPin className="h-4 w-4 text-green" />
                <span>Kigali, Rwanda</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="mailto:mugabodannyshafi@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-green/10 border border-green/30 text-green px-6 py-3 rounded-lg font-medium hover:bg-green/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="h-4 w-4" />
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Code Block */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="backdrop-blur-sm bg-slate/10 p-6 rounded-2xl border border-slate/20 w-full max-w-md"
              animate={{
                y: [-3, 3, -3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate/20">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green rounded-full" />
                <span className="text-lightSlate text-sm ml-2 font-mono">
                  developer.ts
                </span>
              </div>

              {/* Code Content with Line Numbers */}
              <div className="space-y-2 font-mono text-sm">
                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    1
                  </span>
                  <div>
                    <span className="text-purple-400">interface</span>{" "}
                    <span className="text-cyan-400">Developer</span> {"{"}
                  </div>
                </motion.div>

                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    2
                  </span>
                  <div className="ml-4">
                    <span className="text-blue-300">name</span>
                    <span className="text-yellow-400">:</span>{" "}
                    <span className="text-cyan-400">string</span>;
                  </div>
                </motion.div>

                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    3
                  </span>
                  <div className="ml-4">
                    <span className="text-blue-300">role</span>
                    <span className="text-yellow-400">:</span>{" "}
                    <span className="text-cyan-400">string</span>;
                  </div>
                </motion.div>

                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    4
                  </span>
                  <div className="ml-4">
                    <span className="text-blue-300">location</span>
                    <span className="text-yellow-400">:</span>{" "}
                    <span className="text-cyan-400">string</span>;
                  </div>
                </motion.div>

                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    5
                  </span>
                  <div className="ml-4">
                    <span className="text-blue-300">passion</span>
                    <span className="text-yellow-400">:</span>{" "}
                    <span className="text-cyan-400">string</span>;
                  </div>
                </motion.div>

                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    6
                  </span>
                  <div>{"}"}</div>
                </motion.div>

                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    7
                  </span>
                  <div></div>
                </motion.div>

                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    8
                  </span>
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">developer</span>
                    <span className="text-yellow-400">:</span>{" "}
                    <span className="text-cyan-400">Developer</span> = {"{"}
                  </div>
                </motion.div>

                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    9
                  </span>
                  <div className="ml-4">
                    <span className="text-blue-300">name</span>
                    <span className="text-yellow-400">:</span>{" "}
                    <span className="text-green">"Shafi Danny MUGABO"</span>,
                  </div>
                </motion.div>

                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    10
                  </span>
                  <div className="ml-4">
                    <span className="text-blue-300">role</span>
                    <span className="text-yellow-400">:</span>{" "}
                    <span className="text-green">"Software Engineer"</span>,
                  </div>
                </motion.div>

                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    11
                  </span>
                  <div className="ml-4">
                    <span className="text-blue-300">location</span>
                    <span className="text-yellow-400">:</span>{" "}
                    <span className="text-green">"Kigali, Rwanda"</span>,
                  </div>
                </motion.div>

                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.9 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    12
                  </span>
                  <div className="ml-4">
                    <span className="text-blue-300">passion</span>
                    <span className="text-yellow-400">:</span>{" "}
                    <span className="text-green">
                      "Building amazing things"
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="flex text-slate"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0 }}
                >
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    13
                  </span>
                  <div>{"}"}</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
