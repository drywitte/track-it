import React, { Component } from "react";
import { Input, Submit } from "../components/Form"

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Input placeholder="Username" type="text" />
                <Input placeholder="Password" type="password" />
                <Submit />
            </div>
        );
    }
}

export default Login;