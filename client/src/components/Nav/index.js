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
            <Link className="nav-link" to="/myworkouts"><h4>Tracked Workouts</h4></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/workout_templates"><h4>Workout Templates</h4></Link>
        </li>
        {props.user.isAuthed ? (
            <React.Fragment>
             <li className="nav-item">
                <Link className="nav-link" to="/profile"><h4>My Profile</h4></Link>
            </li>   
            <li className="nav-item">
                <Link className="nav-link btn-secondary btn" to="/login" onClick={e => handleLogout()}>Logout</Link>
            </li>
            </React.Fragment>
            ):
            <React.Fragment>
                <li className="nav-item">
                    <Link className="nav-link btn-primary btn m-1" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn-info btn m-1" to="/signup">Signup</Link>
                </li>
            </React.Fragment>
        }
    </ul>
    )
}

export default withUser(Nav);