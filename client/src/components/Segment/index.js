import React from "react";

export function Segment(props) {
    return (
        <div>
            <select className="card-text m-1" name="category" onChange={() => props.onSegmentUpdate(props.id)}>
                <option value="Run">Run</option>
                <option value="Rest">Rest</option>
                <option value="Strides">Strides</option>
            </select>
            <select className="card-text m-1" name="type" onChange={props.onSegmentUpdate}>
                <option value="Time">Time</option>
                <option value="Distance">Distance</option>
                <option value="Count">Count</option>
            </select>
            <select className="card-text m-1" name="measure" onChange={props.onSegmentUpdate}>
                <option value="Pace">Pace</option>
                <option value="Time">Time</option>
            </select>
            <input className="card-text m-1" type="text" name="amount" onChange={props.onSegmentUpdate}></input>
        </div>
    )
}

export default Segment;