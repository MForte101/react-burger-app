import React, { useState } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactInfo.module.css';
import Spinner from '../../../components/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import ErrorHandler  from '../../../hoc/ErrorHandler/ErrorHandler';
import * as actionCreators from '../../../store/actions/index';


import axios from 'axios';
const ContactInfo = (props) => {
    let [validForm, setValidForm] = useState(false);
    let [orderForm, setOrderForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'name'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'street'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'zipcode'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5,
            },
            valid: false,
            touched: false,
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'country'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'email'
            },
            value: '',
            validation: {
                required: true,
            },
            valid: false,
            touched: false,
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
            options: [{
                value: 'fastest', displayValue: 'Fastest'
            },
            {
                value: 'cheapest', displayValue: 'Cheapest'
            }]
            },
            value: 'fastest',
            validation: {},
            valid: true,
        },
    });


    const checkValidation = (value, rules) => {
        let isValid = true;
        
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }


    const formElementsArray = [];

    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        })
    }

    const orderHandler = (e) => {
        e.preventDefault();

        const formData = {}
        for (let formElementID in orderForm) {
            formData[formElementID] = orderForm[formElementID].value;
        }
        const order = {
            ingredients: props.ings,
            price: props.price,
            orderData: formData,
            }

            props.onOrderBurger(order);

    }

    const inputChangeHandler = (event, inputID) => {
        const copyOfForm = {...orderForm};
        const updatedFormElement = {...copyOfForm[inputID]}
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidation(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        copyOfForm[inputID] = updatedFormElement;

        let formIsValid = true;

        for (let inputIdentifier in copyOfForm) {
            formIsValid = copyOfForm[inputIdentifier].valid && formIsValid;
        }

        setOrderForm(copyOfForm);
        setValidForm(formIsValid);


    }

    if (props.loading === true) {
        return (
            <Spinner />
        );
    }
    else {
        return (
            <div className={classes.ContactInfo}>
                <h4>Enter your contact information</h4>
                <form onSubmit={orderHandler}>
                    {formElementsArray.map(formElement => (
                        <Input
                        key={formElement.id} 
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig} 
                        value={formElement.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => inputChangeHandler(event, formElement.id)} />
                    ))}
                    <Button disabled={!validForm} clicked={orderHandler} btnType="Success">ORDER</Button>
                </form>
            </div>
        )

    }


}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    onOrderBurger: (orderData) => dispatch(actionCreators.purchaseBurger(orderData)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(ContactInfo, axios));