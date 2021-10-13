import {Fragment} from 'react';

import CoffeeCard from "../coffee-card/coffee-card";

const CoffeeList = ({data}) => {
    const elements = data.map((item, i) => {
        return <CoffeeCard
                    key={i}
                    coffeeName={item.name}
                    coffeeOrigin={item.origin}
                    coffeePrice={item.price} 
                />
    });

    const noItemsMessage = (
        <div>
            <p>Sorry, we have not found any coffee with this name</p>
        </div>);

    const items = elements.length > 0 ? elements : noItemsMessage;

    return (
        <Fragment>
            {items}
        </Fragment>
    );
}

export default CoffeeList;