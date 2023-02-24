import Card from '../card/Card';
import './Featured.css';
import coffeeTypeOne from '../../images/coffee-1.webp';
import coffeeTypeTwo from '../../images/coffee-2.webp';
import coffeeTypeThree from '../../images/coffee-3.webp';
import coffeeTypeFour from '../../images/coffee-4.webp';
import coffeeTypeFive from '../../images/coffee-5.webp';


function Featured() {
  return (
    <div className="Featured">
      <h1 className="Featured-title">Featured Coffees</h1>
      <div className="Featured-cards">
        <Card 
          image={coffeeTypeOne}
          title="Colombia | Huila Pitalito | ASOBOMBO | Medium Roast" 
        />
        <Card 
          image={coffeeTypeTwo}
          title="2022 Honduras Artisan Sampler"
        />
        <Card 
          image={coffeeTypeThree}
          title="Honduras | Finca La Guadalupe | Maragogype | Medi…"
        />
        <Card 
          image={coffeeTypeFour}
          title="Sumatra | Takengon Gayo Select | Dark Roast"
        />
        <Card 
          image={coffeeTypeFive}
          title="Ethiopia Guji Artisan Series | Suke Quto | Fully Washed | Ligh…"
        />
      </div>
      <button className="Featured-button">Shop Featured Coffees</button>
    </div>
  );
}

export default Featured;
