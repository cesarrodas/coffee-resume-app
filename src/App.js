//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';


function App() {

  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className={`App ${showMenu ? "App-open-menu" : ""}`}>
      <Menu showMenu={showMenu} />
      <div className="Content">
        <Navbar toggleMenu={toggleMenu}></Navbar>
        show : {showMenu? "true" : "false"}
        <Header />
      </div>
    </div>
  );
}

export default App;
