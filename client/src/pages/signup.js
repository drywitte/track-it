import React, { Component } from "react";
import { Input, Submit } from "../components/Form"
import API from "../utils/API"
import { Redirect } from 'react-router-dom';

class Signup extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
    }

    handleSumbit = () => {
        API.postSignup(this.state)
            .then(() => <Redirect to="/x" />)
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Signup</h1>
                <Input onChange={this.handleChange} name="email" placeholder="Email" type="text" />
                <Input onChange={this.handleChange} name="password" placeholder="Password" type="password" />
                <Submit onClick={this.handleSumbit} />
            </div>
        );
    }
}

export default Signup;