import React, { Component } from "react";
// import axios from "axios";
//this will create a new context
export const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    profileImg: ""
  };

  getLoggedInUserById() {
    // we will need a function that gets the logged in user and sets all the info to state
  }

  render() {
    return (
      <UserContext.Provider value={{ state: this.state }}>
        {
          /*this will allow the children of the component you wrap with UserContext*/
          this.props.children
        }
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
