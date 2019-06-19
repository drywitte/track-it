import React, { useState } from "react";
import Segment from "../Segment"

export function WorkoutTemplate (props) {
    console.log("segments are")
    console.log(props.segments)

    const defaultSegmentData = {
        category: "Run",
        type: "Time",
        measure: "Pace",
        amount: null
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
            <h2 className="card-title">New Workout</h2>
            <div className="form-group">
                {props.isEditable === "true" ? (
                    <div>
                        <form onSubmit={e => props.onSubmit(new_template, e)}>
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
                    <div className="card-body">
                        {
                            Object.keys(props.segments).map((keyName, keyIndex) => {
                                return <Segment key={keyName} id={keyName} isEditable={props.isEditable} segmentData={props.segments[keyName]} />
                        })
                        }
                    </div>
                )}
            </div>
        </div>
    )
}


export default WorkoutTemplate;