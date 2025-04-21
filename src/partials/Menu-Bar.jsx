
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

      {/* SEARCH */}
        <div>
          <i className="fa-brands fa-facebook fa-2xl"></i>
          <input placeholder="Search Facebook" style={{width:"20vw",outline:"none"}} />
        </div>

        {/* ICONS */}
        <div style={{width:"11vw", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <i className="fa-solid fa-house fa-xl"></i>
          <i className="fa-solid fa-user-group fa-xl"></i>
          <i className="fa-solid fa-people-group fa-xl"></i>
          <i className="fa-solid fa-store fa-xl"></i>
        </div>

        {/* LOGIN ICONS */}
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

    <div id="menu-bar2">
      <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>

      {/* SEARCH */}
        <div>
          <i className="fa-brands fa-facebook fa-2xl"></i>
          <input placeholder="Search Facebook" style={{width:"35vw",outline:"none"}} />
        </div>



        {/* LOGIN ICONS */}
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
          
          {condition2 && <img src={avatar} onMouseOver={show} onMouseOut={hide} className='profile'  alt='avatar' />}
          
        </div>
      </div>
    </div>

    </React.Fragment>
  )
}

export default MenuBar