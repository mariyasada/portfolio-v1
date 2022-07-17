import React from "react";

const projectConstant = [
  {
    name: "Mys-Tube",
    description:
      "Mys-tube is an End-to-End ReactJs project like you-tube where you can watch art-related videos.This app is built using ReactJs, Mockbee(backend) with JWT Auth.",
    image:
      "https://ik.imagekit.io/qrhnvir8bf0/video_A5hkXPEri.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1658074670367",
    liveLink: "https://mys-tube.netlify.app/",
    code: "https://github.com/mariyasada/mysTube",
  },
  {
    name: "Insta-connect",
    description:
      "Insta-connect is an End-to-End ReactJs social media application where you can connect with people by sharing your post.This app is built using ReactJs, firebase(backend).",
    image:
      "https://ik.imagekit.io/qrhnvir8bf0/insta_S8hmG_qkv.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1658074670381",
    liveLink: "https://insta-connect-by-mariayasada.netlify.app/",
    code: "https://github.com/mariyasada/social-media",
  },
  {
    name: "Mehak-store",
    description:
      "Fully Functional e-commerce app where authenticated users can buy various kinds of perfumes.This app is built using ReactJs, Mockbee(backend) with JWT Auth.",
    image:
      "https://ik.imagekit.io/qrhnvir8bf0/mehak_Hg8ibcdLiF.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1658074670962",
    liveLink: "https://mehak-store.netlify.app/",
    code: "https://github.com/mariyasada/ecommerce",
  },
  {
    name: "MS-notes",
    description:
      "MS-Notes is an End-to-End ReactJ Project Like Google Keep which is built using ReactJs, JSON-server.",
    image:
      "https://ik.imagekit.io/qrhnvir8bf0/ms_mm099EGRV.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1658074670354",
    liveLink: "https://ms-notes.netlify.app//",
    code: "https://github.com/mariyasada/notesms",
  },
  {
    name: "Iqra-UI",
    description:
      "IQRA UI provides designed front-end components. You can make a beautiful web interface by simply using these classes in your HTML code.This UI is built using HTML,CSS and Javascript.",
    image:
      "https://ik.imagekit.io/qrhnvir8bf0/iqra_b1DXfPTgki.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1658074671063",
    liveLink: "https://iqra-cl-ui.netlify.app/",
    code: "https://github.com/mariyasada/Iqra-CL",
  },
];

const Projects = () => {
  return (
    <div className="blog-container">
      {projectConstant.map((post) => {
        return (
          <div className="card-for-blog">
            <article class="showcase-project  container container-center">
              <img
                className="blog-img project-img"
                src={post.image}
                alt={post.name}
              />
              <h1 className="blog-title">{post.name}</h1>
              <p className="justify">{post.description}</p>
              <div className="btn-container">
                <a
                  class="link link-primary"
                  href={post.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
                <a
                  class="link link-primary"
                  href={post.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  Sourcecode
                </a>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
