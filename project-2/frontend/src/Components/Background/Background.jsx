import React from "react";
import { assets } from "../../assets/assets";
import "./Background.css";

const Background = () => {
  return (
    <div className="background-box">
      <div className="background-left">
        <img src={assets.image1} alt="image1" className="image1" />
      </div>
      <div className="background-center">
        <h3 className="heading">SUMMER 2020</h3>
        <h1 className="title">Multicoloured Tie-dye Sweater</h1>
        <h5 className="subtitle">We know how large objects will act</h5>
        <button className="shop-button">SHOP NOW</button>
      </div>
      <div className="background-right">
        <img src={assets.image2} alt="image2" className="image2" />
      </div>
    </div>
  );
};

export default Background;
