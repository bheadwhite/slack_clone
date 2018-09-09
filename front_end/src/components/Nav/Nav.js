import React, { Component } from "react";
import './Nav.css'

function Nav(props) {
  const { given_name, picture } = props.profile
  const styles = {
    height: "20px",
    width: "20px"
  }
  return (
    <div className='nav'>
        <span className='nav-item-channel'>Channel Name &nbsp;</span>
        <div>
          
          Hello, {given_name}!
          </div>
        <button onClick={()=> props.auth()}>Logout</button>
      </div>
    );
}

export default Nav;
