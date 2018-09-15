import React from 'react'

function Nav(props) {

  return (
    <div className='nav'>
        <span className='nav-item-channel'>Channel Name &nbsp;</span>
        <div>
          
          </div>
        <button onClick={()=> props.auth()}>Logout</button>
      </div>
    );
}

export default Nav;
