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
    datetime: []
  };

  componentDidMount = () => {
    axios.get("/api/messages").then(res => {
      const userMessages = res.data;
      console.log(userMessages);
      this.setState({
        messages: [...res.data]
      });
    });
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
