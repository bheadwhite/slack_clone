import React, { Component } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

export default class Login extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        <div>
            {
                context=> (console.log(context.state.auth))
            }
          <button onClick={() => this.props.auth.login()}>
            Login to Slack
          </button>
        </div>
      </AuthContext.Consumer>
    );
  }
}
