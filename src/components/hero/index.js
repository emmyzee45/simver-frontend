import React from "react";
import Navbar from "../navbar";
import hero from "../../assets/hero.svg";

const Hero = () => {
  return (
    <div className="w-full h-screen sm:px-[5%] px-[4%]">
      <Navbar />
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-6 items-center h-[90vh]">
        <div className="sm:mt-0 mt-[10%]">
          <p className="sm:w-[600px] text-sm sm:text-base w-full mb-2 ">
            Welcome,
          </p>
          <h1 className="uppercase  sm:text-[50px] text-[30px] font-bold sm:leading-[60px] leading-[40px]">
            Lorem ipsum dolor <br className="sm:flex hidden" /> sit amet
            consectetur
          </h1>
          <p className="sm:w-[600px] text-sm sm:text-base w-full my-4 sm:my-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
          </p>
          <button className="px-[20px] py-[12px] rounded-[8px] text-[13px] bg-[#EF5242] text-white">
            Get Started
          </button>
        </div>
        <div className="flex justify-end">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
