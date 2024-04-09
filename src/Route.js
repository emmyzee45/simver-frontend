import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboardd from "./modules/dashboard/feautures/dashboard";
import Lines from "./modules/dashboard/feautures/lines";
import Profile from "./modules/dashboard/feautures/profile";
function Routess() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/credits" exact element={<Dashboardd />} />
          <Route path="/lines" exact element={<Lines />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routess;
