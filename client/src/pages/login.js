import React, { Component } from "react";
import { Input, Submit } from "../components/Form"
import API from "../utils/API"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            page: null
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (setAuth, e) => {
        e.preventDefault();
        const body = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(body);
        API.postLogin(body)
            .then(res => {
                setAuth(res.data.user_id);
            })
            .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div>
                <h1>Login</h1>
                <Input placeholder="email" name="email" type="text" onChange={this.handleChange} />
                <Input placeholder="Password" name="password" type="password" onChange={this.handleChange} />
                <UserContext.Consumer>
                    {(state) => (
                        <Submit onClick={e => this.handleSubmit(state.setAuth, e)} />
                    )}
                </UserContext.Consumer>
                
            </div>
        );
    }
}

export default Login;