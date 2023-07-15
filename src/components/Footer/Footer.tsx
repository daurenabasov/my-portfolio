import Arrow from "../../assets/images/arrow";
import { ISocial } from "../../types/models";
import s from "./Footer.module.scss";

const Footer = () => {
  const date = new Date();

  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const social: ISocial[] = [
    {
      social: "instagram",
      link: "https://www.instagram.com/daurenkx/",
    },
    {
      social: "linkedin",
      link: "https://www.linkedin.com/in/dauren-abasov-91b3a5243/",
    },
    {
      social: "telegram: @dadash_i",
    },
  ];
  return (
    <footer id={s.footer}>
      <div id={s.container}>
        <div className={s.topFooter}>
          <span>(FORGOT TO MENTION)</span>
          <a href="https://www.instagram.com/daurenkx/">
            SUBSCRIBE TO MY INSTAGRAM <Arrow />
          </a>
        </div>
        <div className={s.bottomFooter}>
          <div className={s.date}>
            {year}©
            <time>
              {hours}:{minutes} time
            </time>
          </div>
          <nav>
            <ul className={s.footerNav}>
              {social.map(({ social, link }, id) => (
                <li key={id}>
                  <a href={link}>{social}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
