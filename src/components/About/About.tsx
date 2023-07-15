import myPhoto from "../../assets/images/my_photo.png";
import s from "./About.module.scss";
import { Button } from "../../ui/Button";

const About = () => {
  return (
    <section id={s.About}>
      <div id={s.container}>
        <div className={s.block}>
          <img src={myPhoto} alt="img" />
          <h3>
            <span>(ABOUT ME)</span>
            <p>
              I'm a Frontend Developer with a passion for creating <br />{" "}
              products that not only look good but also solve real <br />{" "}
              problems. When I'm not sketching ideas on paper, you <br /> can
              find me binge-watching a Anime series or playing <br /> video
              games. My develop philosophy is simple: make it <br /> visually
              appealing, functional, and bring a smile to people's <br /> faces.
              I'm the developer you want on your team <br /> if you want to make
              people say 'I need that in my life!'. <br />
              My future goal is to become the best software engineer
            </p>
            <Button className={s.button}>Let's talk</Button>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default About;
