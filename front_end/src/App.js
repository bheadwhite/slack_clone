import React, { Component } from "react";
import routes from "./routes";
import "./App.css";
import UserProvider from "./Contexts/UserProvider.js";

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">{routes}</div>
      </UserProvider>
    );
  }
}

export default App;
