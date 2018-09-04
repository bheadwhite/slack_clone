import React, { Component } from 'react';
import './message.css';


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
      text: this.props.text
    };

    this.handleChange = this.handleChange.bind( this );
    this.edit = this.edit.bind( this );
  }

  handleChange( event ) {
    this.setState({ text: event.target.value });
  }

  edit( event ) {
    const { text } = this.state;
    const { id, edit } = this.props;
    if( event.key === "Enter" && text.length !== 0 ) {
      edit( id, text );
      this.setState({ editting: false });
    }
  }

  render() {
    const { id, text, time, edit, remove } = this.props;
    const { editting } = this.state;
    console.log( id, text );
    return (
      <div className="Message-container">
        <span className="Message-time">{time}</span>
        {
          editting
          ?
            <input className="Message-input" value={ this.state.text } onChange={ this.handleChange } onKeyPress={ this.edit } />
          :
            <span className="Message-text">{text}</span>
        }
        <span className="Message-edit" onClick={ () => this.setState({ editting: !this.state.editting, text }) }> Edit </span>
        <span className="Message-delete" onClick={ () => remove( id ) }> X </span>
      </div>
    )
  }
}

export default Message


