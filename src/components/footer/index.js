import React from "react";
import { FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      <div className="w-full bg-black py-[4%] text-white">
        <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
          <div className="bg-black grid grid-cols-12">
            <div className="col-span-4">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <h4 className="text-[25px] font-semibold text-white">
                    SIM
                    <span className="text-[#EF5242]">Ver</span>
                  </h4>
                  <h6 className="text-[8px] uppercase text-[white tracking-[2px]">
                    carrier sim provider
                  </h6>
                </div>
                <h6 className="text-sm mt-4 text-gray-600 font-semibold">
                  © 2024 Simver,Inc. All rights reserved.
                </h6>
              </div>
            </div>
            <div className="col-span-2 text-sm">
              <h5 className="font-bold mb-3">Solutions</h5>
              <ul className="flex flex-col space-y-3 text-gray-600">
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
              </ul>
            </div>
            <div className="col-span-2 text-sm">
              <h5 className="font-bold mb-3">Solutions</h5>
              <ul className="flex flex-col space-y-3 text-gray-600">
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
              </ul>
            </div>
            <div className="col-span-2 text-sm">
              <h5 className="font-bold mb-3">Solutions</h5>
              <ul className="flex flex-col space-y-3 text-gray-600">
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
              </ul>
            </div>
            <div className="col-span-2 text-sm">
              <h5 className="font-bold mb-3">Solutions</h5>
              <ul className="flex flex-col space-y-3 text-gray-600">
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
                <li>Marketing</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center w-full py-6 mt-12 border-t-[1px] border-b-[1px] border-gray-600">
            <div className="flex flex-col space-y-2">
              <h5>Subscribe to our newsletter</h5>
              <p className="text-[#ffffff77] text-sm">
                The latest news, articles, and resources, sent to your inbox
                weekly
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-[350px] h-[40px] border border-gray-700 rounded-xl">
                <input
                  type="text"
                  className="w-full h-full bg-transparent outline-none rounded-xl"
                />
              </div>
              <button className="px-[20px] h-[40px] rounded-[8px] text-[13px] text-white bg-[#EF5242] text-center ">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex justify-between  items-center my-5">
            <h6 className="text-sm  text-gray-600 font-semibold">
              © 2024 Simver,Inc. All rights reserved.
            </h6>
            <div className="flex gap-3 items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-gray-600 flex justify-center items-center">
                <FaTwitter />
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-gray-600 flex justify-center items-center">
                <FaTwitter />
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-gray-600 flex justify-center items-center">
                <FaTwitter />
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-gray-600 flex justify-center items-center">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
