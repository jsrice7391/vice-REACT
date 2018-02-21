import React from "react";
import "./hero.css"
import Background from "./atl.jpg"

const Hero = props => (
  <div>
    <h1 style={{ backgroundImage: `url(${Background}`}} className="hero">Here is the hero shot</h1>
  </div>
);


export default Hero;