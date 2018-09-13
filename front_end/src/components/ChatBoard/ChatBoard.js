import React, { Component } from "react";
import Moment from "react-moment";

import "./Chatboard.css";
import "./ChatMessage/message.css";
import Nav from "../Nav/Nav";
import Channels from "./../Channels/Channels";
import axios from "axios";

import { MessageContext } from "../../Contexts/MessageProvider";
import { UserContext } from "../../Contexts/UserProvider";

class ChatBoard extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      users: [],
      text: "",
      channel: ["super-team"]
    };
    this.logout = this.logout.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // ===============  message functions  ============== //
  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  submitMessage = () => {
    let message = this.state.text;
    let message_date = new Date();
    let user_id = this.state.profile.id;
    let channel_id = null;

    axios.post(`/api/messages`, { message, message_date, user_id, channel_id }).then(res => {
      this.setState({
        text: ""
      });
    });
  };

  editMessage = (id, text) => {
    // edit message functionality
    console.log("editing messages");
  };

  removeMessage = id => {
    // remove message functionality
    console.log("deleting messages");
  };
  // ===============  channel functions  ============== //
  channelDisplay = () => {
    if (this.state.channel) {
      return `Message ${this.state.channel}`;
    } else {
      return "Message Channel";
    }
  };

  // ===============  user functions  ============== //
  logout() {
    this.props.auth.logout();
  }

  createUser(profile) {
    axios.post("/api/createUser", profile).then(res => {
      this.setState({
        profile: res.data[0]
      });
    });
  }
  // ===============  lifecycle functions  ============== //
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.createUser(profile);
      });
    } else {
      this.createUser(userProfile);
    }
  }

  render() {
    const { id, first_name, last_name, profile_img, email } = this.state.profile;
    return (
      <div className="mainChat">
        <Channels />
        <UserContext.Consumer>
          {context => {
            if (this.state.profile !== {}) {
              context.state.id = id;
              context.state.firstName = first_name;
              context.state.lastName = last_name;
              context.state.profileImg = profile_img;
              context.state.email = email;
            }
          }}
        </UserContext.Consumer>

        <div className="ChatBoard-container">
          <div className="ChatBoard-message-parent-container">
            <Nav auth={this.logout} profile={this.state.profile} />
            <div className="ChatBoard-message-child-container">
              <MessageContext.Consumer>
                {context =>
                  context.state.messages.map((message, i) => (
                    // in the map I just reference message.whatever instead of context.state.whatever
                    <div key={i} className="Message-container">
                      <div>
                        <img id="profile-img" src={message.profile_img} alt="profile_image" />
                      </div>
                      <div className="username">
                        {message.first_name} {message.last_name}
                        <span className="date-time">
                          <Moment format="hh:mm a">{message.message_date}</Moment>
                        </span>
                        <div className="Message-text">{message.message}</div>
                      </div>
                      <span className="Message-edit" onClick={() => this.editMessage()}>
                        {" "}
                        ...{" "}
                      </span>
                      <span className="Message-delete" onClick={() => this.removeMessage()}>
                        X
                      </span>
                    </div>
                  ))
                }
              </MessageContext.Consumer>
            </div>
          </div>
          <div className="ChatBoard-message-container">
            <form className="form-message-container" onSubmit={this.submitMessage}>
              <input placeholder={this.channelDisplay()} onChange={this.handleChange} value={this.state.text} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBoard;
