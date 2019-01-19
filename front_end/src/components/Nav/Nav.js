import React from "react";

function Nav(props) {
  return (
    <div className="nav">
      <span className="nav-item-channel">{props.channel}</span>
      <div />
    </div>
  );
}

export default Nav;
