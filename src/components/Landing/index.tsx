import Contact from "../Dashboard/Contact";
import Skills from "../Dashboard/Skills";
import Projects from "../Dashboard/Projects";
import Education from "../Dashboard/Educations";
import About from "../Dashboard/About";
import WelcomePage from "../Dashboard/Welcome";

export default function LandingPage() {
  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Navbar */}
      <WelcomePage />
      <div className="bg-gray-900 justify-center items-center flex mx-auto my-auto ">
        <About />
      </div>
      <Education />
      <Projects />

      <Skills />

      <Contact />
    </div>
  );
}
