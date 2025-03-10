import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experince";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className="flex flex-col px-5 gap-4 overflow-hidden">
      <NavBar />
      <HeroSection />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
