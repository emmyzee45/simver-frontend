import React from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout';

export default function Verifications() {
  return (
    <div>
      <DashboardLayout>
        <div className=" sm:px-[3%] px-[4%] ">
          <div className="flex justify-between items-center pt-[2%]">
            <h4 className="font-bold text-2xl">Verifications</h4>
            <button className="px-[20px] py-[12px] rounded-[8px] text-[13px] bg-[#EF5242] text-white">
              New Tickets
            </button>
          </div>

        </div>
      </DashboardLayout>
    </div>
  );
}
