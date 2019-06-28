import React, { Component } from "react";
import { Input, Submit, Selector } from "../components/Form"
import API from "../utils/API"
import { Redirect } from 'react-router-dom';
import {withUser} from "../utils/UserContext";
import {ValidationAlert} from "../components/Alerts";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            userName: null,
            firstName: null,
            lastName: null,
            dateOfBirth: null,
            gender: null,
            validations: ""
        }
    }


    validate = () => {
        // look into https://www.npmjs.com/package/react-validation
        let failure_reasons = []
        let validated = true;
        if (this.state.email === "") {
            validated = false;
            failure_reasons.push("Invalid email");
        }
        if (this.state.password === "") {
            validated = false;
            failure_reasons.push("Invalid password");
        }
        return [validated, failure_reasons]
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name] : value
        })
        console.log(this.state)
    }

    handleSumbit = () => {
        let validation = this.validate();
        let validated = validation[0];
        let failure_reasons = validation[1].join(", ");
        console.log(this.state)
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
            this.setState ({
                validations: failure_reasons
            })
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
                        {this.state.validations ? <ValidationAlert message={this.state.validations} />: null}
                        <Input onChange={this.handleChange} name="email" placeholder="Email" type="text" />
                        <Input onChange={this.handleChange} name="password" placeholder="Password" type="password" />
                        <Input onChange={this.handleChange} name="userName" placeholder="Username" type="text" />
                        <Input onChange={this.handleChange} name="firstName" placeholder="First name" type="text" />
                        <Input onChange={this.handleChange} name="lastName" placeholder="Last name" type="text" />
                        <Selector 
                            name="gender" 
                            handleChange={this.handleChange}
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