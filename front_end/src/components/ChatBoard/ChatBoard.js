import React, { Component } from "react";
<<<<<<< HEAD
import "./Chatboard.css";
import Message from "./ChatMessage/Message";
import Nav from "../Nav/Nav";
=======
import './Chatboard.css';
import './ChatMessage/message.css';
import Nav from '../Nav/Nav'

import axios from 'axios'

import { MessageContext } from "../../Contexts/MessageProvider";
>>>>>>> 956133ef7acdfe9268d09f1eeaf8fdf778bb9478

class ChatBoard extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      messages: [],
      text: ""
=======
      text: '',
>>>>>>> 956133ef7acdfe9268d09f1eeaf8fdf778bb9478
    };

    this.submitMessage = this.submitMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

<<<<<<< HEAD
  submitMessage(event) {
    console.log(this.state.text);
=======
  submitMessage = () => {
    let message = this.state.text
    let message_date = new Date()
    let user_id = 2
    let channel_id = null
    axios.post(`/api/messages`, { message, message_date, user_id, channel_id }).then(res => {
      console.log(res.data)
    })
>>>>>>> 956133ef7acdfe9268d09f1eeaf8fdf778bb9478
  }



  editMessage = (id, text) => {
    // edit message functionality
    console.log(id);
  };

  removeMessage = id => {
    // remove message functionality
    console.log(id);
  };

  render() {
<<<<<<< HEAD
=======

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

>>>>>>> 956133ef7acdfe9268d09f1eeaf8fdf778bb9478
    return (
      <div>
        <Nav />

        <div className="ChatBoard-container">
          <div className="ChatBoard-message-parent-container">
            <div className="ChatBoard-message-child-container">
<<<<<<< HEAD
              {this.state.messages.map(message => (
                <Message id={message.id} key={message.id} text={message.text} time={message.time} edit={this.editMessage} remove={this.removeMessage} />
              ))}
=======
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
>>>>>>> 956133ef7acdfe9268d09f1eeaf8fdf778bb9478
            </div>
          </div>
          <div className="ChatBoard-message-container">
            <form className="form-message-container" onSubmit={this.submitMessage}>
              <input
                placeholder="Message Channel"
                onChange={this.handleChange}
                // value={this.state.text}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBoard;
