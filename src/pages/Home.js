import React from "react";
import Hero from "../components/hero";
import BrandSlider from "../components/brandslider";
import Feauture from "../components/feauture";
import WhatWeOffer from "../components/what-we-offer/page";
import FAQ from "../components/accordion/Faq";
import Testimonial from "../components/testimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandSlider/>
      <Feauture/>
      <WhatWeOffer/>
      <FAQ/>
      <Testimonial/>
    </div>
  );
};

export default Home;
