import './Header.css';
import coffeeColombia from '../../images/colombian-coffee-field-2.jpeg';

function Header() {
  return (
    <div>
      <header className="Header">
        <img className="Header-image" src={coffeeColombia} alt="coffee" />
        <div className="Header-info">
          <h1 className="Header-title">Colombia | Huila Pitalito | ASOBOMBO Co-Op</h1>
          <p className="Header-description">New medium roast with notes of juicy lime, banana and wine balanced with subtle sweetness</p>
          <button className="Header-button">Shop Now</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
