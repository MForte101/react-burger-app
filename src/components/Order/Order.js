import React from 'react';
import classes from './Order.module.css';

const Order = (props) => {

    let ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]})
    }

    let ingredientOut = ingredients.map(ig => {
        return <span className={classes.ingredientSpan} key={ig.name}>{ig.name}({ig.amount}) </span>
    });

    return (
        <div className={classes.Order}>
            <p>Order No. {props.id}</p>
            <p>Ingredients: {ingredientOut}</p>
            <p>Price: <strong>{props.price}</strong></p>
        </div>
    );
}

export default Order;