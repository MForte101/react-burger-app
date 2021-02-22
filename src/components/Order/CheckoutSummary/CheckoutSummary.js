import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
    console.log('Logging ingredient props');
    console.log(props.ingredients);

    return (
        <div className={classes.CheckoutSummary}>
            <h1>Hope you enjoy our burger!</h1>
            <div style={{
                width: '100%',
                margin: 'auto',
            }}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.checkoutCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.checkoutContinued}>Continue</Button>
        </div>
    )

}

export default CheckoutSummary;