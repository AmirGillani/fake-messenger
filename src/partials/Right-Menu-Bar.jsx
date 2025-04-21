import React from 'react';

import "./Right-Menu-Bar.css";

function RightMenuBar({contact}) {
  return (
   <React.Fragment>
        
    <div>
      <ul id="sidebar2">
        <li>
          <img
            src={contact.img}
            className="profile"
            style={{width:"6rem", height:"6rem"}}
            alt='profile'
          />
        </li>
        <li><h3 style={{fontWeight:"bolder"}}>{contact.name}</h3></li>
        <li>
          <div className="items">
            <div>
              <i className="fa-solid fa-user fa-xl"></i>
              <p>Profile</p>
            </div>
            <div>
              <i className="fa-solid fa-volume-xmark fa-xl"></i>
              <p>Mute</p>
            </div>
            <div>
              <i className="fa-solid fa-magnifying-glass"></i>
              <p>Search</p>
            </div>
          </div>
        </li>
        <li>Custom Chat</li>
        <li>Media</li>
        <li>Privcy Policy</li>
      </ul>
    </div>
   </React.Fragment>
  )
}

export default RightMenuBar;