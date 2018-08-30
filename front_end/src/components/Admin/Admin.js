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
        {/* this is what will display the status menu if the set status button is clicked */}
        {showStatus === true && <Status />}
        <div className="info-wrapper">
          <img className="profile-pic" src="https://randomuser.me/api/portraits/men/9.jpg" />
          <p className="name">
            {this.state.firstName} {this.state.lastName}
          </p>
        </div>

        <section className="options-list">
          <ul>
            <li className="status-update" onClick={() => this.showStatus()}>
              Set a status
            </li>
            <li>Profile & account</li>
            <li>Preferences</li>
            <li>Set yourself to away</li>
            <li>Help & feedback</li>
          </ul>
        </section>

        <div className="info-wrapper">
          <img className="profile-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_Kdu902VTuZhfZLUW5NkAW_wBZJlaLUb0v3p8_AHbFpF7PZk_A" />
          <p className="name">DevMountian</p>
        </div>
        <section className="options-list">
          <ul>
            <li>See paid plans</li>
            <li>Analytics</li>
            <li>Customize Slack</li>
            <li>Sign out of DevMountian</li>
          </ul>
        </section>
        <section className="options-list">
          <ul>
            <li>Sign in to another workspace ...</li>
          </ul>
        </section>

        <section className="open-slack">
          <img className="profile-pic" src="https://assets.brandfolder.com/osogig-6gybeo-1fxfn9/view.png" />
          <p>Open the Slack App</p>
        </section>
      </div>
    );
  }
}

export default Admin;
