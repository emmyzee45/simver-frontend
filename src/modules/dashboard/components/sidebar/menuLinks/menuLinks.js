import React from "react";
import { Link } from "react-router-dom";

const MenuLink = ({ item }) => {
  const pathname = window.location.pathname;

  return (
    <Link
      to={item.path}
      className={`flex items-center gap-2 px-6 ${
        pathname === item.path ? "text-red-500" : ""
      }`}
    >
      {item.icon}
      <h5 className="text-xs">{item.title}</h5>
    </Link>
  );
};

export default MenuLink;
