import React, { Component } from "react";
// =========== components ================ //
import Admin from "./../Admin/Admin";
import { UserContext } from "../../Contexts/UserProvider";
class Channels extends Component {
  state = {
    adminPanelShow: false
  };
  render() {
    const { adminPanelShow } = this.state
    return (
      <div className="channels-container">
        <div className='adminPanel'
        onClick={()=>this.setState({adminPanelShow: !this.state.adminPanelShow})}
        >
        <h4>DevMountain</h4>
        <UserContext.Consumer>
          {context => context.state.firstName}
          </UserContext.Consumer>
          <div className={adminPanelShow ? 'adminShow' : 'adminHide'}>
          <Admin />
          </div>
        </div>
        <div className="channelsSection">
        <div><input type='text'/>search</div>
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
