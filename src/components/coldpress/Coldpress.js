import './Coldpress.css';
import coldpress from '../../images/coldpress.jpg';

function ColdPress() {
  return (
    <div className="ColdPress">
      <div className="ColdPress-item">
        <div className="ColdPress-info">
          <h1 className="ColdPress-title">COLD PRESS ELIXIR</h1>
          <p className="ColdPress-text">A blend crafted perfectly for cold brewing.</p>
          <button className="ColdPress-button">Shop Now</button>
        </div>
      </div>
      <div className="ColdPress-item">
        <img className="ColdPress-image" src={coldpress}></img>
      </div>
    </div>
  );
}

export default ColdPress;