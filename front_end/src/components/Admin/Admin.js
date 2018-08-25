import React, { Component } from "react";
import "./Admin.css";

class Admin extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "Brendon",
      lastName: "Freston",
      email: "freston75@gmail.com",
      profileImg: "http://res.cloudinary.com/bfrest/image/upload/v1519392910/mainPic.png"
    };
  }

  render() {
    return (
      <div className="admin-wrapper">
        <div className="info-wrapper">
          <img className="profile-pic" src="http://res.cloudinary.com/bfrest/image/upload/v1519392910/mainPic.png" />
          <p className="nickName">
            {this.state.firstName} {this.state.lastName}
          </p>
        </div>

        <ul className="options-list">
          <li>set Status</li>
          <li>Sign Out</li>
        </ul>
      </div>
    );
  }
}

export default Admin;
