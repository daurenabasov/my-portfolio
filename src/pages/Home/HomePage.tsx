import About from "../../components/About/About";
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
    </main>
  );
};

export default HomePage;
