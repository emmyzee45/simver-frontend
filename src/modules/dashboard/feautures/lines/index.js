import React from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import { FaCircleInfo } from 'react-icons/fa6';
import RentalTabs from '../../components/tabs/rentaltabs/RentalTabs';

function Lines() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <DashboardLayout>
        <div className="sm:px-[3%] px-[4%]  sm:pt-[2.5%] pt-[7%]">
          <div className="w-full py-[2%]  bg-[#ef534238] rounded-[6px] flex items-center justify-center px-[2%]">
            <div className="flex space-x-3 items-start">
              <div className="w-[3%]">
                <FaCircleInfo className="text-[#EF5242]" />
              </div>
              <div className="w-[97%]">
                <div className="sm:text-xs  text-xs text-[#EF5242]">
                  We are happy to announce the next phase of our rentals and
                  verification merge! All legacy API endpoints will be
                  deprecated on March 31, 2024. New API docs for verifications
                  and rentals are available:
                  https://www.textverified.com/docs/api/v2
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-[2%]">
            <h4 className="font-bold text-2xl">Rentals</h4>
            <button className="px-[20px] py-[12px] rounded-[8px] text-[13px] bg-[#EF5242] text-white">
              Purchase New Rental
            </button>
          </div>
          <div className="mt-[3%]">
            <RentalTabs />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default Lines