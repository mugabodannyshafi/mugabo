import NavBar from "@/components/NavBar"
import HeroSection from "@/components/Hero"
import Skills from "@/components/Skills"
import Experience from "@/components/Experince"
import Projects from "@/components/Projects"
import Footer from "@/components/footer"
import { ThreeBackground } from "@/components/ThreeBackground"
import { ScrollProgress } from "@/components/ScrollProgress"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-navy overflow-hidden">
      <ThreeBackground />
      <div className="relative z-10 flex flex-col px-5 gap-4">
        <NavBar />
        <HeroSection />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}
