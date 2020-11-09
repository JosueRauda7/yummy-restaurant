import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Hero from "../components/Hero/Hero";

const LandingPage = (props) => {
  return (
    <div>
      <Hero isLog={props.isLog} />
      <AboutUs />
    </div>
  );
};

export default LandingPage;
