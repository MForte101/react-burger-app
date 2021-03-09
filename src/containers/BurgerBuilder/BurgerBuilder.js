import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import TotalPrice from '../../components/Burger/TotalPrice/TotalPrice';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosOrders from '../../axiosOrders';
import Spinner from '../../components/Spinner/Spinner';
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';



class BurgerBuilder extends Component {

    state = {
        checkingOut: false,
        loading: false,
    }

  /*   componentDidMount() {
        console.log(this.props);
        axiosOrders.get('https://react-simple-burger-default-rtdb.firebaseio.com/Ingredients.json').then(
            response => {
                this.setState({
                    ingredients: response.data,
                });
            }
        );
    } */

    updatePurchaseState = (ingredients) => {
        const ingredientsCopy = ingredients;
        const sum = Object.keys(ingredientsCopy).map(igKey => {
            
            return ingredientsCopy[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        
        return sum > 0;

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
        this.props.history.push('/checkout');
        }
        
    
    render() {

        const disabledInfo = {
            ...this.props.ings
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <=0
        }

        let burger = <Spinner />;
        let orderSummary = null;
        if (this.props.ings) {
            burger = (<Aux><Burger ingredients={this.props.ings} />
                <TotalPrice price={this.props.price} />
                <BuildControls
                ordered={this.checkoutHandler}
                addIngredient={this.props.onIngredientAdded}
                removeIngredient={this.props.onIngredientRemoved}
                disabled={disabledInfo}
                purchaseable={this.updatePurchaseState(this.props.ings)} /></Aux>);
                orderSummary = <OrderSummary ingredients={this.props.ings}
                cancelClick={this.closeModal}
                checkout={this.proceedToCheckOutHandlder}
                totalPrice={this.props.price}></OrderSummary> 
        }





        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return(
            <Aux>
                <Modal show={this.state.checkingOut} modalClosed={this.closeModal}>
                {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }

};

const mapStatetoProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice,
    }
}

const mapDispathToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStatetoProps, mapDispathToProps)(ErrorHandler(BurgerBuilder, axiosOrders));