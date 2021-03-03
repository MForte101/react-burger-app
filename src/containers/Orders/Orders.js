import React, { useState, useEffect } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axiosOrders';
import withErrorHandler from '../../hoc/ErrorHandler/ErrorHandler';
import Spinner from '../../components/Spinner/Spinner';

const Orders = () => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState({});

    useEffect(() => {
        axios.get('/orders.json')
        .then(response => {
            let orderArray = [];
            for (let key in response.data) {
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
        
    }, []);
    console.log('Logging Orders in Orders');
    let orderOut = <Spinner />

    if (loading === false) {

       orderOut = orders.map(order => {
        console.log('Logging Order Ingredients');
        console.log(order.ingredients);
            return <Order key={order.id} id={order.id} price={order.price} ingredients={order.ingredients} />
        })
    }
    

    return (
        <div>
            {orderOut}
        </div>
    )
}

export default withErrorHandler(Orders, axios);