import React, { Component } from "react";
import { Input, Submit, Selector } from "../components/Form"
import API from "../utils/API"
import { withUser } from "../utils/UserContext";
import {ValidationAlert} from "../components/Alerts";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "view",
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

    componentDidMount() {
        API.getUser(this.props.user.userId)
            .then(res => {
                const data = res.data
                this.setState({
                    email: data.email,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    dateOfBirth: data.date_of_birth,
                    gender: data.gender
                })
            })
            .catch(err => {
                console.log("error", err)
                this.setState({
                    validations: err.statusText
                })
            })
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        API.updateUser(this.props.user.userId, this.state)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        this.toggleMode();
    }

    toggleMode = () => {
        this.state.mode === "view" ?
            this.setState({
                mode: "edit"
            })
            : (
                this.setState({
                    mode: "view"
                })
            )
    }

    render() {
        return (
            <div className="container">
                {this.state.mode === "view" ? (
                    <div className="card row">
                        <h1>{this.state.firstName} {this.state.lastName}</h1>
                        <div className="card-text">
                            <p>{this.state.email}</p>
                            <p>{this.state.gender}</p>
                            <button className="btn btn-primary m-2 col-m-1" onClick={this.toggleMode}>Edit</button>
                        </div>
                    </div>
                ): (
                    <div className="card row">
                        <div className="card-text">
                        {this.state.validations ? <ValidationAlert message={this.state.validations} />: null}
                        <Input onChange={this.handleChange} name="email" value={this.state.email} type="text" />
                        <Input onChange={this.handleChange} name="firstName" value={this.state.firstName} type="text" />
                        <Input onChange={this.handleChange} name="lastName" value={this.state.lastName} type="text" />
                        <Selector 
                            name="gender" 
                            handleChange={this.handleChange}
                            value={this.state.gender}
                            options={[
                                {value: "male"},
                                {value: "female"},
                                {value: "other"}
                            ]}
                            />
                        <button className="btn btn-primary m-2 col-m-1" onClick={this.handleSubmit}>Save</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }

}

export default withUser(Profile);