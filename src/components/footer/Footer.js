import './Footer.css';
import coffeelogo from '../../coffeelogo.svg';

function Footer() {
  return (
    <div>
      <div className="Footer">
        <div>
          <img className="Navbar-logo" src={coffeelogo}></img>
        </div>
        <div>
          <h4>Helpful Links</h4>
          <ul>
            <li>Search</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h4>Information</h4>
          <ul>
            <li>The Coffee Shop® | Carbon Negative Coffee | "You Drink Coffee, We Plant Trees" | All Rights Reserved</li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
        </div>
      </div>
      <div className="Border"></div>
    </div>
  );
}

export default Footer;
