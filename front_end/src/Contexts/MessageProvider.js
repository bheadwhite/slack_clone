import React, { Component } from "react";
import axios from "axios";
//this will create a new context
export const MessageContext = React.createContext();

class MessageProvider extends Component {
  state = {
    firstName: [],
    lastName: [],
    email: [],
    profileImg: [],
    stillImg: [],
    showStatus: "",
    messages: [],
  };

  componentDidMount = () => {
    axios.get('/api/messages').then(res => {
      const userMessages = res.data

      this.setState({
        firstName: [userMessages.first_name],
        lastName: [userMessages.last_name],
        email: [userMessages.email],
        profileImg: [userMessages.profile_img],
        stillImg: [],
        showStatus: "",
        messages: [userMessages.message],
      })
    })
  }

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
