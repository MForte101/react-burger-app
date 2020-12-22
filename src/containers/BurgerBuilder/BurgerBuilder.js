import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import TotalPrice from '../../components/Burger/TotalPrice/TotalPrice';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: .25,
    cheese: .50,
    meat: 2,
    bacon: 1.50,
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchaseable: false,
        checkingOut: false,
    }

    updatePurchaseState = (ingredients) => {
        const ingredientsCopy = ingredients;
        const sum = Object.keys(ingredientsCopy).map(igKey => {
            
            return ingredientsCopy[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        
        this.setState({
            purchaseable: sum > 0,
        });
        console.log(sum);

    }


    addIngredientHandler = (type) =>
    {
        console.log('The type is:' + type);
        const oldIngredientCount = this.state.ingredients[type];
        const updatedIngredientCount = oldIngredientCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedIngredientCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;

        this.setState(
            {
                ingredients: updatedIngredients,
                totalPrice: newPrice,
            }
        );
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) =>
    {
        const oldIngredientCount = this.state.ingredients[type];
        if (oldIngredientCount >= 1 ) {
        const updatedIngredientCount = oldIngredientCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedIngredientCount;
        this.updatePurchaseState(updatedIngredients);
        const priceSubtraction = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceSubtraction;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice,
        })

        }
        
    }


    checkoutHandler = () => {
        this.setState({
            checkingOut: true
        });
    }

    closeModal = () => {
        console.log('Clicked Backdrop');
        this.setState({
            checkingOut: false
        });
    }

    proceedToCheckOutHandlder = () => {
        alert('Moved to Checkout');
    }



    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0
        }



        return(
            <Aux>
                <Modal show={this.state.checkingOut} modalClosed={this.closeModal}>
                 <OrderSummary ingredients={this.state.ingredients}
                 cancelClick={this.closeModal}
                 checkout={this.proceedToCheckOutHandlder}
                 totalPrice={this.state.totalPrice}></OrderSummary>   
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <TotalPrice price={this.state.totalPrice} />
                <BuildControls
                ordered={this.checkoutHandler}
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchaseable={this.state.purchaseable} />
            </Aux>
        );
    }

};

export default BurgerBuilder;