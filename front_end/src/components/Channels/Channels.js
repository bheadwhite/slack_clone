import React, { Component } from "react";
// =========== components ================ //
import Admin from "./../Admin/Admin";
import { UserContext } from "../../Contexts/UserProvider";

// =========== styles ================ //
import { Icon } from "semantic-ui-react";
const styles = {
  search: {
    color: "#c8cbce",
    position: "absolute",
    top: "93px",
    left: "27px",
    zIndex: "1"
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
        <div className="adminPanel cursor">
          <div className="center cursor">
            <h4 className="cursor">
              DevMountain
              <Icon name="dropdown" size="small" className="selectBack" />
            </h4>
            <Icon name="circle" size="small" color="green" />
            <span className="selectBack" onClick={() => this.setState({ adminShow: !adminShow })}>
              <UserContext.Consumer>{context => context.state.firstName}</UserContext.Consumer>
            </span>
          </div>
          <div className={adminShow ? "adminShow" : "adminHide"}>
            <Admin />
          </div>
        </div>
        <div className="channelsSection">
          <div>
            <Icon name="search" style={styles.search} />
            <input type="text" placeholder="Jump to..." className="scale cursor" />
          </div>
          <div className="allUnreadsThreads">
            <div className="seg cursor selectBack">
              <div className="scale">
                <Icon name="sidebar" />
                All Unreads
              </div>
            </div>
            <div className="seg cursor selectBack">
              <div className="scale">
                <Icon name="chat" flipped="horizontally" />
                All Threads
              </div>
            </div>
          </div>
          <div className="starred">
            <div className="scale">Starred</div>
          </div>
          <div className="channels">
            <div className="scale cursor">Channels</div>
          </div>
          <div className="directMessages cursor">
            <div className="scale">Direct Messages </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Channels;
