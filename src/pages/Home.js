import React from "react";
import Hero from "../components/hero";
import BrandSlider from "../components/brandslider";
import Feauture from "../components/feauture";
import WhatWeOffer from "../components/what-we-offer/page";
import FAQ from "../components/accordion/Faq";
import Testimonial from "../components/testimonial";
import GetStarted from "../components/getStarted";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <BrandSlider/>
      <Feauture/>
      <WhatWeOffer/>
      <FAQ/>
      <Testimonial/>
      <GetStarted/>
      <Footer/>
    </div>
  );
};

export default Home;
