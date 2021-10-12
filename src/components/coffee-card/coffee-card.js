import coffeeCard from './coffee-item.png';

import './coffee-card.scss';

const CoffeeCard = (props) => {
    return (
        <div className="coffee-card">
            <img 
                src={coffeeCard} 
                alt="coffee" 
                className="coffee-card__img"
            />
            <h3 
                className="coffee-card__title">
                    {props.coffeeName}
            </h3>
            <div 
                className="coffee-card__origin">
                    {props.coffeeOrigin}
            </div>
            <div 
                className="coffee-card__price">
                    {props.coffeePrice + "$"}
            </div>
        </div>
    );

}

export default CoffeeCard;