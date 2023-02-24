import './Card.css';

function Card({ title, price, image }) {
  return (
    <div className="Card">
      <img className="Card-image" src={image}></img>
      <p className="Card-title">{title}</p>
      <p className="Card-description">{price}</p>
    </div>
  );
}

export default Card;