import React, { Fragment } from "react";
import MenuBar from "./partials/Menu-Bar";
import LeftMenuBar from "./partials/Left-Menu-Bar";
import RightMenuBar from "./partials/Right-Menu-Bar";
import MainSection from "./components/Main-Section";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  
  const { contact } = useSelector((state) => {
    return state.messenger;
  });

  return (
    <React.Fragment>
      <MenuBar />
      <LeftMenuBar />
      <MainSection />

      <RightMenuBar contact={contact} />
    </React.Fragment>
  );
}

export default App;
