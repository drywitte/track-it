import React, { Component } from "react";
// import { Input, Submit } from "../components/Form"

export function Workout (props) {
    {console.log(props)}
    return(
        <div className="card">
            <h2 className="card-title">{props.Workout_template.name}</h2>
            <h3 className="card-text">Length: {props.workout_details.length}</h3>
            <h3></h3> 
        </div>
    )
}

export default Workout;