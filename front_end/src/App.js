import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import './components/ChatBoard/Chatboard.css'
import routes from "./routes.js";
import Nav from './components/Nav/Nav'
import ChatBoard from './components/ChatBoard/ChatBoard'
import Channels from './components/Channels/Channels'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <ChatBoard />
        <Channels />

        {/* {routes} */}
      </div>
    );
  }
}

export default App;
