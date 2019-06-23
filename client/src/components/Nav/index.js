import React from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {withUser} from "../../utils/UserContext";

export function Nav(props) {

    function handleLogout() {
        console.log(props)
        console.log("logging out");
        API.getLogout()
            .then(res => {
                props.setAuth(false, null)
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
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/myworkouts">Completed Workouts</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/workout_templates">Workout Templates</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/search">Browse Workouts</Link>
        </li>
        {props.user.isAuthed ? (
            <li className="nav-item">
                    <Link className="nav-link btn-secondary btn" to="/" onClick={e => handleLogout()}>Logout</Link>
            </li>
            ):
            null
        }
        <li className="nav-item">
            <Link className="nav-link btn-secondary btn" to="/login">Login</Link>
        </li>
    </ul>
    )
}

export default withUser(Nav);