import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Dashboardd from "./modules/dashboard/feautures/dashboard";
function Routess() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboardd />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routess;
