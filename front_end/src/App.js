import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import CreateUser from "./components/CreateUser/CreateUser.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Future Slack Clone</h1>
        <CreateUser />
      </div>
    );
  }
}

export default App;
