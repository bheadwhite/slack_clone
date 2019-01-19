import React, { Component } from "react";
// import { AuthContext } from "../../Contexts/AuthProvider";

export default class Login extends Component {
  render() {
    return (
      <div className="mainLogin">
        <div className="imageBanner">
          <div className="banner">
          <div>Welcome to </div><span>Slack Clone
            <div className="imagePlaceholder">
            <img
              src="http://www.cbronline.com/wp-content/uploads/2017/01/slack.png"
              alt="slack logo"
            />
            </div></span>
          </div><button onClick={() => this.props.auth.login()}>Login</button>
        </div>
        
      </div>
    );
  }
}
