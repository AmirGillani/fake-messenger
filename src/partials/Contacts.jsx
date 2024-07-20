import React, {useState, useRef } from "react";

import { useDispatch } from "react-redux";

import { changeContact } from "../action/messenger-actions";

import "./Left-Menu-Bar.css";

function Contacts({ contact }) 
{
  const [condition, setCondition] = useState(false);

  const [condition2, setCondition2] = useState(true);

  const dispatch = useDispatch();

  const inputFile = useRef(null);

  function handleChange() 
  {
    dispatch(changeContact(contact));
  }

  function show() 
  {
    setCondition2(false);
    setCondition(true);
  }

  function hide() 
  {
    setCondition(false);
    setCondition2(true);
  }

  // CLICK INPUT BUTTON INDIRECTLY

  function clickInputButtonIndirectly() 
  {
    inputFile.current.click();
  }

  // CHANGE IMAGE

  function changeImg(e) 
  {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        contact.img = reader.result;
        dispatch(changeContact(contact));
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  }

  // CHANGE NAME

  function changeName(e) 
  {
    contact.name = e.target.value;
    dispatch(changeContact(contact));
  }

  return (
    <React.Fragment>
      {/* SAVE CONTACT TO DISPATCH BY CLICKING ON IT */}

      <li onClick={handleChange}>
        <div className="sidebar-items">

          {/* THIS WILL BE SHOWN ON MOVE OVER */}

          {/* WE WILL CHANGE NAME THEN DISPATCH ON STORE */}

          {/* THIS WILL DISPATCH IT IN FRONT END TOO */}

          {condition && (
            <div
              id="i"
              onMouseOver={show}
              onMouseOut={hide}

              // INDIRECTLY CLICK INPUT 
              onClick={clickInputButtonIndirectly}
            >
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={changeImg}
                ref={inputFile}
                style={{ display: "none" }}
              />
              <i class="fa-solid fa-camera fa-lg"></i>
            </div>
          )}

          {condition2 && (
            <img src={contact.img} onMouseOver={show} onMouseOut={hide} className="contact-img" />
          )}

          <div>

          {/* THIS WILL BE SHOWN ON MOVE OVER */}

          {/* WE WILL CHANGE NAME THEN DISPATCH ON STORE */}

          {/* THIS WILL DISPATCH IT IN FRONT END TOO */}

            {condition && (
              <input
                type="text"
                id="contact-name"
                onChange={changeName}
                onMouseOver={show}
                onMouseOut={hide}
              />
            )}

            {condition2 && (
              <h4 onMouseOver={show} onMouseOut={hide} className="contact-name">
                {contact.name}
              </h4>
            )}

            <p className="contact-msg">{contact.msg}</p>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}

export default Contacts;
