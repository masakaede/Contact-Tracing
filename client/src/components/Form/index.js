import React, { Component } from 'react';
import "./style.css";
import Card from "../Card"
import NavTabs from '../NavTabs';

class Form extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        suburb: "",
        postCode: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if (!this.state.firstName) {
            alert("Fill out your first name please!");
        } else if (!this.state.lastName) {
            alert("Fill out your last name please!");
        } else if (!this.state.email) {
            alert("Fill out your email please!")
        } else if (!this.state.mobile) {
            alert("Fill out your mobile please!")
        } else if (!this.state.suburb) {
            alert("Fill out your suburb please!")
        } else if (!this.state.postCode) {
            alert("Fill out your post code please!")
        } else { }

        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            suburb: "",
            postCode: ""
        });
    };

    render() {
        return (
            <div>
                <Card>
                    <p>
                        Please fill in your contact detail
                </p>
                    <form className="form">
                        <input
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="First Name"
                        />
                        <input
                            value={this.state.lastName}
                            name="lastName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Last Name"
                        />
                        <input
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Email"
                        />
                        <input
                            value={this.state.mobile}
                            name="mobile"
                            onChange={this.handleInputChange}
                            type="integer"
                            placeholder="04xx xxx xxx"
                        />
                        <input
                            value={this.state.suburb}
                            name="suburb"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Suburb"
                        />
                        <input
                            value={this.state.postCode}
                            name="postCode"
                            onChange={this.handleInputChange}
                            type="integer"
                            placeholder="Post Code"
                        />
                        <button onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                </Card>
            </div>

        )
    }

}

export default Form;