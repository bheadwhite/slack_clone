import React, { Component } from "react";
import './Nav.css'

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className='nav'>
        <span className='nav-item-channel'>Channel Name</span>
        <button onClick={()=> console.log('hit logout')}>Logout</button>
      </div>
    );
  }
}

export default Nav;
