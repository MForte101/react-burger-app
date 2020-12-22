import React from 'react';
import classes from './TotalPrice.module.css'


const totalPrice = (props) => {
    return (
        <div className={classes.TotalPrice}>
            Total Price: <strong>${props.price.toFixed(2)}</strong>
        </div>
    );
}

export default totalPrice;