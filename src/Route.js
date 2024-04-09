import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboardd from "./modules/dashboard/feautures/dashboard";
import Lines from "./modules/dashboard/feautures/lines";
import Profile from "./modules/dashboard/feautures/profile";
import Support from "./modules/dashboard/feautures/dashboard/support";
import Verifications from "./modules/dashboard/feautures/dashboard/verifications";
function Routess() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/credits" exact element={<Dashboardd />} />
          <Route path="/lines" exact element={<Lines />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/support" exact element={<Support />} />
          <Route path="/verifications" exact element={<Verifications />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routess;
