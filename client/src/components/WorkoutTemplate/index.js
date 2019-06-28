import React, { useState } from "react";
import Segment from "../Segment"
import {withUser} from "../../utils/UserContext"

export function WorkoutTemplate (props) {
    let name = ""

    const defaultSegmentData = {
        // category: "Run",
        type: "Time",
        type_amount: "",
        measure: "Pace",
        measure_amount: "",
        // amount: null
    }

    const [new_template, setSegments] = useState([
        { id: Date.now(), segmentData: defaultSegmentData}
    ]);
    

    function updateSegments() {
        setSegments([
            ...new_template,
            { id: Date.now(), segmentData: defaultSegmentData }
        ]);
    }

    function handleNameChange(e) {
        name = e.target.value;
    }

    function onSegmentChange(id, e) {
        new_template.forEach(element => 
            element.id === id ? (
                element.segmentData = {
                    ...element.segmentData,
                    [e.target.name] : e.target.value
                }
            ) : null
        )
    }


    return(
        <div className="card">
                {props.isEditable === "true" ? (
                        <div className="form-group m-2">
                        <form onSubmit={e => props.submitAction(new_template, name, e)}>
                            <input type="text" name="workoutName" onChange={e => handleNameChange(e)} className="card-title" placeholder="Workout Name" />
                            {
                                new_template.map(segment => 
                                    <Segment key={segment.id} id={segment.id} onSegmentChange={onSegmentChange} isEditable={props.isEditable} /> )
                            }
                            <button type="button" className="btn btn-secondary m-1" onClick={updateSegments}>Add Segment</button>
                            <button className="btn btn-primary m-1" >Submit</button>
                        </form>
                        </div>
                )
                : (
                    <div>
                        <h2 className="card-title">{props.name}</h2>
                        <div className="card-body">
                            {
                                Object.keys(props.segments).map((keyName, keyIndex) => {
                                    return <Segment key={keyName} id={keyName} isEditable={props.isEditable} segmentData={props.segments[keyName]} />
                            })
                            }
                        </div>
                        {props.displayAction ?
                            <button className="btn btn-primary m-1" id={props.id} onClick={e => props.postCompleted(e)} disabled={props.isCompleted} >Track it</button> 
                            : null 
                        }
                        {props.trackedCount ?
                            (<div>{props.trackedCount} <i class="fas fa-running"></i></div>)
                            : null
                        }
                    </div>
                )}
        </div>
    )
}


export default withUser(WorkoutTemplate);