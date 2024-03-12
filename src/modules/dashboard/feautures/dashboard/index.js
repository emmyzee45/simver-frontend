import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { FaCircleInfo } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaMonero } from "react-icons/fa";
import { TbBrandTether } from "react-icons/tb";
export default function Dashboardd() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <DashboardLayout>
        <div className=" sm:px-[8%] px-[4%] sm:pt-[2.5%] pt-[7%]">
          <div className="w-full py-[2%]  bg-[#ef534238] rounded-[6px] flex items-center justify-center px-[2%]">
            <div className="flex space-x-3 items-start">
              <div className="w-[3%]">
                <FaCircleInfo className="text-[#EF5242]" />
              </div>
              <div className="w-[97%]">
                <div className="sm:text-xs  text-xs text-[#EF5242]">
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
          <h4 className="sm:text-3xl text-lg font-semibold">Purchase Options</h4>
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
              <button className="w-full h-[45px] rounded-[6px] border border-gray-300 flex justify-center items-center">
                <div className="flex flex- items-center space-x-2">
                  <FaEthereum className="text-[30px] text-[#F7931A]" />
                  <h5 className="text-[15px]">Ethereum</h5>
                </div>
              </button>
              <button className="w-full h-[45px] rounded-[6px] border border-gray-300 flex justify-center items-center">
                <div className="flex flex- items-center space-x-2">
                  <AiFillDollarCircle className="text-[30px] text-[#3E73C4]" />
                  <h5 className="text-[15px]">USD coin</h5>
                </div>
              </button>
              <button className="w-full h-[45px] rounded-[6px] border border-gray-300 flex justify-center items-center">
                <div className="flex flex- items-center space-x-2">
                  <FaMonero className="text-[30px] text-[#FF6600]" />
                  <h5 className="text-[15px]">Monero</h5>
                </div>
              </button>
            </div>
            <div className="flex justify-between items-center space-x-5 ">
              <button className="w-full h-[45px] rounded-[6px] border border-gray-300 flex justify-center items-center">
                <div className="flex flex- items-center space-x-2">
                  <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#26A17B]">
                    <TbBrandTether className=" text-white" />
                  </div>
                  <h5 className="text-[15px]">Tether ERCC20</h5>
                </div>
              </button>
              <button className="w-full h-[45px] rounded-[6px] border border-gray-300 flex justify-center items-center">
                <div className="flex flex- items-center space-x-2">
                  <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#26A17B]">
                    <TbBrandTether className=" text-white" />
                  </div>

                  <h5 className="text-[15px]">Tether TRC220</h5>
                </div>
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}
