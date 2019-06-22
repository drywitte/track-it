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

    handleSubmit = (setAuth, e) => {
        e.preventDefault();
        const body = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(body);
        API.postLogin(body)
            .then(res => {
                res.data.user_id ? 
                    setAuth(true, res.data.user_id)
                    : console.log("invalid")
            })
            .catch(err => console.log(err))
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Login</h1>
                <Input placeholder="email" name="email" type="text" onChange={this.handleChange} />
                <Input placeholder="Password" name="password" type="password" onChange={this.handleChange} />
                <Submit onClick={e => this.handleSubmit(this.props.setAuth, e)} />
                
            </div>
        );
    }
}

export default withUser(Login);