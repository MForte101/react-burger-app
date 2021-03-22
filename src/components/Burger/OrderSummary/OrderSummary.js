import React, { Component } from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    componentDidUpdate() {
    }

    render () {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((igkey,i) => {
        return <li key={igkey + i}>
            <span style={{textTransform: 'capitalize'}}>{igkey}</span>: x{this.props.ingredients[igkey]}</li>
    });

        return (
            <Auxillary>
            <h3>Order Summary</h3>
            <p>A burger with:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Back</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued} >Checkout</Button>
            </Auxillary>
        );

    }

}

export default OrderSummary;