import React, { Component } from "react";
// import { Input, Submit } from "../components/Form"

export function Workout (props) {
    {console.log(props)}
    return(
        <div>
            <h2>Workout</h2>
            <h3>Name: {props.Workout_template.name}</h3>
            <h3>Length: {props.workout_details.length}</h3>
            <h3></h3> 
        </div>
    )
}

export default Workout;