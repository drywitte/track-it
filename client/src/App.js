import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Users from "./pages/users";
import Login from "./pages/login";
import Home from "./pages/home";
import myWorkouts from "./pages/myWorkouts";
import WorkoutTemplates from "./pages/workoutTemplates";
import Signup from "./pages/signup";
import UserContext from "./utils/UserContext";
import {PrivateRoute} from "./components/PrivateRoute";

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthed: false,
      userId: null,
    }
  }

  setAuth = (bool, userId) => {
    this.setState({
      isAuthed: bool,
      userId: userId
    })
  }

  render() {
    return (
      <div className="App">
        <UserContext.Provider
          value={{
            user: this.state,
            setAuth: this.setAuth,
          }}
        >
          <Router>
            <Nav />
            <Switch>
              <Route exact path="/users" component={Users} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route exact path="/" component={Home} />
              {this.state.isAuthed ? 
                <React.Fragment>
                  <Route path="/myworkouts" component={myWorkouts} />
                  <Route exact path="/workout_templates" component={WorkoutTemplates} />
                </React.Fragment>
                :
                <Redirect to="/login" />
              }
            </Switch>
          </Router>
        </UserContext.Provider>
      </div>
    )
  }
}

UserContext.contextType = UserContext;

export default App;
