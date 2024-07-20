import React from "react";

import Received from "./Received";

import Send from "./Send";

import { useSelector } from "react-redux";

import "./Main-Section.css";

function MessageBox({ messages }) {

  return (
    <React.Fragment>
      {/* IF ROLE WAS EMPTY THEN NO MESSAGE WILL BE DISPLAYED */}
  

      {messages.role === "Sender" ? (
        <Send messages={messages} />
      ) : messages.role === "Receiver" ? (
        <Received messages={messages}/>
      ) : null}
    </React.Fragment>
  );
}

export default MessageBox;
