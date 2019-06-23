import React from "react";
import { Link } from 'react-router-dom';
import API from "../../utils/API";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {withUser} from "../../utils/UserContext";

export function Nav(props) {

    function handleLogout() {
        API.getLogout()
            .then(res => {
                props.setAuth(false, null)
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
        {props.user.isAuthed ? 
            <li className="nav-item">
            <Link className="nav-link btn-secondary btn" to="/long" onClick={e => handleLogout()}>Logout</Link>
            </li>
            :
            <React.Fragment>
                <li className="nav-item">
                <Link className="nav-link btn-secondary btn m-1" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link btn-secondary btn m-1" to="/signup">Signup</Link>
                </li>
            </React.Fragment>
        }
    </ul>
    )
}

export default withUser(Nav);