import React from "react";
import CReateRental from "../../../createrental";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function OverdueRental() {
  return (
    <div>
      <div>
        <h4 className="text-2xl font-semibold text-black ">Overdue Rentals</h4>
      </div>
      <div className="flex justify-between items-center mt-1">
        <h5 className="text-gray-700">
          View numbers with expired rental periods - the lines will be deleted
          if not renewed within 72 hours.
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
            <th className="py-2">Messages</th>
            <th>Services</th>
            <th>Number</th>
            <th>Renew</th>
            <th>Time Left</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </table>
      </div>
      <CReateRental />
    </div>
  );
}
