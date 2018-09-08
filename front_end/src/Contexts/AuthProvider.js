import React, { Component } from "react";
import Auth from '../Auth/Auth'
//this will create a new context
export const AuthContext = React.createContext();

class AuthProvider extends Component {
  state = {
      auth: {}
  };
  
  componentDidMount() {
    this.setState({auth: new Auth()})
  }

  render() {
    return (
      <AuthContext.Provider value={{ state: this.state }}>
        {
          /*this will allow the children of the component you wrap with UserContext*/
          this.props.children
        }
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
