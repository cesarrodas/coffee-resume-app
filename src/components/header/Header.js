import './Header.css';
import coffeeColombia from '../../images/colombian-coffee-field-2.jpeg';

function Header() {
  return (
    <div>
      <header className="Header">
        <img className="Header-image" src={coffeeColombia} alt="coffee" />
      </header>
    </div>
  );
}

export default Header;
