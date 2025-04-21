import React, { useEffect, useState } from "react";

import { useSelector,useDispatch } from "react-redux";

import { v4 as uuidv4 } from 'uuid';

import {saveMessages} from "../action/messenger-actions";

import Modal from "./Modal";

import BackDrop from "./Backdrop";

import MessageBox from "./MessageBox";

import "./Main-Section.css";

function MainSection() {

  const [condition, setCondition] = useState(false);

  const [message, setMessage] = useState("");

  let [messages, setMessages] = useState([]);

  const dispatch = useDispatch();

  // FETCH ISSEND FROM STORE

  let { contact,messagesArray,isSend } = useSelector((state) => {
    return state.messenger;
  });

  // MESSAGE SEND BY SENDER

  function inputHandler(e) {
    setMessage(e.target.value);
  }

  // SELECT ROLE

  function selectRole() 
  {
    // SHOW POP UP AND SELECT ROLE THERE

    setCondition(true);
  };

    // REMOVE BACKDROP

    function handleChange() 
    {
      setCondition((pre) => {
        return !pre;
      });
    }

  // SEND MESSAGE

  function send() {

    // UPDATE MESSAGES ONLY IF USER HAVE GIVEN BOTH MESSAGE AND ROLE

    if (isSend && message) 
    {

      // REMEMBER USE SET FUNCTION THIS WILL UPDATE STATE AND RE RENDER

      // USE EFFECT AND MAP FUNCTION OTHER WISE STATE WILL NEVER BE UPDATED

      setMessages(
        
        { id: uuidv4(),message: message, role: isSend, chat: contact.name },
      );

    };

  }

  useEffect(()=>{

    dispatch(saveMessages(messages));
    
  },[messages,dispatch])

  return (
    <React.Fragment>
      {/* MESSENGER BOX */}

      <div id="messenger">
        {/* SEND MESSEGES ARRAY TO BOX */}

         <div>
         {messagesArray.map((messages, index) => {
          return <MessageBox messages={messages} key={index} />;
        })}
         </div>
        
      </div>

      {/* Send Message */}

      <div id="typing-box">
        <div className="send-container">
          {/* ICONS */}

          <div className="icons">
            <i className="fa-solid fa-circle-plus fa-xl"></i>
            <i className="fa-regular fa-image fa-xl"></i>
            <i className="fa-solid fa-note-sticky fa-xl"></i>
          </div>

          {/* MESSAGE BOX */}

          <input placeholder="Aa" onChange={inputHandler} value={message} style={{outline:"none",width:"15rem"}} />

          {/* SEND BUTTON */}

          {/* THIS WILL OPEN MODAL */}

          {condition && <BackDrop onClick={handleChange} />}

          {condition && <Modal show={handleChange} />}

          <div onClick={selectRole}>
            <i className="fa-solid fa-person fa-2xl"></i>
          </div>

          <div onClick={send}>
            <i className="fa-solid fa-paper-plane fa-xl"></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainSection;
