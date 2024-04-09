import React from "react";

function General() {
  return (
    <div>
      <div className="mt-[3%]">
        <h5 className="text-black text-lg font-medium">Profile</h5>
        <p className="text-gray-700 text-sm">
          This information will be displayed on your profile.
        </p>
      </div>
      <div className="mt-[2%]">
        <label className="text-sm text-black">Email</label>
        <div>
          <div className="w-full h-[45px] border border-gray-300 rounded-[6px] cursor-not-allowed">
            <input
              type="text"
              placeholder="rhouzmeri19@gmail.com"
              className="w-full h-full px-4 rounded-[6px] outline-none"
            />
          </div>
        </div>
      </div>
      <div className="mt-[6%]">
        <div>
          <h5 className="text-black text-lg font-medium">Password</h5>
          <p className="text-gray-500 text-sm">Update your account password.</p>
        </div>
        <div className="mt-[3%]">
          <label className="text-sm text-black">Current Password</label>
          <div>
            <div className="w-full h-[45px] border border-gray-300 rounded-[6px] ">
              <input
                type="text"
                className="w-full h-full px-4 rounded-[6px] outline-none"
              />
            </div>
          </div>
        </div>
        <div className="mt-[3%]">
          <label className="text-sm text-black ">Password</label>
          <div>
            <div className="w-full h-[45px] border border-gray-300 rounded-[6px] ">
              <input
                type="text"
                className="w-full h-full px-4 rounded-[6px] outline-none"
              />
            </div>
          </div>
        </div>
        <div className="mt-[3%]">
          <label className="text-sm text-black">Confirm Password</label>
          <div>
            <div className="w-full h-[45px] border border-gray-300 rounded-[6px] ">
              <input
                type="text"
                className="w-full h-full px-4 rounded-[6px] outline-none"
              />
            </div>
          </div>
        </div>
        <button className="py-2 px-5 border bg-[#EF5242] text-white rounded-[6px] text-sm mt-[2%]">
          Continue
        </button>
        <div>
          <div className="my-[4%]">
            <h5 className="text-black text-lg font-medium">Two-factor</h5>
            <p className="text-gray-500 text-sm">
              Manage your two-factor authentication and tokens.
            </p>
          </div>
          <button className="py-2 px-5 border bg-[#EF5242] text-white rounded-[6px] text-sm ">
            Setup
          </button>
        </div>
      </div>
    </div>
  );
}

export default General;
