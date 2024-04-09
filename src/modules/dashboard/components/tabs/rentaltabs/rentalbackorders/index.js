import React from "react";
import { IconContext } from "react-icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CReateRental from "../../../createrental";

export default function RentalBackOrders() {
  return (
    <div>
      <div>
        <h4 className="text-2xl font-semibold text-black ">
          Rental Backorders
        </h4>
      </div>
      <div className="flex justify-between items-center mt-1">
        <h5 className="text-gray-700">
          View requests for numbers that you have backordered. May take up to 72
          hours to process.
        </h5>
        <div className="text-gray-700 flex justify-between items-center border rounded-[6px] border-gray-700">
          <IconContext.Provider value={{ size: "16px" }}>
            <button className="px-2 py-1.5  rounded-tl-[6px] rounded-bl-[6px] border-r-[1px] border-gray-700">
              First
            </button>
            <button className="pr-2">
              <FaChevronLeft />
            </button>
            <button className="pl-2">
              <FaChevronRight />
            </button>
            <button className="px-2 py-1.5  rounded-tr-[6px] rounded-br-[6px] border-l-[1px] border-gray-700">
              Last
            </button>
          </IconContext.Provider>
        </div>
      </div>
      <div className="mt-[3%]">
        <table className="text-gray-700 w-full ">
          <tr className="border ">
            
            <th className="py-2">Services</th>
            <th>Durations</th>
            <th>Line Type</th>
            <th>State</th>
            <th>Actions</th>
         
          </tr>
        </table>
      </div>
      <CReateRental />
    </div>
  );
}
