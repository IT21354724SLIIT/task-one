import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { assets } from "../../assets/assets";

import "./Header.css"; // Assuming you have the CSS in the same folder

const Header = () => {
  return (
    <div className="header-top">
      <div className="contact-info">
        <a href="">
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <p>+94 77 483 9045</p>
        <a href="">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <p>ganeshalingammayuran05@gmail.com</p>
      </div>
      <div className="center-message">
        <p>Follow Us and get a chance to win 80% off</p>
      </div>
      <div className="social-media">
        <span>Follow us:</span>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
};

export default Header;
