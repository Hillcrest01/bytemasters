import React from "react";
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";
import { bgimage, starRating } from "../../images";

const Hero = () => {
  return (
    <div className="main-hero">
      <img src={starRating} alt="a star rating image here" />
      <p>
        {" "}
        Helping 100+ companies and individuals get better around the world{" "}
      </p>
      <div className="hero">
        <div>
          <h1>Ready to take your business growth to the next level?</h1>
          <p>
            Whether you're looking to streamline operations, reach new
            customers, or enhance your online presence, we're here to guide you
            every step of the way. 
          </p>
          <div className="buttons">
            <a href="/https://wa.link/qju2um">
              <button className="button-one">
                Get in Touch &nbsp; <FontAwesomeIcon icon={faArrowRight} />{" "}
              </button>
            </a>
            <a href="/services">
              <button className="button-two">
                Our Services &nbsp; <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </div>
        </div>
        <img src={bgimage} className="hero-image" alt="hero image here" />
      </div>
    </div>
  );
};

export default Hero;
