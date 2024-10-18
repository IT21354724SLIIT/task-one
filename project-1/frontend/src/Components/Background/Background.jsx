import React from "react";
import { assets } from "../../assets/assets";
import "./background.css"; // Import CSS file

const Background = () => {
  return (
    <div className="background-image">
      {/* Overlaying the text and button inside the image */}
      <div className="text-container">
        <h5>Summer 2020</h5>
        <h3 className="image-text">NEW COLLECTION</h3>
        <p>We know how large objects will act, but things on small scale</p>
        <button className="shop-button">SHOP NOW</button>
      </div>
      <img src={assets.shop1} alt="Shop" className="shop-image" />
    </div>
  );
};

export default Background;
