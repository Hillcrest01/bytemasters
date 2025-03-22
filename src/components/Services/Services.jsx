import React from "react";
import "./Services.css";
import Card from "../Card/Card.jsx";
import { cardContent } from "../../index.js";

const Services = () => {
  const web = cardContent.web_dev;
  const app = cardContent.app_dev;
  const software = cardContent.software_dev;
  const portfolio = cardContent.portfolio_dev;

  return (
    <div className="services">
      <div className="text-content">
        <h1>
          High-impact services <br /> for your business
        </h1>
        <p>
          At <strong>ByteMasters Tech.</strong> , we offer a wide range of
          digital services to help your business thrive in the modern world.
          From developing responsive websites that captivate your audience, to
          crafting custom software solutions that optimize your operations.
          Elevate your business today with us
        </p>
      </div>
      <div className="cards">
        <Card image={web.image} title={web.title} body={web.body} />
        <Card image={app.image} title={app.title} body={app.body} />
        <Card image={portfolio.image} title={portfolio.title} body={portfolio.body} />
      </div>
      <a href="/services"><button> Browse all services </button></a>
    </div>
  );
};

export default Services;
