import "./styles/AboutUs.scss";
import picture from "@assets/img/avatar.jpg";

type LinkType = {
  linkedin: string;
  github: string;
  twitter: string;
};

const link: LinkType = {
  linkedin: "https://www.linkedin.com/in/yannick-kouakou-8b7b0b1b2/",
  github: "https://github.com/yannick2009",
  twitter: "https://twitter.com/baby_desiigner",
};

export default function AboutUs() {
  return (
    <section id="aboutUs">
      <div className="container">
        <div className="container__text">
          <h1>kouakou kouame yannick</h1>
          <h4>Fullstack Developer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quis doloribus, dolore aliquam molestiae numquam, inventore ut
            voluptates quo, perferendis provident explicabo quibusdam. Inventore
            possimus eum eligendi, non nihil dolorem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Commodi quis doloribus, dolore aliquam
            molestiae numquam, inventore ut voluptates quo, perferendis
            provident explicabo quibusdam. Inventore possimus eum eligendi, non
            nihil dolorem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Commodi quis doloribus, rendis provident explicabo quibusdam.
            Inventore possimus eum eligendi, non nihil dolorem.
          </p>
        </div>
        <div className="container__illustration">
          <div className="photo">
            <img src={picture} alt="photo de yannick" />
          </div>
          <div className="contacts">
            <a href="mailto:yannickkouakou13@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href={link.linkedin} target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={link.github} target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={link.twitter} target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" target="_blank">
              <i className="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
