import {Fragment} from 'react';

import CoffeeCard from "../coffee-card/coffee-card";

const CoffeeList = ({data}) => {
    const items = data.map(item => {
        return <CoffeeCard
                    coffeeName={item.name}
                    coffeeOrigin={item.origin}
                    coffeePrice={item.price} 
                />
    });

    return (
        <Fragment>
            {items}
        </Fragment>
    );
}

export default CoffeeList;