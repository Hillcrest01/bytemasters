import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Whyus.css";
import { whyUsImage, tick } from "../../images";

const Whyus = () => {
  return (
    <div className="whyus">
      <div className="text-content">
        <h1>Why choose ByteMasters Tech?</h1>
        <p>
          ByteMasters stands out with its expert team, client-centered approach,
          and proven results. We focus on understanding your unique business
          needs, offering innovative solutions that deliver measurable success.
          With cutting-edge technology and a commitment to long-term
          partnerships, we ensure your growth and continued success in a
          constantly evolving digital landscape.
          <ul>
            <li> High skilled team</li>
            <li>Client-Centered Approach</li>
            <li>Proven Results</li>
          </ul>
        </p>
      </div>
      <img src={whyUsImage} alt="why us image here" />
    </div>
  );
};

export default Whyus;
