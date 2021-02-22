import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactInfo from '../Checkout/ContactInfo/ContactInfo';

const Checkout = (props) => {
    let [ingredientList, setIngredientList] = useState({});
    let [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {   
        async function handleCheckout(){
            console.log(props.location);
            const query = new URLSearchParams(props.location.search);
            const ingredientObject = {};
            let price = 0;
            for (let param of query.entries()) {
                if (param[0] === 'price') {
                    price = param[1];
                }
                else {
                    ingredientObject[param[0]] = +param[1];
                }

            }
            setIngredientList(ingredientObject);
            setTotalPrice(price);
            console.log('Ingredient Object:');
            console.log(ingredientObject);
    
            console.log('Got to the use effect of Checkout');
        }
        handleCheckout();
    }, [])

    

    const checkoutCancelledHandler = () => {
        props.history.goBack();
    };

    const checkoutContinuedHandler = () => {
        console.log(ingredientList);
        props.history.replace('/checkout/contact-info');
    }; 

    return (
        <div>
            <CheckoutSummary 
                checkoutCancelled={checkoutCancelledHandler} 
                checkoutContinued={checkoutContinuedHandler} 
                ingredients={ingredientList} 
            />
            <Route path={ props.match.path + '/contact-info'} 
            render={(props) => (
            <ContactInfo ingredients={ingredientList} price={totalPrice} {...props} />
                )
            }/>
        </div>
    );
}

export default Checkout;