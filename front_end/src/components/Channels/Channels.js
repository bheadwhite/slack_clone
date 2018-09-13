import React, { Component } from "react";
// =========== components ================ //
import Admin from "./../Admin/Admin";

import "./Channels.css";
class Channels extends Component {
  state = { showAdmin: false };

  toggleAdminPanel() {
    const adminPanel = document.querySelector(".adminPanel");

    if (adminPanel.classList.contains("showAdminPanel")) {
      adminPanel.classList.remove("showAdminPanel");
      this.setState({ showAdmin: false });
    } else {
      adminPanel.classList.add("showAdminPanel");
      this.setState({ showAdmin: true });
    }
  }

  render() {
    return (
      <div className="channels-container">
        <button onClick={() => this.toggleAdminPanel()}>Admin</button>
        <div className="adminPanel">
          <Admin />
        </div>
        <div className="allUnreadsThreads"> all unreads all threads </div>
        <div className="starred">starred list</div>
        <div className="channelsSection"> channels section </div>
        <div className="directMessages"> direct Messages </div>

        <p>Channels component</p>
      </div>
    );
  }
}

export default Channels;
