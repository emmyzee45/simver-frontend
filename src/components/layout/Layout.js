import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";


export default function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
