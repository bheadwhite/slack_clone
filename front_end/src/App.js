import React, { Component } from "react";
import routes from "./routes";
import "./App.css";
import UserProvider from "./Contexts/UserProvider.js";
import MessageProvider from "./Contexts/MessageProvider";

class App extends Component {
  render() {
    return (
      <MessageProvider>
        <UserProvider>
          <div className="App">{routes}</div>
        </UserProvider>
      </MessageProvider>
    );
  }
}

export default App;
