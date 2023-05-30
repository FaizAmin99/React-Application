import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import AddFingerprint from "./AddFingerprint";
import TimeIn from "./TimeIn";
import ViewHistory from "./ViewHistory";

const Dashboard = () => {
  return (
    <div>
      <h1>DYMAX Application Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/addfingerprint">Add Fingerprint</Link>
          </li>
          <li>
            <Link to="/dashboard/timein">Time In</Link>
          </li>
          <li>
            <Link to="/dashboard/viewhistory">View History</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
