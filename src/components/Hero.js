import React from "react";
import "./Hero.css";

const Hero = ({ Video }) => {
  return (
    <div className="hero">
      <video className="hero__video" autoPlay loop muted src={Video} type='video/mp4'></video>
      <div className="hero__text-container">
        <h1 className="hero__title">Sofía Caria</h1>
        <h2 className="hero__subtitle">Fullstack developer</h2>
      </div>
    </div>
  );
};

export default Hero;
