import React from "react";
import { contactIcon, emailIcon } from "../images";

const BytemastersContact = () => {
  return (
    <div>
      <div className="hero">
        <div className="get-in-touch">
          <h1>Get in touch with us today</h1>
          <p>
            We’d love to hear from you! If you have any questions, feedback, or
            inquiries, feel free to get in touch with us through the details
            below
          </p>
          <hr />
          <br />
          <div className="email">
            <img src={emailIcon} alt="" />
            <div className="email-content">
              <h2>Send us an email</h2>
              <p>bytemasters@gmail.com</p>
            </div>
          </div>
          <div className="phone">
            <img src={contactIcon} alt="" />
            <div className="phone-content">
              <h2>Give us a call</h2>
              <p>+254-714-130-512</p>
            </div>
          </div>
        </div>
        <div className="message">
          <p>
            Alternatively, fill out our contact form, and we’ll get back to you
            as soon as possible. Thank you for reaching out!
          </p>
          <form action="" method="POST">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email address"/>
            <input type="number" placeholder="Phone number" />
            <input type="text" placeholder="Service" />
            <textarea name="message" id=""></textarea>
            
          </form>
          <button>Send Message</button>
        </div>
      </div>
      <div className="offices">
        <h1>Come and visit our offices around the country</h1>
        
      </div>
    </div>
  );
};

export default BytemastersContact;
