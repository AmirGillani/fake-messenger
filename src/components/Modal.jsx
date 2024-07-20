import React from "react";

import ReactDOM from "react-dom";

import { sendMessage } from "../action/messenger-actions";

import { useDispatch } from "react-redux";

import { CSSTransition } from 'react-transition-group';

import "./Modal.css";

function Modal(props) 
{

  const dispatch = useDispatch();

  // FETCH ISSEND FROM STORE

  function pressed(e) {

    // SEND ROLE VALUE TO HOOK

    dispatch(sendMessage(e.target.value));

    props.show();
  }



  return ReactDOM.createPortal(
    <React.Fragment>
    <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <div className="modal-parent">
        <div class="modal">
      
      <button
        onClick={pressed}
        value={"Sender"}
      >
        Sender
      </button>
      <button
         onClick={pressed}
        value={"Receiver"}
      >
        Receiver
      </button>
    </div>
        </div>

      </CSSTransition>
      
    </React.Fragment>,
    document.getElementById("modal")
  );
}

export default Modal;
