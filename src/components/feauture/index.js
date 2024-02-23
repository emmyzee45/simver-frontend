import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { FcCustomerSupport } from "react-icons/fc";
export default function Feauture() {
  return (
    <div className="bg-[#EEEEEE] py-[5%]">
      <div className="px-[4%] sm:pl-[5%] sm:pr-[13%]">
        <div className="grid sm:grid-cols-12 grid-cols-1 items-start sm:gap-7 ">
          <div className="col-span-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="w-full flex justify-center items-center flex-col  h-[150px] bg-white rounded-[6px]">
                <FcCustomerSupport className="text-[80px]" />
                <h4>Meesaging</h4>
              </div>
              <div className="w-full flex justify-center items-center flex-col  h-[150px] bg-white rounded-[6px]">
                <FcCustomerSupport className="text-[80px]" />
                <h4>Meesaging</h4>
              </div>
              <div className="w-full flex justify-center items-center flex-col  h-[150px] bg-white rounded-[6px]">
                <FcCustomerSupport className="text-[80px]" />
                <h4>Meesaging</h4>
              </div>
              <div className="w-full flex justify-center items-center flex-col  h-[150px] bg-white rounded-[6px]">
                <FcCustomerSupport className="text-[80px]" />
                <h4>Meesaging</h4>
              </div>
              <div className="w-full flex justify-center items-center flex-col  h-[150px] bg-white rounded-[6px]">
                <FcCustomerSupport className="text-[80px]" />
                <h4>Meesaging</h4>
              </div>
              <div className="w-full flex justify-center items-center flex-col  h-[150px] bg-white rounded-[6px]">
                <FcCustomerSupport className="text-[80px]" />
                <h4>Meesaging</h4>
              </div>
            </div>
          </div>
          <div className="col-span-7 sm:mt-0 mt-[5%]">
            <div className="">
              <h3 className="capitalize text-2xl leading-[30px] mb-4">
                Lorem Ipsum Dolor Sit Amet <br className="sm:flex hidden " />
                consectetur Lorem Ipsum Dolor <br className="sm:flex hidden " />{" "}
                Sit Amet consectetur
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
              </p>
              <p className="my-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
