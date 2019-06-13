import React, { Component } from "react";
import API from "../utils/API";

class Users extends Component {
    state = {
        users: []
    }
    
    componentDidMount() {
        API.getUsers().then(res => {
            console.log(res.data[0]);
            this.setState({users: res.data});
        })
    }

    render() {
        return (
            <div>
                <h1>users</h1>
                <p>{this.state.users.map(user => user.id)}</p>
            </div>
        );
    }
}

export default Users;