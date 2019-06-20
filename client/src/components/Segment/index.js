import React from "react";

export function Segment(props) {
    // function disableOption() {
        
    // }
    
    return (
        <div>
            {props.isEditable === "true" ? (
                <div>
                    {/* <select className="card-text m-1" name="category" onChange={(e) => props.onSegmentChange(props.id, e)}>
                        <option value="Run">Run</option>
                        <option value="Rest">Rest</option>
                        <option value="Strides">Strides</option>
                    </select> */}
                    <select className="card-text m-1" name="type" onChange={(e) => props.onSegmentChange(props.id, e)}>
                        <option value="Time">Time</option>
                        <option value="Distance">Distance</option>
                        {/* <option value="Count">Count</option> */}
                    </select>
                    <input className="card-text m-1" type="text" name="type_amount" onChange={(e) => props.onSegmentChange(props.id, e)} />
                    <select className="card-text m-1" name="measure" onChange={(e) => props.onSegmentChange(props.id, e)}>
                        <option value="Pace">Pace</option>
                        <option value="Time">Time</option>
                    </select>
                    <input className="card-text m-1" type="text" name="measure_amount" onChange={(e) => props.onSegmentChange(props.id, e)} />

                    {/* <input className="card-text m-1" type="text" name="amount" onChange={(e) => props.onSegmentChange(props.id, e)}></input> */}
                </div>
                ) : (
                    <div>
                        <div className="card-text">
                            {/* <p>Category: {props.segmentData.category}</p> */}
                            <p>Type: {props.segmentData.type}</p>
                            <p>Type Amount: {props.segmentData.type_amount}</p>
                            <p>Measure: {props.segmentData.measure}</p>
                            <p>Measure Amount: {props.segmentData.measure_amount}</p>
                            {/* <p>Amount: {props.segmentData.amount}</p> */}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Segment;