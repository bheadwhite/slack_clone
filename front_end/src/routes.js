import React from "react";
import { Route } from "react-router-dom";
import ChatBoard from "./components/ChatBoard/ChatBoard.js";
import CreateUser from "./components/CreateUser/CreateUser.js";

export default (
  <div>
    <Route exact path="/" component={ChatBoard} />
    <Route path="/create-account" component={CreateUser} />
  </div>
);
