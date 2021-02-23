import React from 'react';
import classes from './Order.module.css';

const Order = (props) => {

    return (
        <div className={classes.Order}>
            <p>Ingredients: Patties(props.Ingredients.Meat) Lettuce (props.Ingredients.Lettuce) Bacon (props.Ingredients.Bacon) Cheese (props.Ingredients.Cheese)</p>
            <p>Price: <strong>props.price</strong></p>
        </div>
    );
}

export default Order;