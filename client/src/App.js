import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Users from "./pages/users";
import Login from "./pages/login";
import Home from "./pages/home";
import myWorkouts from "./pages/myWorkouts";
import WorkoutTemplates from "./pages/workoutTemplates";
import Signup from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route path="/myworkouts" component={myWorkouts} />
          <Route exact path="/workout_templates" component={WorkoutTemplates} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
