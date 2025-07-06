"use client";
import { LinkPreview } from "./ui/link-preview";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full mt-20 py-12 text-slate relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-32 h-32 border border-green/5 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        <motion.div
          className="mb-6 backdrop-blur-sm bg-slate/5 p-6 rounded-2xl border border-slate/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-center">
            Designed and Built by{" "}
            <span className="text-white hover:text-green transition-colors duration-300 cursor-pointer">
              Shafi Danny MUGABO
            </span>
          </p>
        </motion.div>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm text-center">
            Inspired by{" "}
            <LinkPreview
              url="https://nziranziza.dev/"
              className="text-green hover:text-green/80 transition-colors"
            >
              <span className="text-green font-medium hover:underline cursor-pointer">
                Daniel NZIRANZIZA
              </span>
            </LinkPreview>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs text-center flex items-center gap-2">
            © {new Date().getFullYear()} All rights reserved.
            <span className="w-1 h-1 bg-green rounded-full animate-pulse" />
            <span className="text-green/60">Made with passion in Rwanda</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
