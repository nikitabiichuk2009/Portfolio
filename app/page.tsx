import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/NavBar";
import { CgWebsite } from "react-icons/cg";
import { FaHome, FaRProject, FaUser } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 justify-center 
    flex flex-col items-center overflow-hidden mx-auto
    sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#", icon: <FaHome /> },
            { name: "About", link: "#about", icon: <FaUser /> },
            { name: "Projects", link: "#projects", icon: <CgWebsite /> },
            { name: "Contact", link: "#contact", icon: <MdContactPhone /> },
          ]}
        />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
