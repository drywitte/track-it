import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/users";
import Login from "./pages/login";
import Home from "./pages/home";
import myWorkouts from "./pages/myWorkouts";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/users" component={Users} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/myworkouts" component={myWorkouts} />
      </Router>
    </div>
  );
}

export default App;
