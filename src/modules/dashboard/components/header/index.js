import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const pathname = window.location.pathname;
  return (
    <div className="h-[10vh] border-b-[1px] border-[#ef534217] w-full flex justify-between items-center px-5">
      <div>
        <h4> {pathname.split("/").pop()}</h4>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3">
          <div className="w-[40px] h-[40px] rounded-full bg-[#EF5242] flex justify-center items-center">
            <AiOutlineDollar className="text-[20px] text-white" />
          </div>
          <h5 className="font-semibold">0.00</h5>
        </div>
        <div>
          <TfiAnnouncement className="text-[20px]" />
        </div>
        <div>
          <FaUserCircle className="text-[30px] text-[#EF5242]" />
        </div>
      </div>
    </div>
  );
}
