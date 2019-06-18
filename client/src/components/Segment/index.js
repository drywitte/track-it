import React from "react";

export function Segment(props) {
    return (
        <div>
            <select className="card-text m-1" name="category" onChange={(e) => props.onSegmentChange(props.id, e)}>
                <option value="Run">Run</option>
                <option value="Rest">Rest</option>
                <option value="Strides">Strides</option>
            </select>
            <select className="card-text m-1" name="type" onChange={(e) => props.onSegmentChange(props.id, e)}>
                <option value="Time">Time</option>
                <option value="Distance">Distance</option>
                <option value="Count">Count</option>
            </select>
            <select className="card-text m-1" name="measure" onChange={(e) => props.onSegmentChange(props.id, e)}>
                <option value="Pace">Pace</option>
                <option value="Time">Time</option>
            </select>
            <input className="card-text m-1" type="text" name="amount" onChange={(e) => props.onSegmentChange(props.id, e)}></input>
        </div>
    )
}

export default Segment;