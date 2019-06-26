import React from "react";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props}></input>
        </div>
    );
}

export function Submit(props) {
    return (
        <button className="m-2 btn btn-primary" {...props}>Submit</button>
    );
}

export function Selector(props) {
    return (
        <select className="form-control" name={props.name} onChange={props.handleChange}>
            {props.options.map(option => {
                return (<option value={option.value} key={option.value}>{option.value}</option>)
            })}
        </select>
    )
}