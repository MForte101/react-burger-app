import React, { useState } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactInfo.module.css';
import axiosOrders from '../../../axiosOrders';

const ContactInfo = (props) => {
    let [loading, setLoading] = useState(false);
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [address, setAddress] = useState({
        street: '',
        postalCode: '',
    });

    const orderHandler = (e) => {
        e.preventDefault();
        console.log(props.ingredients);
        setLoading(true);
        const order = {
            ingredients: props.ingredients,
            price: props.totalPrice,
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
            }).catch(
                error => {
                    console.log(error);
                    setLoading(false);
                }
            );

    }



    return (
        <div className={classes.ContactInfo}>
            <h4>Enter your contact information</h4>
            <form>
                <input className={classes.input} type="text" name="name" placeholder="Your name" />
                <input className={classes.input} type="email" name="email" placeholder="Your email" />
                <input  className={classes.input}type="text" name="street" placeholder="Street" />
                <input className={classes.input} type="text" name="postal" placeholder="Postal Code" />
                <Button clicked={orderHandler} btnType="Success">ORDER</Button>
            </form>
        </div>
    )
}

export default ContactInfo;