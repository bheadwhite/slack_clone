import React, { Component } from "react";
//this will create a new context
export const MessageContext = React.createContext();

class MessageProvider extends Component {
  state = {
    firstName: "Brendon",
    lastName: "Freston",
    email: "freston75@gmail.com",
    profileImg: "http://res.cloudinary.com/bfrest/image/upload/v1519392910/mainPic.png",
    stillImg: "",
    showStatus: false,
    messages: ['yo dude what are you doing?', 'wazzzzzuppppppp'],
    text: '',
  };

  render() {
    return (
      <MessageContext.Provider value={{ state: this.state }}>
        {
          /*this will allow the children of the component you wrap with UserContext*/
          this.props.children
        }
      </MessageContext.Provider>
    );
  }
}

export default MessageProvider;
