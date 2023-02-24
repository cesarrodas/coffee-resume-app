import './Coldpress.css';
import coldpress from '../../images/coldpress.jpg';

function ColdPress() {
  return (
    <div className="ColdPress">
      <div className="ColdPress-item">
        <div>
          <h1>COLD PRESS ELIXIR</h1>
          <p>A blend crafted perfectly for cold brewing.</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="ColdPress-item">
        <img className="ColdPress-image" src={coldpress}></img>
      </div>
    </div>
  );
}

export default ColdPress;