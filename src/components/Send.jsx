import React,{useState} from 'react';

import { useSelector,useDispatch } from "react-redux";

import {deleteMessage} from "../action/messenger-actions";

import "./Send.css";

function Send(props) {

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
        <div id="sent">
          <div onMouseEnter={showBin} onMouseLeave={hideBin}>
            <p class="send-message">{props.messages.message}</p>
            {condition && (
            <i
              class="fa-solid fa-trash fa-xl"
              style={{ color: "red" }}
              onClick={delMessage}
            ></i>
          )}
          </div>
        </div>
    </React.Fragment>
  )
}

export default Send