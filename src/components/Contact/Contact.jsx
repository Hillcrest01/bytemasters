import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";
import { contact1, contact2, contact3 } from "../../images";

const Contact = () => {
  return (
    <div className="contact-content">
      <div className="contact-text-content">
        <h1>Contact us today for a free consultation</h1>
        <p>
          We're here to help you take your business to the next level. Get in
          touch with us today for a free consultation, where we’ll discuss how
          our services can support your goals and provide solutions tailored to
          your needs. Reach out now, and let's start working together!
        </p>
        <div className="contact-btns">
          <a href="https://wa.link/qju2um">
            <button className="contact-button-one">
              Get in Touch &nbsp; <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </a>
          <a href="#">
            <button className="contact-button-two">
              Our Services
            </button>
          </a>
          
        </div>
        <p className="copyright"> &copy; { new Date().getFullYear() } ByteMasters Tech. All rights reserved. </p>
      </div>
    </div> 
  );
};

export default Contact;
