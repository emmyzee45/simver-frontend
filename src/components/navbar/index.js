import React,{useState} from "react";

import { RiMenu3Line } from "react-icons/ri";
import LoginModal from "../authentication/login/LoginModal";
import RegisterModal from "../authentication/register/RegisterModal";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const handleRegisterClose = () => setShowRegisterModal(false);
    const [toggle, setToggle] = useState(false);
  return (
    <section className=" w-full">
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        <div className="flex justify-between  w-full h-[80px] border-b-[1px] border-[#ef534217] items-center  ">
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
            <button
              onClick={() => {
                setShowRegisterModal(true);
              }}
              className="px-[15px] py-[10px] rounded-[8px] sm:text-[13px] text-[10px] bg-[#EF5242] text-white"
            >
              Create account
            </button>
            <RegisterModal
              onClose={handleRegisterClose}
              visible={showRegisterModal}
            />

            <div className="sm:hidden flex" onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <IoClose className="text-black text-[22px]" />
              ) : (
                <RiMenu3Line className="text-black text-[22px]" />
              )}
            </div>
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-10`}
            >
              <ul className="list-none flex flex-col  justify-end items-center flex-1">
             
                  <li>Home</li>
                  <li>Feautures</li>
                  <li>Subscriptions</li>
                  <li>FAQs</li>
                  <li>Contact Us</li>
                
              </ul>
            </div>
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
            <button
              className="px-[20px] py-[12px] rounded-[8px] text-[13px] bg-[#EF5242] text-white"
              onClick={() => {
                setShowRegisterModal(true);
              }}
            >
              Create account
            </button>
            <RegisterModal
              onClose={handleRegisterClose}
              visible={showRegisterModal}
            />
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className="px-[20px] py-[12px] rounded-[8px] text-[13px] border border-[#EF5242] text-[#EF5242]"
            >
              Login
            </button>
            <LoginModal onClose={handleClose} visible={showModal} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
