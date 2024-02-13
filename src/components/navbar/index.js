import React from "react";
import logo from "../../assets/logo.png";
import { RiMenu3Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <section className="sm:px-[5%] px-[3%] flex justify-between  w-full h-[80px] items-center">
      <div>
        <h4 className="text-[25px] font-semibold text-[#4B494A]">
          SIM
          <span className="text-[#EF5242]">Ver</span>
        </h4>
        <h6
          className="
        text-[8px] uppercase text-[#4B494A] tracking-[2px]"
        >
          carrier sim provider
        </h6>
      </div>
      <div className="flex gap-3 items-center">
        <h6 className="text-lg font-medium uppercase">Menu</h6>
        <RiMenu3Line className="text-black text-lg" />
      </div>
    </section>
  );
};

export default Navbar;
