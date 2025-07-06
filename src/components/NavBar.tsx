"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/static/shafiLogo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { PiBehanceLogo } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      const shouldBeVisible =
        currentScrollPos < 60 ||
        !isScrollingDown ||
        prevScrollPos - currentScrollPos > 10;

      setVisible(shouldBeVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) setVisible(true);
  };

  const socialLinks = [
    {
      Icon: FiGithub,
      href: "https://github.com/mugabodannyshafi",
      label: "GitHub",
    },
    {
      Icon: CiLinkedin,
      href: "https://www.linkedin.com/in/mugabo-shafi-danny-1207a8261/",
      label: "LinkedIn",
    },
    {
      Icon: CiInstagram,
      href: "https://www.instagram.com/shafi_calvin/",
      label: "Instagram",
    },
    {
      Icon: PiBehanceLogo,
      href: "https://www.behance.net/shafidmugabo",
      label: "Behance",
    },
    {
      Icon: FaXTwitter,
      href: "https://x.com/MUGABO_Shafi",
      label: "Twitter",
    },
  ];

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full h-16 md:h-20 px-5 flex justify-between items-center bg-navy/80 backdrop-blur-xl border-b border-slate/10 z-50"
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center">
          <Link href={"/"}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-green/20 rounded-full blur-md" />
              <Image
                src={logo || "/placeholder.svg"}
                alt="shafi Danny MUGABO | Portfolio"
                width={40}
                height={40}
                className="relative z-10"
              />
            </motion.div>
          </Link>
        </div>

        <motion.a
          href="shafi.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="shafi.pdf"
          className="hidden md:block border-green text-green border-[1px] rounded-lg py-2 px-6 font-medium backdrop-blur-sm bg-green/5 hover:bg-green/10 transition-all duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(64, 255, 128, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </motion.a>

        <motion.button
          className="md:hidden flex items-center justify-center text-green text-2xl p-2 rounded-lg hover:bg-green/10 transition-colors"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <IoMdClose /> : <FaBarsStaggered />}
        </motion.button>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-navy/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center md:hidden"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-8">
              <motion.a
                href="shafi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="shafi.pdf"
                className="border-green text-green border-[1px] rounded-lg py-3 px-10 text-lg font-medium backdrop-blur-sm bg-green/5 hover:bg-green/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(64, 255, 128, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </motion.a>

              <motion.div
                className="flex flex-row items-center justify-center gap-6 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {socialLinks.map(({ Icon, href, label }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-lightestSlate hover:text-green transition-colors duration-300 p-3 rounded-full hover:bg-green/10"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-2xl" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Social Links */}
      <div className="fixed text-green left-10 bottom-0 hidden lg:flex flex-col items-center gap-6 z-20">
        {socialLinks.map(({ Icon, href, label }) => (
          <motion.a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-slate hover:text-green transition-all duration-300 p-2 rounded-lg hover:bg-green/10"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={22} />
          </motion.a>
        ))}
        <motion.div
          className="h-24 w-px bg-slate mt-2"
          initial={{ height: 0 }}
          animate={{ height: 96 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </>
  );
};

export default NavBar;
