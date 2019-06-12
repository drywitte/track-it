import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/users";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/users" component={Users} />
        <Route path="/login" component={Login} />
      </Router>
    </div>
  );
}

export default App;
