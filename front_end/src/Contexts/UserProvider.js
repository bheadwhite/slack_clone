import React, { Component } from "react";
// import axios from "axios";
//this will create a new context
export const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    id: "",
    first_name: "",
    last_name: "",
    profileImg: "",
    email: ""
  };

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
