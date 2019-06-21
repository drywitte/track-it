import React, { Component } from "react";
import { Input, Submit } from "../components/Form"
import API from "../utils/API"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("handling submit")  
        console.log(this.state)
        API.postLogin(this.state)
            .then(res => 
                <Router > 
                    <Redirect to="/myworkouts" />
                </Router>
            )
            .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Input placeholder="email" name="email" type="text" onChange={this.handleChange} />
                <Input placeholder="Password" name="password" type="password" onChange={this.handleChange} />
                <Submit onClick={this.handleSubmit} />
            </div>
        );
    }
}

export default Login;