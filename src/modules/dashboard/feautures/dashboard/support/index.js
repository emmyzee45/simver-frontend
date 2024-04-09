import React from 'react'
import DashboardLayout from '../../../layouts/DashboardLayout'
import SupportTabs from '../../../components/tabs/supporttabs/SupportTabs';

export default function Support() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <DashboardLayout>
        <div className=" sm:px-[3%] px-[4%] sm:pt-[2.5%] pt-[7%]">
          <div className="flex justify-between items-center mt-[2%]">
            <h4 className="font-bold text-2xl">Support</h4>
            <button className="px-[20px] py-[12px] rounded-[8px] text-[13px] bg-[#EF5242] text-white">
              New Tickets
            </button>
          </div>
          <SupportTabs />
        </div>
      </DashboardLayout>
    </div>
  );
}
 