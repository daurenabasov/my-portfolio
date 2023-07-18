import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Hero from "../../components/Hero/Hero";
import MainLinks from "../../components/Main-links/MainLinks";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <MainLinks />
      <Projects />
      <About />
      <Experience />
      <Skills />
    </main>
  );
};

export default HomePage;
