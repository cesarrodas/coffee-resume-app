import './Navbar.css';
import coffeelogo from '../../coffeelogo.svg';

function Navbar({ toggleMenu, scrollTop }) {

  return (
    <div className="Navbar">
      <div class="Navbar-item">
        {/* <ul class="Navbar-sandwich">
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
        <button onClick={toggleMenu}>Menu</button>
      </div>
      <div class="Navbar-item">
        <a><img className={`Navbar-logo ${ scrollTop > 30 ? "Navbar-small-logo" : ""}`} src={coffeelogo}></img></a>
      </div>
      <div class="Navbar-item"></div>
    </div>
  );
}

export default Navbar;
