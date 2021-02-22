import React from 'react';
import classes from './Order.module.css';

const Order = (props) => {

    return (
        <div className={classes.Order}>
            <p>Ingredients: Lettuce (1) Bacon (1) Cheese (1)</p>
            <p>Price: <strong>$6.75</strong></p>
        </div>
    );
}

export default Order;