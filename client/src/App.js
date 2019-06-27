import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/login";
import trackedWorkouts from "./pages/trackedWorkouts";
import WorkoutTemplates from "./pages/workoutTemplates";
import Signup from "./pages/signup";
import UserContext from "./utils/UserContext";
import API from "./utils/API";

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

  componentDidMount() {
    API.getCurrentUser()
      .then(res => {
          if(Object.keys(res.data).length > 0) {
            this.setAuth(true, res.data.userId);
          }
          return
        }
      )
      .catch(
        err => console.log("unsuccessful", err)
      )
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
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              {this.state.isAuthed ? 
                <React.Fragment>
                  <Route path="/myworkouts" component={trackedWorkouts} />
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
