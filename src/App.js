import logo from './logo.svg';
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/AuthDetails';
import React from "react";
import Dashboard from "./components/Dashboard";
import AddFingerprint from "./components/AddFingerprint";
import TimeIn from "./components/TimeIn";
import ViewHistory from "./components/ViewHistory";
//import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import {Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";



function App() {
  return (
    
      <div className="App">
      <SignIn />
      <SignUp />
      <AuthDetails />

<Router>
      <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/addfingerprint" component={AddFingerprint} />
          <Route exact path="/dashboard/timein" component={TimeIn} />
          <Route exact path="/dashboard/viewhistory" component={ViewHistory} />
          </Switch>
    </Router>

      </div>
    
  );
  


  }


export default App;