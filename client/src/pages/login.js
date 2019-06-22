import React, { Component } from "react";
import { Input, Submit } from "../components/Form"
import API from "../utils/API"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AppContext from "../utils/AppContext";


class Login extends Component {
    context = AppContext

    state = {
        email: "",
        password: "",
        page: null
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
        {console.log(this.context)}
        const body = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(body);
        API.postLogin(body)
            .then(res => {
                console.log(AppContext.isAuthed);
                }
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