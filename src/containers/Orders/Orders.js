import React, { useState, useEffect } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axiosOrders';
import withErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';

const Orders = () => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState({});

    useEffect(() => {
        axios.get('/orders.json')
        .then(response => {
            let orderArray = [];
            for (let key in response.date) {
                orderArray.push({
                    ...response.data[key],
                    id: key
                })
            }

            setOrders(orderArray);
            setLoading(false);

        }).catch(response => {
            setLoading(false);
        });
        
    }, [])

    return (
        <div>
            <Order />
            <Order />
        </div>
    )
}

export default withErrorHandler(Orders, axios);