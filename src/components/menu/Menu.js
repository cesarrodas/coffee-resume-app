import './Menu.css';

function Menu({ showMenu }) {
  return (
    <div className={`Menu ${ showMenu ? "" : "Menu-hidden" }`}>
      <div className="Menu-container">
        <ul>
          <li><a>Shop Coffee</a></li>
          <li><a>Gear & Merchandise</a></li>
          <li><a>Whole Sale</a></li>
          <li><a>Our Story</a></li>
          <li><a>Blog</a></li>
        </ul>
        <hr></hr>
        <ul>
          <li><a>Sign In</a></li>
          <li><a>Search</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
