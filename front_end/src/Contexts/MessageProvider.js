import React, { Component } from "react";
import axios from "axios";
import openSocket from 'socket.io-client'
//this will create a new context
export const MessageContext = React.createContext();
const socket = openSocket('http://localhost:4000')

class MessageProvider extends Component {
  constructor() {
    super()

    this.state = {
      firstName: [],
      lastName: [],
      email: [],
      profileImg: [],
      stillImg: [],
      showStatus: "",
      messages: [],
      datetime: []
    };

    socket.on('received message', message => {
      console.log(message)
      console.log(this.state.messages)
    })
  }

  componentDidMount = () => {
    axios.get("/api/messages").then(res => {
      this.setState({
        messages: [...res.data]
      });
    });
  };


  render() {
    return (
      <MessageContext.Provider value={{ state: this.state, }}>
        {
          /*this will allow the children of the component you wrap with UserContext*/
          this.props.children
        }
      </MessageContext.Provider>
    );
  }
}

export default MessageProvider;
