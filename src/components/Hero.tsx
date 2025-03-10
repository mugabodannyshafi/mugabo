"use client"
import React, { useEffect } from "react";
import { FaBehance, FaXTwitter } from "react-icons/fa6";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { PiBehanceLogo } from "react-icons/pi";
import { motion, useAnimation, useInView } from "framer-motion";

const HeroSection = () => {
  const controls = useAnimation();
  
  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ height: "calc(100vh - 7rem)" }}
    >
      <div className="w-1/2 h-full flex justify-start items-center">
        <div className="flex flex-row gap-7">
          <motion.div 
            className="flex flex-col gap-4"
            variants={socialVariants}
            initial="hidden"
            animate={controls}
          >
            {[
              { Icon: FiGithub, href: "https://github.com/mugabodannyshafi" },
              { Icon: CiLinkedin, href: "https://www.linkedin.com/in/mugabo-shafi-danny-1207a8261/" },
              { Icon: CiInstagram, href: "https://www.instagram.com/shafi_calvin/" },
              { Icon: PiBehanceLogo, href: "https://www.behance.net/shafidmugabo" },
              { Icon: FaXTwitter, href: "https://x.com/MUGABO_Shafi" }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform transform hover:-translate-y-1"
                variants={socialVariants}
              >
                <Icon className="text-2xl text-lightestSlate hover:text-green" />
              </motion.a>
            ))}
          </motion.div>

          <div className="flex flex-col gap-3">
            <motion.span
              className="text-green"
              variants={textVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.2 }}
            >
              Hello, my name is
            </motion.span>

            <motion.div
              className="flex flex-col"
              variants={textVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.4 }}
            >
              <span className="text-[3rem] text-white">
                MUGABO Shafi Danny.
              </span>
              <span className="text-[3.5rem] text-lightSlate">
                I make things with computer.
              </span>
            </motion.div>

            <motion.div
              className="w-2/3 text-slate"
              variants={textVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.6 }}
            >
              <span>
                Hi, I'm Shafi. Software developer - self-taught. Eager to
                explore the nature, my open mind and the new technologies. I
                consider myself to be a fast learner, able to grasp new concepts
                quickly with excellent capacity to remember new information. My
                tech stack in short includes: JavaScript, TypeScript, NodeJs,
                ReactJs, Tailwind and NextJs.
              </span>
            </motion.div>

            <motion.div
              variants={textVariants}
              initial="hidden"
              animate={controls}
              transition={{ delay: 0.8 }}
            >
              <button className="border-green mt-5 text-green border-[1px] rounded py-3 w-52 hover:bg-green/10 transition-colors">
                Get in touch
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;