import React, { Component } from "react";
import "./App.css";
import "./components/ChatBoard/Chatboard.css";
import routes from "./routes.js";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios
      .post("http://localhost:4000/graphql", {
        query: `{
      users {
        id
        email
      }
    }`
      })
      .then(resp => console.log(resp.data.data));
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
