import React, { Component } from "react";
import { Input, Submit } from "../components/Form"
import API from "../utils/API"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { withUser } from "../utils/UserContext";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            page: null
        }
        this.setAuth = this.props.setAuth.bind(this);
    }

    // componentDidMount = () => {
    //     console.log("this context is", this.context)
    // }

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
        console.log(body);
        API.postLogin(body)
            .then(res => {
                res.data.user_id ? (
                    this.setAuth(true, res.data.user_id)
                    )
                    : this.setAuth(false, null)
            })
            .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div>
                {this.props.user.isAuthed ? 
                    <Redirect to="/myworkouts" />
                : 
                <div>
                <h1>Login</h1>
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