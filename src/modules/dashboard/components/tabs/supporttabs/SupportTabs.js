import React, { useState } from "react";
import Open from "./open";


const SupportTabs = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "Open",
      title: "Open",
      content: <Open/>,
    },
    {
      id: 2,
      tabTitle: "Closed",
      title: "Closed",
      content: "2",
    },
    
  ];

  const handleTabChange = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className="text-white">
      <div className="flex gap-7 items-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabChange}
            className={`cursor-pointer text-sm font-medium  font-poppins ${
              currentTab === `${tab.id}`
                ? "text-[#EF5242] border-b-[2px] border-[#EF5242]"
                : "text-gray-700"
            }`}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="mt-[1%]">
        {tabs.map((tab, index) => (
          <div key={index}>
            {currentTab === `${tab.id}` && <div>{tab.content}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportTabs;
