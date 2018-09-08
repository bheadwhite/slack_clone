import React, { Component } from "react";
import axios from "axios";
//this will create a new context
export const MessageContext = React.createContext();

class MessageProvider extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "@gmail.com",
    profileImg: "",
    stillImg: "",
    showStatus: "",
    messages: [],
    text: "",
  };

  componentDidMount() {
    axios.get('/api/messages').then(res => {
      this.setState({
        firstName: res.data[1].first_name,
        lastName: res.data[1].last_name,
        email: res.data[1].email,
        profileImg: res.data[1].profile_img,
        stillImg: "",
        showStatus: false,
        messages: [res.data[1].message],
        text: '',
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
