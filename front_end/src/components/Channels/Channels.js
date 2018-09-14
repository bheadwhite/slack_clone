import React, { Component } from "react";
// =========== components ================ //
import Admin from "./../Admin/Admin";

import "./Channels.css";
class Channels extends Component {
  state = {};

  render() {
    return (
      <div className="channels-container">
        <button>Admin</button>
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
