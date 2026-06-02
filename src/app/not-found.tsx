import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import NotFoundContent from "@/components/NotFoundContent";
import { ThreeBackground } from "@/components/ThreeBackground";

export const metadata: Metadata = {
  title: "404 | Shafi Danny MUGABO",
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-navy overflow-hidden">
      <ThreeBackground />
      <div className="relative z-10 flex flex-col min-h-screen px-5">
        <NavBar />
        <NotFoundContent />
        <Footer />
      </div>
    </div>
  );
}
