import React, { Component } from "react";
import { Input, Submit, Selector } from "../components/Form"
import API from "../utils/API"
import { Redirect } from 'react-router-dom';
import {withUser} from "../utils/UserContext";

class Signup extends Component {
    state = {
        email: "",
        password: "",
        userName: null,
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        gender: null,
    }


    validate = () => {
        // look into https://www.npmjs.com/package/react-validation
        let validated = true;
        if (this.state.email == "" || this.state.password == "") {
            validated = false
        }
        else {
            validated = true
        }
        return validated
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })

    }

    handleSumbit = () => {
        let validated = this.validate();
        console.log("is validated ", validated);
        if (validated) { 
            API.postSignup(this.state)
                .then(res => {
                    return res.status === 200 ? 
                    this.props.setAuth(true, res.data.user_id)
                    : console.log(res.status)
                })
                .catch((err) => {
                    console.log(err)  
                })
        }
        else {
            console.log("not validated")
        }

    }

    render() {
        return (
            
            <div>
                {this.props.user.isAuthed ? 
                    <Redirect to="/myworkouts" />
                    :
                    <React.Fragment>
                        <h1>Signup</h1>
                        <Input onChange={this.handleChange} name="email" placeholder="Email" type="text" />
                        <Input onChange={this.handleChange} name="password" placeholder="Password" type="password" />
                        <Input onChange={this.handleChange} name="userName" placeholder="Username" type="text" />
                        <Input onChange={this.handleChange} name="firstName" placeholder="First name" type="text" />
                        <Input onChange={this.handleChange} name="lastName" placeholder="Last name" type="text" />
                        <Selector onChange={this.handleChange} 
                            name="gender" 
                            onChange={this.handleChange}
                            options={[
                                {value: "male"},
                                {value: "female"},
                                {value: "other"}
                            ]}
                            />
                        <Submit onClick={this.handleSumbit} />
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default withUser(Signup);