//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
import ColdPress from './components/coldpress/Coldpress';


function App() {

  const [showMenu, setShowMenu] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className={`App ${showMenu ? "App-open-menu" : ""}`}>
      <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
      <div className="Content" onScroll={handleScroll}>
        <Navbar toggleMenu={toggleMenu} scrollTop={scrollTop}></Navbar>
        <Header />
        <Featured />
        <ColdPress />
        <Footer />
      </div>
    </div>
  );
}

export default App;
