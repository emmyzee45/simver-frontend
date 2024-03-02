import React,{useState} from "react";
import { FcCustomerSupport } from "react-icons/fc";
import Messaging from "./contents/messaging/Messaging";

export default function Feauture() {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "My Token",
      title: "My Token",
      content: <Messaging />,
      icon: <FcCustomerSupport />,
    },
    {
      id: 2,
      tabTitle: "Token Minting",
      title: "Token Minting",
      content: <Messaging />,
      icon: <FcCustomerSupport />,
    },
    {
      id: 3,
      tabTitle: "Statistics",
      title: "Statistics",
      content: <Messaging />,
      icon: <FcCustomerSupport />,
    },
    {
      id: 4,
      tabTitle: "Solana Tools",
      title: "Solana Tools",
      content: <Messaging />,
      icon: <FcCustomerSupport />,
    },
    {
      id: 5,
      tabTitle: "Statistics",
      title: "Statistics",
      content: <Messaging />,
      icon: <FcCustomerSupport />,
    },
    {
      id: 6,
      tabTitle: "Solana Tools",
      title: "Solana Tools",
      content: <Messaging />,
      icon: <FcCustomerSupport />,
    },
  ];

  const handleTabChange = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#EEEEEE] py-[5%]">
          <div className="px-[4%] sm:pl-[5%] sm:pr-[13%]">
            <div className="grid sm:grid-cols-12 grid-cols-1 items-start sm:gap-7 ">
              <div className="col-span-5">
                <div className="grid grid-cols-2 gap-10">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      id={tab.id}
                      disabled={currentTab === `${tab.id}`}
                      onClick={handleTabChange}
                      className={`cursor-pointer flex flex-col  ${
                        currentTab === `${tab.id}`
                          ? "text-[#EF5242]"
                          : ""
                      }`}
                    >
                      <h3 className="text-[80px]" onClick={handleTabChange}>
                        {" "}
                        {tab.icon}
                      </h3>
                      <h4 className="text-lg" onClick={handleTabChange}>
                        {tab.tabTitle}
                      </h4>
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-span-7 sm:mt-0 mt-[5%]">
                {tabs.map((tab, index) => (
                  <div key={index}>
                    {currentTab === `${tab.id}` && <div>{tab.content}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
