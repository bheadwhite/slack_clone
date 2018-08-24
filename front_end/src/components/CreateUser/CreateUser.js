import React, { Component } from "react";
import "./CreateUser.css";

import axios from "axios";
import { Redirect } from "react-router-dom";

class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      profileImg: ""
    };

    this.handleInputs = this.handleInputs.bind(this);
  }

  // We need a function to an endpoint that
  // creates a user with the info from the
  // form. And if it works redirect to '/'

  //! createUser() {
  //!  Needs the endpoint
  //   axios.post(`http://localhost3001/endpointHere`, {body of request here}).then(() => {
  //     console.log("This function should redirect to the home page after a succesful creation of a user");
  //   });
  // }

  handleInputs(event) {
    // uses the name of the input and the value.   Very nice -Borat
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="create-user-wrapper">
        <form>
          <div className="header">
            <img src="https://assets.brandfolder.com/p34392sa/view.png" />
          </div>

          <input type="text" name="first-name" placeholder="First Name" onChange={this.handleInputs} />
          <input type="text" name="last-name" placeholder="Last Name" onChange={this.handleInputs} />
          <input type="text" name="phone" placeholder="Phone Number" onChange={this.handleInputs} />
          <input type="text" name="email" placeholder="Email" onChange={this.handleInputs} />
          <input type="text" name="profileImg" placeholder="Profile Image" onChange={this.handleInputs} />
          <button className="login-btn">Create Account</button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
