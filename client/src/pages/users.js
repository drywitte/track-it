import React, { Component } from "react";
import API from "../utils/API";

class Users extends Component {
    componentDidMount() {
        console.log(API.getUsers());
    }

    render() {
        return (
            <h1>users</h1>
        );
    }
}

export default Users;