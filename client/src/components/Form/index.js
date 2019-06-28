import React from "react";

export function Input(props) {
    return (
        <div className="form-group row justify-content-center mt-1">
            <input className="form-control col-md-6" {...props}></input>
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
        <div className="form-group row justify-content-center mt-1">
            <select className="form-control col-md-6" name={props.name} onChange={props.handleChange}>
                {props.options.map(option => {
                    return (<option value={option.value} key={option.value}>{option.value}</option>)
                })}
            </select>
        </div>
    )
}