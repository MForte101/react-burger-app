import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map((igkey,i) => {
        return <li key={igkey + i}>
            <span style={{textTransform: 'capitalize'}}>{igkey}</span>: x{props.ingredients[igkey]}</li>
    });

    return (
        <Auxillary>
            <h3>Order Summary</h3>
            <p>A burger with:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${props.totalPrice.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.cancelClick}>Back</Button>
            <Button btnType="Success" clicked={props.checkout} >Checkout</Button>
        </Auxillary>
    )
};

export default orderSummary;