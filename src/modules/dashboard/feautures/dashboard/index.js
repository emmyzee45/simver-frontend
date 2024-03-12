import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { FaCircleInfo } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
export default function Dashboardd() {
  return (
    <div>
      <DashboardLayout>
        <div className=" sm:px-[8%] px-[4%] pt-[2.5%]">
          <div className="w-full sm:h-[70px] h-[90px] bg-[#ef534238] rounded-[6px] flex items-center justify-center px-[2%]">
            <div className="flex items-start">
              <div className="w-[3%]">
                <FaCircleInfo className="text-[#EF5242]" />
              </div>
              <div className="w-[97%]">
                <div className="sm:text-sm  text-xs text-[#EF5242]">
                  We are happy to announce the next phase of our rentals and
                  verification merge! All legacy API endpoints will be
                  deprecated on March 31, 2024. New API docs for verifications
                  and rentals are available:
                  https://www.textverified.com/docs/api/v2
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:px-[8%] px-[4%] mt-[1.5%]">
          <h4 className="text-3xl font-semibold">Purchase Options</h4>
          <div>
            <div className="flex justify-center items-center mt-8">
              <div className="flex flex-col items-center ">
                <h5 className="text-sm">Card</h5>
                <h5 className="text-xs">($2.50 - $100)</h5>
              </div>
            </div>
            <div className="flex justify-between items-center space-x-5 my-5">
              <button className="w-full h-[45px] rounded-[6px] bg-[#EF5242]"></button>
              <button className="w-full h-[45px] rounded-[6px] bg-[#b63f32]"></button>
              <button className="w-full h-[45px] rounded-[6px] bg-[#f77466]"></button>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mt-8">
              <div className="flex flex-col items-center ">
                <h5 className="text-sm">No-Fee Cryptocurrencies</h5>
                <h5 className="text-xs">($2.50 - $2000)</h5>
              </div>
            </div>
            <div className="flex justify-between items-center space-x-5 my-5">
              <button className="w-full h-[45px] rounded-[6px] border border-gray-300 flex justify-center items-center">
                <div className="flex flex- items-center space-x-2">
                  <FaBitcoin className="text-[30px] text-[#F7931A]" />
                  <h5 className="text-[15px]">Bitcoin</h5>
                </div>
              </button>
              <button className="w-full h-[45px] rounded-[6px] border border-gray-300 flex justify-center items-center">
                <div className="flex flex- items-center space-x-2">
                  <SiLitecoin className="text-[30px] text-[#BFBBBB]" />
                  <h5 className="text-[15px]">Litecoin</h5>
                </div>
              </button>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mt-8">
              <div className="flex flex-col items-center ">
                <h5 className="text-sm">Other Cryptocurrencies</h5>
                <h5 className="text-xs">(Variable - $2000)</h5>
              </div>
            </div>
            <div className="flex justify-between items-center space-x-5 my-5">
              <button className="w-full h-[45px] rounded-[6px] border border-gray-300"></button>
              <button className="w-full h-[45px] rounded-[6px] border border-gray-300"></button>
              <button className="w-full h-[45px] rounded-[6px] border border-gray-300"></button>
            </div>
            <div className="flex justify-between items-center space-x-5 ">
              <button className="w-full h-[45px] rounded-[6px] border border-gray-300"></button>
              <button className="w-full h-[45px] rounded-[6px] border border-gray-300"></button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}
