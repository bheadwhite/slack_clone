import React, { Component } from "react";
import "./App.css";
import "./components/ChatBoard/Chatboard.css";
import routes from "./routes.js";
import axios from "axios";
import UserProvider from "./Contexts/UserProvider";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <h1>Future Slack Clone</h1>
          {routes}
        </div>
      </UserProvider>
    );
  }
}

export default App;
