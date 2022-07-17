import React from "react";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";

export const Home = () => {
  return (
    <div className="conatiner container-center">
      <header className="hero">
        <img
          className="hero-img"
          alt="person's-img"
          src="https://ik.imagekit.io/qrhnvir8bf0/1658076097232_irsA_XGCq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1658076158616"
        />

        <h1 className="hero-heading"> I'm Mariya Sada</h1>
        <h4 className="title-of">Frontend Developer</h4>
        <p className="details">
          Hello there, welcome to this little corner of mine. I completed my
          master's in computer engineering. I love to create websites and
          writing blogs. My Tech skills are
          <b> HTML, CSS, Javascript, ReactJS, Typescript</b>.I believe in
          showing a proof of my work, rather than listing my skills on a paper.
          You can see my work in projects section.
        </p>
      </header>

      <div className="footer-heading">
        <ul className="social-links non-bullets">
          <li className="flex-item">
            <a
              href="https://github.com/mariyasada"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-color">
                <BsGithub title="Github" />
              </span>
            </a>
          </li>

          <li className="flex-item">
            <a
              href="https://twitter.com/sada_mariya"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-color">
                <BsTwitter title="Twitter" />
              </span>
            </a>
          </li>

          <li className="flex-item">
            <a
              href="https://www.linkedin.com/in/mariya-sada-1b6443139"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-color">
                <BsLinkedin title="LinkedIn" />
              </span>
            </a>
          </li>
          <li className="flex-item">
            <a
              href="https://mariyasada.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon-color">
                <SiHashnode title="LinkedIn" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
