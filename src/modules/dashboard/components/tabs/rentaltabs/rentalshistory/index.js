import React from 'react'
import { IconContext } from 'react-icons';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { RxCaretDown } from 'react-icons/rx';
import CReateRental from '../../../createrental';

export default function RentalsHistory() {
  return (
    <div>
      <h4 className="text-2xl font-semibold text-black ">Rentals History</h4>
      <div className="flex justify-between items-center mt-1">
        <h5 className="text-gray-700">
          Review a log of your past phone number rentals. Potential reactivation
          of number through Details. First Previous Next Last
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
      <div className="flex gap-5 my-4">
        <div className="border border-gray-300 text-gray-700 px-3 rounded-[6px] py-2 flex gap-5 items-center cursor-pointer">
          <h5 className="text-sm ">Filter By Numbers</h5>
          <RxCaretDown className="text-[20px]" />
        </div>
        <div className="border border-gray-300 text-gray-700 px-3 rounded-[6px] py-2 flex gap-5 items-center cursor-pointer">
          <h5 className="text-sm ">Filter By Services</h5>
          <RxCaretDown className="text-[20px]" />
        </div>
        <button className="py-2 px-5 bg-[#EF5242] text-white rounded-[6px] text-sm">
          Apply
        </button>
        <button className="py-2 px-5 border border-[#EF5242] text-[#EF5242] rounded-[6px] text-sm">
          Reset
        </button>
        
      </div>
      <div className="mt-[3%]">
        <table className="text-gray-700 w-full ">
          <tr className="border ">
            <th className="py-2">Messages</th>
            <th>Services</th>
            <th>Number</th>
            <th>Line Type</th>
            <th>Purchased On</th>
            <th>Actions</th>
          </tr>
        </table>
      </div>
      <CReateRental />
    </div>
  );
}
