import React, { Component } from "react";
import axios from "axios";
//this will create a new context
export const MessageContext = React.createContext();

class MessageProvider extends Component {
  state = {
    // users: [{
    firstName: [],
    lastName: [],
    email: [],
    profileImg: [],
    stillImg: [],
    showStatus: "",
    // }],
    messages: [],
    datetime: []
  };

  componentDidMount = () => {
    axios.get("/api/messages").then(res => {
      const userMessages = res.data;
      console.log(userMessages);

      this.setState({ messages: [...res.data] });

      // Below is what you were doing before
      // userMessages.map((data, i) => {
      //   this.setState({
      //     firstName: data.first_name,
      //     lastName: data.last_name,
      //     email: data.email,
      //     profileImg: data.profile_img,
      //     stillImg: [],
      //     showStatus: "",
      //     messages: [data.message],
      //     datetime: [data.message_date]
      //   })
      //   console.log(this.state)
      // })
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
