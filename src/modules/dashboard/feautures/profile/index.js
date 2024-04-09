import React from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import SettingsTabs from '../../components/tabs/settingstabs/SettingsTabs';

function Profile() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <DashboardLayout>
         <div className=" sm:px-[8%] px-[4%] sm:pt-[2.5%] pt-[7%]">
            <SettingsTabs/>
         </div>
      </DashboardLayout>
    </div>
  );
}

export default Profile