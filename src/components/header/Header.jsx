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
          <h5>Hello, I'm</h5>
          <h1 id="user-detail-name">Shivam Kumar Chaudhary</h1>
          <h5 className=".text-light">Full Stack Web Developer</h5>
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
