import React, { Component } from "react";
import "./Nav.css";

function Nav(props) {
  const { first_name, profile_img } = props.profile;
  const styles = {
    height: "20px",
    width: "20px"
  };
  return (
    <div className="nav">
      <span className="nav-item-channel">Channel Name</span>
      <div>Hello, {first_name}!</div>
      <button onClick={() => props.auth()}>Logout</button>
    </div>
  );
}

export default Nav;
