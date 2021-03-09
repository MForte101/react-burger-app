import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactInfo from '../Checkout/ContactInfo/ContactInfo';
import { connect } from 'react-redux';

const Checkout = (props) => {

    const checkoutCancelledHandler = () => {
        props.history.goBack();
    };

    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-info');
    }; 

    return (
        <div>
            <CheckoutSummary 
                checkoutCancelled={checkoutCancelledHandler} 
                checkoutContinued={checkoutContinuedHandler} 
                ingredients={props.ings} 
            />
            <Route path={ props.match.path + '/contact-info'} component={ContactInfo} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
    }
}

export default connect(mapStateToProps)(Checkout);