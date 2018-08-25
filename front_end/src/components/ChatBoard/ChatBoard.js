import React, { Component } from "react";
import './Chatboard.css'

class ChatBoard extends Component {
  state = {};
  render() {
    return (
      <div className='chatboard-container'>
        <div className='chatboard-module'>
          <p>ChatBoard</p>
        </div>

      <div className='message-box'>
        <input className='message-input' placeholder='Message channel_name'/>
      </div>
      </div>
    );
  }
}

export default ChatBoard;
