import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes.js";
import Admin from "./components/Admin/Admin.js";
import Status from "./components/Status/Status";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showAdmin: false
    };
  }

  showAdmin() {
    const { showAdmin } = this.state;

    if (showAdmin === true) {
      this.setState({ showAdmin: false });
    } else {
      this.setState({ showAdmin: true });
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Future Slack Clone</h1>
        {routes}
      </div>
    );
  }
}

export default App;
