import React from 'react'

export default function GetStarted() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col h-[50vh] w-full">
        <h4 className="text-3xl font-bold">Get started today</h4>
        <p className='font-semibold py-5'>
          Sign-Up is quick, free, and easy. We respect your privacy. Your<br/>
          account will be ready to use within minutes.
        </p>
        <button className="px-[20px] py-[12px] rounded-[8px] text-[13px] text-white bg-[#EF5242] text-center ">
          Signup Now
        </button>
      </div>
    </div>
  );
}
