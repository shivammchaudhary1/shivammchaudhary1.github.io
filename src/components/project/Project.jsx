import React from "react";
import "./project.css";
import expedia from "../../assets/expedia.png";
import dsw from "../../assets/dsw.png";
import lr from "../../assets/limeroad.png";
import bmi from "../../assets/bmi.png";
import { Github } from "../github/Github";

export const Project = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="container portfolio_container">
        <article class="project-card">
          <div className="portfolio_item-img">
            <img src={expedia} alt="expedia" />
          </div>
          <h3 class="project-title">Clone of Hotstar</h3>
          <p class="project-description">
            {" "}
            The objective is to develop a replica of the Hotstar movie app
            utilizing HTML, CSS, and JavaScript technology to create a visually
            appealing and functional interface.{" "}
          </p>
          <h2 class="project-tech-stack">React</h2>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/shivammchaudhary1/movie-app-clone"
              target="_blank"
              class="project-github-link"
            >
              GitHub
            </a>
            <a
              href="https://hotstar-movie-app-clone.netlify.app/"
              target="_blank"
              class="project-deployed-link"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article class="project-card">
          <div className="portfolio_item-img">
            <img src={dsw} alt="expedia" />
          </div>
          <h3 class="project-title">Clone of Nykaa</h3>
          <p class="project-description">
            The objective is to develop a functional replica of the e-commerce
            platform Nykaa utilizing HTML, CSS, JavaScript, React, Chakra UI.
            This will involve creating a dynamic and visually appealing user
            interface to enhance the overall user experience.
          </p>
          <h2 class="project-tech-stack">React</h2>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/shivammchaudhary1/rampant-quiet-9349"
              target="_blank"
              class="project-github-link"
            >
              GitHub
            </a>
            <a
              href="https://falwless.netlify.app/"
              target="_blank"
              class="project-deployed-link"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article class="project-card">
          <div className="portfolio_item-img">
            <img src={lr} alt="expedia" />
          </div>
          <h3 class="project-title">Clone of SkinCare</h3>
          <p class="project-description">
            SkinCare.com is developed by team of 5 members utilizing HTML, CSS,
            JavaScript, and Bootstrap technologies. The website is designed to
            be a replica of SkinStore.com and was successfully completed within
            a five-day timeframe.
          </p>
          <h2 class="project-tech-stack">React</h2>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/shahabhi095/SkinStore.com"
              target="_blank"
              class="project-github-link"
            >
              GitHub
            </a>
            <a
              href="https://skinstore-lemon.vercel.app/"
              target="_blank"
              class="project-deployed-link"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article class="project-card">
          <div className="portfolio_item-img">
            <img src={bmi} alt="expedia" />
          </div>
          <h3 class="project-title">Clone of Youtube</h3>
          <p class="project-description">
            Create a replicative design of the popular video-sharing platform,
            YouTube, utilizing HTML, CSS &JavaScript as the primary technologies
          </p>
          <h2 class="project-tech-stack">React</h2>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/shivammchaudhary1/youtube-clone"
              target="_blank"
              class="project-github-link"
            >
              GitHub
            </a>
            <a
              href="https://poetic-liger-38b8f6.netlify.app/"
              target="_blank"
              class="project-deployed-link"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* <Github/> */}
      </div>
    </section>
  );
};
