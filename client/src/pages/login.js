import React, { Component } from "react";
import { Input, Submit } from "../components/Form"
import API from "../utils/API"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { withUser } from "../utils/UserContext";
import {ValidationAlert} from "../components/Alerts";


class Login extends Component {
    constructor(props) {
        super(props);
        console.log("props", this.props)
        this.state = {
            email: "",
            password: "",
            page: null,
            validations: this.props.location.validations
        }
    }


    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            email: this.state.email,
            password: this.state.password
        }
        API.postLogin(body)
            .then(res => {
                res.data.user_id ? (
                    this.props.setAuth(true, res.data.user_id))
                    : this.props.setAuth(false, null)
            })
            .catch(err => {
                console.log(err.response)
                this.setState({
                    validations: err.response.statusText
                })
            })
    }
    
    render() {
        return (
            <div className="container">
                {this.props.user.isAuthed ? 
                    <Redirect to="/myworkouts" />
                : 
                <div>
                <h1>Login</h1>
                {this.state.validations ? <ValidationAlert message={this.state.validations} /> : null}
                <Input placeholder="email" name="email" type="text" onChange={this.handleChange} />
                <Input placeholder="Password" name="password" type="password" onChange={this.handleChange} />
                <Submit onClick={this.handleSubmit} />
                </div>
                }
            </div>
        );
    }
}

export default withUser(Login);