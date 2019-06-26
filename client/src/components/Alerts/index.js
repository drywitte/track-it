import React from "react";

export function ValidationAlert(props) {
    return (
        <div className="alert alert-dark">
           {props.message}
        </div>
    );
}
