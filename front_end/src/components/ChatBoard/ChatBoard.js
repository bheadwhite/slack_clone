import React, { Component } from "react";
import './Chatboard.css';
import Message from './ChatMessage/Message'

class ChatBoard extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.createMessage = this.createMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
  }


  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  createMessage(event) {
    console.log(event.target.value)
  }

editMessage = (id, text) => {
  console.log('editMessage:', id, text);
  this.setState({ messages: text });
}

removeMessage = (id) => {
  // this.setState({ messages:  });
}

render() {

  return (
    <div id="ChatBoard__container">
      <div id="ChatWindow__messagesParentContainer">
        <div id="ChatWindow__messagesChildContainer">
          {
            this.state.messages.map(message => (
              <Message id={message.id} key={message.id} text={message.text} time={message.time} edit={this.editMessage} remove={this.removeMessage} />
            ))
          }
        </div>
      </div>
      <div id="ChatWindow__newMessageContainer">
        <input placeholder="Message Channel"
          onKeyPress={this.createMessage}
          onChange={this.handleChange}
          value={this.state.text}
        />
      </div>
    </div>
  )
}
}

export default ChatBoard