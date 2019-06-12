import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/users";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/users" component={Users} />
      </Router>
    </div>
  );
}

export default App;
