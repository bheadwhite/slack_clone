import React, { Component } from "react";
//this will create a new context
export const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    firstName: "Brendon",
    lastName: "Freston",
    email: "freston75@gmail.com",
    profileImg: "http://res.cloudinary.com/bfrest/image/upload/v1519392910/mainPic.png",
    showStatus: false
  };

  render() {
    return (
      <UserContext.Provider value={{ state: this.state }}>
        {
          /* 
        this will allow the children of the component you 
        you wrap with UserContext
      */
          this.props.children
        }
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
