import React, { useState } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactInfo.module.css';
import axiosOrders from '../../../axiosOrders';
import Spinner from '../../../components/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

const ContactInfo = (props) => {
    let [orderForm, setOrderForm] = useState({
        name: '',
        street: '',
        zipCode: '',
        country: '',
        email: '',
        deliveryMethod: '',
    })
    let [loading, setLoading] = useState(false);

    const orderHandler = (e) => {
        e.preventDefault();
        console.log(props.ingredients);
        setLoading(true);
        const order = {
            ingredients: props.ingredients,
            price: props.price,
            customer: {
                name: name,
                adress: {
                    street: address.street,
                    zipCode: address.postalCode,
                    country: 'USA',
                    },
                email: email,
                },
            deliveryMethod: 'Overnight',
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

    if (loading === true) {
        return (
            <Spinner />
        );
    }
    else {
        return (
            <div className={classes.ContactInfo}>
                <h4>Enter your contact information</h4>
                <form>
                    <Input  inputtype="input"  type="text" name="name" placeholder="Your name" />
                    <Input  inputtype="input" type="email" name="email" placeholder="Your email" />
                    <Input  inputtype="input" type="text" name="street" placeholder="Street" />
                    <Input  inputtype="input" type="text" name="postal" placeholder="Postal Code" />
                    <Button clicked={orderHandler} btnType="Success">ORDER</Button>
                </form>
            </div>
        )

    }


}

export default ContactInfo;