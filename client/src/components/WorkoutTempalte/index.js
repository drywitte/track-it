import React from "react";

export function InsertTemplate (props) {
    return(
    <div className="card">
        <h2 className="card-title">New Workout</h2>
        <select className="card-text" name="category">
            <option value="Run">Run</option>
            <option value="Rest">Rest</option>
            <option value="Strides">Strides</option>
        </select>
        <select className="card-text" name="type">
            <option value="Time">Time</option>
            <option value="Distance">Distance</option>
            <option value="Count">Count</option>
        </select>
        <select className="card-text" name="measure">
            <option value="Pace">Pace</option>
            <option value="Time">Time</option>
        </select>
        <input className="card-text" type="text" name="value"></input>
    </div>
    )
}

export default InsertTemplate;