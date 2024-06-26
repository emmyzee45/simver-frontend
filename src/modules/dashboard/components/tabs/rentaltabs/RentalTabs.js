import React, { useState } from "react";
import ActiveRentals from "./activerentals";
import OverdueRental from "./overduerentals/page";
import RentalBackOrders from "./rentalbackorders";
import RentalsHistory from "./rentalshistory";
import BillingCycles from "./billingcycles";
import BillingCycleHIstory from "./billingcyclehistory";


const RentalTabs = () => {
  const [currentTab, setCurrentTab] = useState("1");

  const tabs = [
    {
      id: 1,
      tabTitle: "Active Rentals",
      title: "Active Rentals",
      content: <ActiveRentals/>,
    },
    {
      id: 2,
      tabTitle: "Overdue Rentals",
      title: "Overdue Rentals",
      content: <OverdueRental/>,
    },
    {
      id: 3,
      tabTitle: "Rental Backorders",
      title: "Rental Backorders",
      content: <RentalBackOrders/>,
    },
    {
      id: 4,
      tabTitle: "Rentals History",
      title: "Rentals History",
      content: <RentalsHistory/>,
    },
    {
      id: 5,
      tabTitle: "Billing Cycles",
      title: "Billing Cycles",
      content: <BillingCycles/>,
    },
    {
      id: 6,
      tabTitle: "Billing Cycles History",
      title: "Billing Cycles History",
      content: <BillingCycleHIstory/>,
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
              currentTab === `${tab.id}` ? "text-[#EF5242] border-b-[2px] border-[#EF5242]" : "text-gray-700"
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

export default RentalTabs;