import About from "../../components/About/About";
import Experience from "../../components/Experience/Experience";
import Hero from "../../components/Hero/Hero";
import MainLinks from "../../components/Main-links/MainLinks";
import Projects from "../../components/Projects/Projects";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <MainLinks />
      <Projects />
      <About />
      <Experience />
    </main>
  );
};

export default HomePage;
