import React, { Component } from "react";
import './Chatboard.css'

class ChatBoard extends Component {
  constructor() {
    super()

    this.state = {
      message: ''
    }

    this.onMessageChange = this.onMessageChange.bind(this)
  }

  onMessageSubmit(event) {
    console.log(this.state.message)
  }

  onMessageChange = (event) => {
    console.log(event.target.value)
    let newMessage = event.target.value
    this.setState({ message: newMessage })
  }

  render() {
    return (
      <div className='chatboard-container'>
        <div className='chatboard-module'>
          <p>ChatBoard</p>
        </div>
        <div className='message-box'>
          <form onSubmit={this.onMessageSubmit}>
            <input className='message-input' placeholder='Message channel_name' onChange={this.onMessageChange} />
            <button className='message-submit'>Send Message</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ChatBoard;
