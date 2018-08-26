import React, { Component } from "react";
import './Nav.css'

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className='nav'>
        <span className='nav-item-channel'>Channel Name</span>
        <span className='nav-item'>Logout</span> 
      </div>
    );
  }
}

export default Nav;
