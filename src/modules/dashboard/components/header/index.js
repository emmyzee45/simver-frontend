
import React from 'react'

export default function Header() {
    const pathname = window.location.pathname;
  return (
    <div className="h-[10vh] border-b-[1px] border-[#ef534217] w-full flex justify-between items-center px-5">
      {pathname.split("/").pop()}
    </div>
  );
}
