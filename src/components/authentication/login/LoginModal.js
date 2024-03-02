import React from "react";
import { IconContext } from "react-icons";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
export default function LoginModal({ visible, onClose }) {
  const handleClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      className="fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center  justify-center"
      onClick={handleClose}
    >
      <div className="bg-white p-[2%]  w-[26%] rounded-[12px]">
        <div className="flex justify-center items-center flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
              <h4 className="text-[20px] font-semibold text-[#4B494A] text-center">
                SIM
                <span className="text-[#EF5242]">Ver</span>
              </h4>
              <h6 className="text-[8px] uppercase text-center tracking-[2px]">
                carrier sim provider
              </h6>
            </div>
          </div>
          <h4 className="text-xl font-semibold my-3 ">Welcome Back</h4>
          <h5 className="text-sm font-semibold">Please enter your details</h5>
        </div>
        <div className="flex space-y-6 flex-col">
          <div>
            <label className="text-sm font-semibold">Email*</label>
            <div className="w-full h-[40px] rounded-lg border border-black">
              <input
                type="text"
                className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold">Password*</label>
            <div className="w-full h-[40px] rounded-lg border border-black">
              <input
                type="password"
                className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
              />
            </div>
          </div>
        </div>
        <p className="text-sm font-semibold my-6">Forget password</p>
        <button className="w-full bg-[#EF5242] h-[45px] rounded-lg text-white">
          Sign in
        </button>
        <p className="text-center text-sm mt-5">
          Don't have an account? <span>Sign up</span>
        </p>
      </div>
    </div>
  );
}
