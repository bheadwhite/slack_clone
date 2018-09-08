import React, { Component } from "react";
import './Chatboard.css';
import './ChatMessage/message.css';
import Nav from '../Nav/Nav'

import axios from 'axios'

import { MessageContext } from "../../Contexts/MessageProvider";

class ChatBoard extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };

    this.submitMessage = this.submitMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  submitMessage = () => {
    let message = this.state.text
    let message_date = new Date()
    let user_id = 2
    let channel_id = null
    axios.post(`/api/messages`, { message, message_date, user_id, channel_id }).then(res => {
      console.log(res.data)
    })
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

  render() {

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
        <Nav />

        <div className="ChatBoard-container">
          <div className="ChatBoard-message-parent-container">
            <div className="ChatBoard-message-child-container">
              <MessageContext.Consumer>
                {context => (
                  context.state.messages.map((message, i) => (
                    <div key={i} className='Message-container'>
                      <div>
                        <img id='profile-img' src={context.state.profileImg} alt='profile_image' />
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