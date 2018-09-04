import React, { Component } from "react";
import "./Status.css";

class Status extends Component {
  constructor() {
    super();
    this.state = {
      status: ""
    };
  }

  showButtons() {
    const closeIcon = document.querySelector(".close-icon");
    const actionBtns = document.querySelector(".handle-status-btns");

    closeIcon.classList.add("show-btns");
    actionBtns.classList.add("show-btns");
  }

  hideButtons() {
    const closeIcon = document.querySelector(".close-icon");
    const actionBtns = document.querySelector(".handle-status-btns");
    const input = document.querySelector(".status-input");

    closeIcon.classList.remove("show-btns");
    actionBtns.classList.remove("show-btns");
    if (this.state.status !== "") {
      this.setState({ status: "" });
      input.value = "";
    }
  }

  handleStatusInput(event) {
    this.setState({ status: event.target.value });
    // this is for the cancel and save buttons
    if (event.target.value === "") {
      this.hideButtons();
    } else {
      this.showButtons();
    }
  }

  render() {
    return (
      <div className="status-box-wrapper">
        <section className="status-pick">
          <div className="select-status">
            <button className="emoji-button">{`\u{1F603}`}</button>
            <input className="status-input" placeholder="What's your status?" onChange={e => this.handleStatusInput(e)} />
          </div>
          <img className="close-icon" alt="profile" src="http://res.cloudinary.com/bfrest/image/upload/v1535219516/cancel.png" onClick={() => this.hideButtons()} />

          <section className="handle-status-btns">
            <button className="cancel-btn" onClick={() => this.hideButtons()}>
              Cancel
            </button>
            <button className="save-btn">Save</button>
          </section>
        </section>
      </div>
    );
  }
}

export default Status;
