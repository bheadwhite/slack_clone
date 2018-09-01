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

    this.submitMessage = this.submitMessage.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  submitMessage(event) {
    console.log(this.state.text)
  }


  editMessage = (id, text) => {
    // edit message functionality
    console.log(id)
  }

  removeMessage = (id) => {
    // remove message functionality
    console.log(id)
  }


  render() {

    return (
      <div className="ChatBoard-container">
        <div className="ChatWindow-messagesParentContainer">
          <div className="ChatWindow-messagesChildContainer">
            {
              this.state.messages.map(message => (
                <Message id={message.id} key={message.id} text={message.text} time={message.time} edit={this.editMessage} remove={this.removeMessage} />
              ))
            }
          </div>
        </div>
        <div>
          <form onSubmit={this.submitMessage} id="ChatWindow-newMessageContainer">
            <input placeholder="Message Channel"
              onChange={this.handleChange}
            // value={this.state.text}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default ChatBoard