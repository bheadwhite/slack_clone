import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { HashRouter } from "react-router-dom";
import { makeMainRoutes } from './routes'

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
// ReactDOM.render(
//   <HashRouter>
//     <App />
//   </HashRouter>,
//   document.getElementById("root")
// );
