import React, { Component } from "react";
import './Chatboard.css';
import Message from './ChatMessage/Message'
import Nav from '../Nav/Nav'

class ChatBoard extends Component {
  constructor() {
    super();
    this.state = {
      channel: 'super-team',
      messages: ['yo dude what are you doing?', 'wazzzzzuppppppp'],
      text: '',
      first_name: 'Jon',
      last_name: 'Miller'
    };

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

  render() {

    const messageList = this.state.messages.map((message, i) => (
      <div key={i} className='Message-container'>
        <div>
          <img id='profile-img' src='https://www.f6s.com/images/profile-placeholder-user.jpg' />
        </div>
        <div className='username'>
          {this.state.first_name} {this.state.last_name}
          <div className='Message-text'>
            {message}
          </div>
        </div>


        <span className="Message-edit"> ... </span>
        <span className="Message-delete" onClick={() => this.removeMessage()}> X </span>
      </div>
    ))

    return (
      <div>
        <Nav />

        <div className="ChatBoard-container">
          <div className="ChatBoard-message-parent-container">
            <div className="ChatBoard-message-child-container">
              {messageList}
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