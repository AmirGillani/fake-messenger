import React, { useState } from "react";

import Contact from "./Contacts";

import "./Left-Menu-Bar.css";
import { useSelector } from "react-redux";

function LeftMenuBar() {
  
  const {contacts} = useSelector((state)=>state.messenger);

  return (
    <React.Fragment>
      <div>
        <ul id="sidebar">
          <h3>Contacts</h3>
          {contacts &&
            contacts.map((contact,index) => {
              return (
                
                  <Contact contact={contact} key={index} />
               
              );
            })}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default LeftMenuBar;
