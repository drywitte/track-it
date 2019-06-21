import React from "react";
import API from "../../utils/API";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

export function Nav() {

    function handleLogout() {
        console.log("logging out");
        API.getLogout()
            .then(res => {
                return (
                    <Router > 
                        <Redirect to="/myworkouts" />
                    </Router>
                )
            })
    }


    return(
    <ul className="nav">
        <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/myworkouts">Completed Workouts</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/workout_templates">Workout Templates</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/search">Browse Workouts</a>
        </li>
        <li className="nav-item">
            <a className="nav-link btn-secondary btn" onClick={handleLogout}>Logout</a>
        </li>
        <li className="nav-item">
            <a className="nav-link btn-secondary btn" href="/login">Login</a>
        </li>
    </ul>
    )
}

export default Nav;