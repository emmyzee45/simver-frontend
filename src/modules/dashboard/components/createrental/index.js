import React from 'react'
import { IoCalendarOutline } from "react-icons/io5";
export default function CReateRental() {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-[6%]">
      <IoCalendarOutline className='text-[45px] text-[#EF5242] mb-[3%]' />
      <p className="text-gray-700 text-sm my-[1%]">Create a new rental now.</p>
      <button className="py-2 px-5 border bg-[#EF5242] text-white rounded-[6px] text-sm ">
        New Rental
      </button>
    </div>
  );
}
