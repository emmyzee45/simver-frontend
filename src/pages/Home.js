import React from "react";
import Hero from "../components/hero";
import BrandSlider from "../components/brandslider";
import Feauture from "../components/feauture";
import WhatWeOffer from "../components/what-we-offer/page";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandSlider/>
      <Feauture/>
      <WhatWeOffer/>
    </div>
  );
};

export default Home;
