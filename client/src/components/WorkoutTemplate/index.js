import React, { useState } from "react";
import Segment from "../Segment"

export function WorkoutTemplate (props) {
    const [ new_template, setSegments] = useState([
        { id: Date.now(), segmentData: null}
    ]);
    
    function updateSegments() {
        setSegments([
            ...new_template,
            { id: Date.now(), segmentData: null }
        ]);

        console.log(new_template);
    }


    function onSegmentChange(id, e) {
        console.log(`segment change for ${id}`);
        new_template.forEach(element => 
            element.id === id ? (
                element.segmentData = {
                    ...element.segmentData,
                    [e.target.name] : e.target.value
                }
            ) : null
        )
        console.log(new_template);
    }

    return(
        <div className="card">
            <h2 className="card-title">New Workout</h2>
            <div className="form-group">
                <form onSubmit={e => props.submitAction(new_template, e)}>
                    {
                        new_template.map(segment => 
                            <Segment key={segment.id} id={segment.id} onSegmentChange={onSegmentChange}/> )
                    }
                    <button type="button" className="btn btn-secondary m-1" onClick={updateSegments}>Add Segment</button>
                    <button className="btn btn-primary m-1" >Submit</button>
                </form>
            </div>
        </div>
    )
}


export default WorkoutTemplate;