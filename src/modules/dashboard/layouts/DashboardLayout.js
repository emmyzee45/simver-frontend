import React from "react";

import Sidebar from "../components/sidebar";
import Header from "../components/header";

export default function DashboardLayout(props) {
  return (
    <div className="flex ">
      <div className=" w-[250px] h-screen flex-1 bg-[#f6f6f6]">
        <Sidebar />
      </div>
      <div className="flex-[5] flex-col bg-[#ffffff]">
        <Header />
        {props.children}
      </div>
    </div>
  );
}
