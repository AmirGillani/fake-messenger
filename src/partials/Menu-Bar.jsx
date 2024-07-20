
import React,{useState,useRef} from 'react';

import "./Menu-Bar.css";

function MenuBar() {

  const [condition, setCondition] = useState(false);

  const [condition2, setCondition2] = useState(true);

  const inputFile = useRef(null);

  const [avatar, setAvatar] = useState("https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png");

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
        setAvatar(reader.result);
    
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  }



  return (
    <React.Fragment>
        
    <div id="menu-bar">
      <div className="menu-container">
        <div>
          <i className="fa-brands fa-facebook fa-2xl"></i>
          <input placeholder="Search Facebook" />
        </div>
        <div>
          <i className="fa-solid fa-house fa-xl"></i>
          <i className="fa-solid fa-user-group fa-xl"></i>
          <i className="fa-solid fa-people-group fa-xl"></i>
          <i className="fa-solid fa-store fa-xl"></i>
        </div>
        <div className="menu-bar-login">
          <div className="circle">
            <i className="fa-solid fa-bell fa-xl" style={{margin: "7px"}}></i>
          </div>
          <div className="circle">
            <i
              className="fa-brands fa-facebook-messenger fa-xl"
              style={{margin: "7px"}}
            ></i>
          </div>

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
          
          {condition2 && <img src={avatar} onMouseOver={show} onMouseOut={hide} className='profile'  />}
          
        </div>
      </div>
    </div>

    </React.Fragment>
  )
}

export default MenuBar