"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

const NotFoundContent = () => {
  return (
    <section className="relative flex flex-1 w-full items-center justify-center px-4 md:px-6 pt-20 pb-12">
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

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 text-green text-sm font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
              // route not found
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-6xl sm:text-7xl md:text-8xl font-bold text-green font-mono">
                404
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
                Page Not Found
              </h1>
              <p className="text-lightSlate text-lg mt-2 font-semibold">
                This page does not exist.
              </p>
            </motion.div>

            <motion.p
              className="text-slate text-base leading-relaxed max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              The URL you entered may be broken, or the page may have been
              moved. Head back to the homepage to explore my work.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-green/10 border border-green/30 text-green px-6 py-3 rounded-lg font-medium hover:bg-green/20 transition-all duration-300"
                >
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="inline-flex items-center justify-center gap-2 border border-slate/30 text-lightSlate px-6 py-3 rounded-lg font-medium hover:border-green/30 hover:text-green transition-all duration-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </button>
              </motion.div>
            </motion.div>
          </motion.div>

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
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate/20">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green rounded-full" />
                <span className="text-lightSlate text-sm ml-2 font-mono">
                  error.ts
                </span>
              </div>

              <div className="font-mono text-sm space-y-2">
                <div className="flex text-slate">
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    1
                  </span>
                  <div>
                    <span className="text-purple-400">throw new</span>{" "}
                    <span className="text-cyan-400">NotFoundError</span>
                    <span className="text-yellow-400">(</span>
                  </div>
                </div>
                <div className="flex text-slate">
                  <span className="text-slate/40 select-none w-6 text-right mr-4">
                    2
                  </span>
                  <div className="ml-4">
                    <span className="text-green">
                      &apos;This page does not exist&apos;
                    </span>
                    <span className="text-yellow-400">);</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundContent;
