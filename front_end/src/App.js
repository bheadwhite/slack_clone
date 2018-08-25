import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes.js";
import Admin from "./components/Admin/Admin.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Future Slack Clone</h1>
        {routes}
        <Admin />
      </div>
    );
  }
}

export default App;
