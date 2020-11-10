import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Developers from "../components/Developers/Developers";
import Hero from "../components/Hero/Hero";

const LandingPage = (props) => {
  return (
    <div>
      <Hero isLog={props.isLog} />
      <AboutUs />
      <Developers />
    </div>
  );
};

export default LandingPage;
