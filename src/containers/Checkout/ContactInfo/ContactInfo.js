import React, { useState } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactInfo.module.css';
import axiosOrders from '../../../axiosOrders';
import Spinner from '../../../components/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { Switch } from 'react-router-dom';

const ContactInfo = (props) => {
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
            }
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
            }
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
            }
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
            }
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
            }
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
            value: '',
            validation: {
                required: true,
            }
        },
    });
    let [loading, setLoading] = useState(false);

    const formElementsArray = [];

    for (let key in orderForm) {
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        })
    }

    const orderHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = {}
        for (let formElementID in orderForm) {
            formData[formElementID] = orderForm[formElementID].value;
        }
        const order = {
            ingredients: props.ingredients,
            price: props.price,
            orderData: formData,
            }

        axiosOrders.post('/orders.json', order).then(
            response => {
                setLoading(false);
                props.history.push('/');
            }).catch(
                error => {
                    console.log(error);
                    setLoading(false);
                }
            );

    }

    const inputChangeHandler = (event, inputID) => {
        const copyOfForm = {...orderForm};
        const updatedFormElement = {...copyOfForm[inputID]}
        updatedFormElement.value = event.target.value;
        copyOfForm[inputID] = updatedFormElement;
        setOrderForm(copyOfForm);


    }

    if (loading === true) {
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
                        changed={(event) => inputChangeHandler(event, formElement.id)} />
                    ))}
                    <Button clicked={orderHandler} btnType="Success">ORDER</Button>
                </form>
            </div>
        )

    }


}

export default ContactInfo;