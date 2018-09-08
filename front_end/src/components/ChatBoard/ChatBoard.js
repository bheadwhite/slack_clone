import React, { Component } from "react";
import './Chatboard.css';
import './ChatMessage/message.css';
import Nav from '../Nav/Nav'

import { MessageContext } from "../../Contexts/MessageProvider";

class ChatBoard extends Component {
  constructor() {
    super();
    this.state = {
      profile: {},
      text: '',
    };
    this.logout = this.logout.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  submitMessage = (event) => {
    this.state.messages.push(this.state.text)
    this.setState({
      text: ''
    })
    console.log(this.state.messages)
  }

  editMessage = (id, text) => {
    // edit message functionality
    console.log(id)
  }

  removeMessage = (id) => {
    // remove message functionality
    console.log(id)
  }

  channelDisplay = () => {
    if (this.state.channel) {
      return `Message ${this.state.channel}`
    } else {
      return 'Message Channel'
    }
  }
  logout(){
    this.props.auth.logout()
  }
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  render() {
    console.log(this.state.profile)
    const { isAuthenticated } = this.props


    // const messageList = this.state.messages.map((message, i) => (
    //   <div key={i} className='Message-container'>
    //     <div>
    //       <img id='profile-img' src='https://www.f6s.com/images/profile-placeholder-user.jpg' />
    //     </div>
    //     <div className='username'>
    //       {this.state.firstName} {this.state.lastName}
    //       <div className='Message-text'>
    //         {message}
    //       </div>
    //     </div>


    //     <span className="Message-edit"> ... </span>
    //     <span className="Message-delete" onClick={() => this.removeMessage()}> X </span>
    //   </div>
    // ))

    return (

      <div>
        <Nav auth={this.logout} profile={this.state.profile} />

        <div className="ChatBoard-container">
          <div className="ChatBoard-message-parent-container">
            <div className="ChatBoard-message-child-container">
              <MessageContext.Consumer>
                {context => (
                  context.state.messages.map((message, i) => (
                    <div key={i} className='Message-container'>
                      <div>
                        <img id='profile-img' src={context.state.profileImg} />
                      </div>
                      <div className='username'>
                        {context.state.firstName} {context.state.lastName}
                        <div className='Message-text'>
                          {message}
                        </div>
                      </div>


                      <span className="Message-edit"> ... </span>
                      <span className="Message-delete" onClick={() => this.removeMessage()}> X </span>
                    </div>
                  ))
                )}
              </MessageContext.Consumer>
            </div>
          </div>
          <div className="ChatBoard-message-container">
            <form className='form-message-container' onSubmit={this.submitMessage} >
              <input placeholder={this.channelDisplay()}
                onChange={this.handleChange}
                value={this.state.text}
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatBoard