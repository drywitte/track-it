import React from "react";

export function ValidationAlert(props) {
    return (
        <div className="row justify-content-center">
            <div className="alert alert-dark col-md-6">
                {props.message}
            </div>
        </div>
    );
}
