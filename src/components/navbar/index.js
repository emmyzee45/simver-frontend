import React from "react";

import { RiMenu3Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <section className=" flex justify-between  w-full h-[80px] border-b-[1px] border-[#ef534234] items-center">
      <div className="flex flex-col">
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
      <div className="sm:hidden flex gap-3 items-center">
        <button className="px-[15px] py-[10px] rounded-[8px] sm:text-[13px] text-[10px] bg-[#723EEC] text-white">
          Create account
        </button>
        <RiMenu3Line className="text-black text-[22px]" />
      </div>
      <nav className="sm:flex hidden">
        <ul className="flex items-center gap-8 text-[13px]">
          <li>Home</li>
          <li>Feautures</li>
          <li>Subscriptions</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className="sm:flex hidden gap-3">
        <button className="px-[20px] py-[12px] rounded-[8px] text-[13px] bg-[#723EEC] text-white">
          Create account
        </button>
        <button className="px-[20px] py-[12px] rounded-[8px] text-[13px] border border-[#723EEC] text-[#723EEC]">
          Login
        </button>
      </div>
    </section>
  );
};

export default Navbar;
