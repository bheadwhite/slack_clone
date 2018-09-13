import React from "react";
import "./Nav.css";

function Nav(props) {
  const { firstName, profile_img } = props.profile;
  const styles = {
    height: "20px",
    width: "20px"
  };
  return (
    <div className='nav'>
        <span className='nav-item-channel'>Channel Name &nbsp;</span>
        <div>
          
          Hello, {firstName}!
          </div>
        <button onClick={()=> props.auth()}>Logout</button>
      </div>
    );
}

export default Nav;
