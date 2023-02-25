import './Footer.css';
import coffeelogo from '../../coffeelogo.svg';

function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="Footer-box">
          <img className="Footer-logo" src={coffeelogo}></img>
        </div>
        <div className="Footer-box">
          <h4>Helpful Links</h4>
          <ul className="Footer-unordered">
            <li>Search</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="Footer-box">
          <h4>Information</h4>
          <ul className="Footer-unordered">
            <li>The Coffee Shop® | Carbon Negative Coffee | "You Drink Coffee, We Plant Trees" | All Rights Reserved</li>
          </ul>
        </div>
        <div className="Footer-box">
          <h4>Newsletter</h4>
          <input className="Footer-Email" placeholder="Email Address"></input>
          <button className="Footer-signup">></button>
        </div>
      </div>
      <div className="Border">
        <p className="Border-text">© 2023, The Coffee Shop. </p>
      </div>
    </div>
  );
}

export default Footer;
