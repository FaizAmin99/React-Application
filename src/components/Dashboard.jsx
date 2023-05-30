import React from "react";
import { Link} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const Dashboard = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    // Redirect to the login page if the user is not logged in
    return <Redirect to="/login" />;
  }

  return (
    <div>
    <h1>DYMAX Dashboard!</h1>
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
