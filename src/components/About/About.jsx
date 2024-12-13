import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./About.css";
import { aboutusImage } from "../../images";

const About = () => {
  return (
    <div className="about-us">
        <img src={aboutusImage} alt="about us image here" />
      <div className="text-content">
        <h1>The story behind our company</h1>
        <p>
          At the heart of our journey lies a passion for innovation and a
          commitment to solving real-world challenges. We were motivated by a
          desire to empower businesses and individuals through cutting-edge
          technology, transforming ideas into impactful solutions. Every project
          we undertake is driven by our belief in the power of collaboration and
          our dedication to making a meaningful difference in the lives of our
          clients.
        </p>
        <a href="/about"> <button> More about us <FontAwesomeIcon icon={faArrowRight}/> </button> </a>
      </div>
      
    </div>
  );
};

export default About;
