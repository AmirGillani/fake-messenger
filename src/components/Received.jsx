import React, { useState } from "react";

import { useSelector,useDispatch } from "react-redux";

import {deleteMessage} from "../action/messenger-actions";

import "./Received.css";

function Received(props) {

  const [condition, setCondition] = useState(false);

  const dispatch= useDispatch();

  let { contact, messagesArray } = useSelector((state) => {
    return state.messenger;
  });

  function showBin() {
    setCondition(true);
  }

  function hideBin() {
    setCondition(false);
  }

  // FILTER CURRENT MESSAGE

  function delMessage() {

    let message = messagesArray.filter((m) => {
     
      return m.id !== props.messages.id;
    });
    
    dispatch(deleteMessage(message));  
  }

  return (
    <React.Fragment>
      <div id="received" onMouseEnter={showBin} onMouseLeave={hideBin}>
     
        <img src={contact.img} class="id" />

        <div class="received-message">
          <p>{props.messages.message}</p>
          {condition && (
            <i
              class="fa-solid fa-trash fa-xl"
              style={{ color: "red",marginLeft:"5px" }}
              onClick={delMessage}
            ></i>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Received;
