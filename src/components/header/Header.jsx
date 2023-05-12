import React from "react";
import "./header.css";
import { CTA } from "./CTA";
import shivam from "../../assets/about.jpg";
import { HeaderSocial } from "./HeaderSocial";

export const Header = () => {
  return (
    <div id="home">
      <header>
        <div className="container header__container">
          <h3>Hello, I'm</h3>
          <h1 id="user-detail-name">Shivam Kumar Chaudhary</h1>
          <h4 className=".text-light">Full Stack Web Developer</h4>
          <CTA />
          <HeaderSocial />
          <div>
            <img class="home-img" src={shivam} alt="shivam" />
          </div>
        </div>
      </header>
    </div>
  );
};
