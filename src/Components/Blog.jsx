import React from "react";

const blogConstant = [
  {
    name: "Hoisting And Temporal Dead Zone",
    description:
      "Two most important concept in javascript. You can read about how hoisting works? and can we access the variable if it is into temporal dead zone",
    link: "https://mariyasada.hashnode.dev/hoisting-and-temporal-dead-zone",
    image: "./image/1.png",
  },
  {
    name: "Different methods of promises",
    description:
      "What is promises? promises methods are most popular concepts in javascript. you can read about more here with the examples",
    link: "https://mariyasada.hashnode.dev/different-methods-of-promises",
    image: "./image/2.png",
  },
  {
    name: "Virtual DOM, Diffing, and Reconciliation",
    description:
      "Why React so popular? How reconcilialtion works and how react uses the diffing algorithm. you can read about all of these things in this blog.so do it read.",
    link: "https://mariyasada.hashnode.dev/virtual-dom-diffing-and-reconciliation",
    image:
      "https://mariyasada.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2F4hbJ-eymZ1o%2Fupload%2Fv1652249507636%2FR3SnxPMK7.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
  },
  {
    name: "XMLHttpRequest VS Fetch",
    description:
      "This blog is based on why Fetch is popular than XMLHTTPrequest.How much time it will take when we use fetch and XMLHTTP request.",
    link: "https://mariyasada.hashnode.dev/xmlhttprequest-vs-fetch",
    image:
      "https://mariyasada.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2Fq10VITrVYUM%2Fupload%2Fv1644325028603%2FviH72jjQc.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
  },
  {
    name: "Compilation Vs Transpilation",
    description:
      "You can read about compilers and transpilers in it. how babel converts the ES6 into ES5. Babel is one of the known transpilers.You can also learned about some of the transpiler used in different languages.",
    link: "https://mariyasada.hashnode.dev/xmlhttprequest-vs-fetch",
    image:
      "https://mariyasada.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2FWkfDrhxDMC8%2Fupload%2Fv1641813032110%2FmTnRYZ_0B.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75",
  },
];

export const Blog = () => {
  return (
    <div className="blog-container">
      {blogConstant.map((post) => {
        return (
          <div className="card-for-blog">
            <article class="showcase-project  container container-center">
              <img className="blog-img" src={post.image} alt={post.name} />

              <h1 className="blog-title">{post.name}</h1>
              <p className="justify">{post.description}</p>
              <a
                class="link link-primary"
                href={post.link}
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </article>
          </div>
        );
      })}
    </div>
  );
};
