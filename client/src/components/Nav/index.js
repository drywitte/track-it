import React from "react";

export function Nav() {
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
    </ul>
    )
}

export default Nav;