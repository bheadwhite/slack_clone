import React, { Component } from "react";
// =========== components ================ //
import Admin from "./../Admin/Admin";
import { UserContext } from "../../Contexts/UserProvider";

// =========== styles ================ //
import { Icon } from "semantic-ui-react";
const styles = {
  search: {
    color: "white",
    position: "absolute",
    top: "90px",
    left: "27px"
  }
};

class Channels extends Component {
  state = {
    adminShow: false
  };
  render() {
    const { adminShow } = this.state;
    return (
      <div className="channels-container">
        <div
          className="adminPanel"
          onClick={() => this.setState({ adminShow: !adminShow })}
        >
          <div className="center">
            <h4>DevMountain</h4>
            <UserContext.Consumer>
              {context => context.state.firstName}
            </UserContext.Consumer>
          </div>
          <div className={adminShow ? "adminShow" : "adminHide"}>
            <Admin />
          </div>
        </div>
        <div className="channelsSection">
          <div>
            <Icon name="search" style={styles.search} />
            <input type="text" placeholder="Jump to..." />
          </div>
          <div className="allUnreadsThreads"> all unreads all threads </div>
          <div className="starred">starred list</div>
          <div className="channels"> channels section </div>
          <div className="directMessages"> direct Messages </div>
        </div>

        <p>Channels component</p>
      </div>
    );
  }
}

export default Channels;
