import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { PiBehanceLogo } from "react-icons/pi";

interface GradientBackgroundProps {
  children: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
}) => {
  return (
    <div  className="min-h-screen bg-navy overflow-hidden">
      <div
        className="fixed top-[-10%] right-[-5%] h-[600px] w-[600px] rounded-full blur-[120px] opacity-30"
        style={{
          background: "linear-gradient(to right, #4f46e5, #0a192f)",
        }}
      />

      <div
        className="fixed bottom-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full blur-[120px] opacity-30"
        style={{
          background: "linear-gradient(to right, #4f46e5, #0a192f)",
        }}
      />

      <div className="fixed text-green left-10 bottom-0 hidden lg:flex flex-col items-center gap-6 z-20">
        <a
          href="https://github.com/mugabodannyshafi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-green hover:-translate-y-1 transition-all duration-300"
        >
          <FiGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/mugabo-shafi-danny-1207a8261/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-green hover:-translate-y-1 transition-all duration-300"
        >
          <CiLinkedin size={24} />
        </a>
        <a
          href="https://x.com/MUGABO_Shafi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-green hover:-translate-y-1 transition-all duration-300"
        >
          <FaXTwitter size={22} />
        </a>
        <a
          href="https://www.instagram.com/shafi_calvin/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-green hover:-translate-y-1 transition-all duration-300"
        >
          <CiInstagram size={24} />
        </a>
        <a
          href="https://www.behance.net/shafidmugabo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-green hover:-translate-y-1 transition-all duration-300"
        >
          <PiBehanceLogo size={24} />
        </a>
        <div className="h-24 w-px bg-slate-400 mt-2"></div>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;
