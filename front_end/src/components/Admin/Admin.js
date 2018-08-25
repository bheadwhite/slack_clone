import React, { Component } from "react";
import "./Admin.css";

import Status from "../Status/Status.js";

class Admin extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "Brendon",
      lastName: "Freston",
      email: "freston75@gmail.com",
      profileImg: "http://res.cloudinary.com/bfrest/image/upload/v1519392910/mainPic.png",
      showStatus: false
    };
  }

  showStatus() {
    const { showStatus } = this.state;

    if (showStatus === false) {
      this.setState({ showStatus: true });
    } else {
      this.setState({ showStatus: false });
    }
  }

  render() {
    const { showStatus } = this.state;
    return (
      <div className="admin-wrapper">
        <div className="info-wrapper">
          <img className="profile-pic" src="https://randomuser.me/api/portraits/men/9.jpg" />
          <p className="name">
            {this.state.firstName} {this.state.lastName}
          </p>
        </div>

        <section className="options-list">
          <ul>
            <li className="status-update" onClick={() => this.showStatus()}>
              Set Status
            </li>
            <li>Sign Out</li>
          </ul>
        </section>
        {showStatus === true && <Status />}
      </div>
    );
  }
}

export default Admin;
