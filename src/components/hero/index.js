import React from "react";
import Navbar from "../navbar";

const Hero = () => {
  return (
    <div className="w-full h-screen sm:px-[5%] px-[4%]">
      <Navbar />
      <div className="flex items-center h-[50vh]">
        <div>
          <h1 className="uppercase  text-[50px] font-bold">
            We are the number <br/>one
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
