import React, { Component } from "react";
import "./CreateUser.css";

class CreateUser extends Component {
  state = {};

  // We need a function to an endpoint that
  // creates a user with the info from the
  // form. And if it works redirect to '/'

  render() {
    return (
      <div className="create-user-wrapper">
        <form>
          <div className="header">
            <img src="https://assets.brandfolder.com/oox90q-9q2cew-bw1vdr/view@2x.png" />
            <h3>Create Slack-Clone Account</h3>
          </div>

          <input type="text" name="first-name" placeholder="First Name" />
          <input type="text" name="last-name" placeholder="Last Name" />
          <input type="text" name="phone" placeholder="Phone Number" />
          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="profile-pic" placeholder="Profile Image" />
          <button className="login-btn">Continue</button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
