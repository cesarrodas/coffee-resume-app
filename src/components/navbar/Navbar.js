import './Navbar.css';
import coffeelogo from '../../coffeelogo.svg';

function Navbar({ toggleMenu }) {

  return (
    <div className="Navbar">
      <div>
        {/* <ul class="Navbar-sandwich">
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
        <button onClick={toggleMenu}>Menu</button>
      </div>
      <a><img className="Navbar-logo" src={coffeelogo}></img></a>
      <div></div>
    </div>
  );
}

export default Navbar;
