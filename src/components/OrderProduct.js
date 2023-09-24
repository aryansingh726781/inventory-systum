import React, { useState } from 'react';
import axios from 'axios';

function OrderProduct() {
    const [userId, setUserId] = useState('');
    const [productIds, setProductIds] = useState('');

    const handleOrderProduct = async () => {
        try {
            await axios.post('http://localhost:3000/orderProduct', { userId, productIds: productIds.split(',') });
            alert('Order placed successfully');
        } catch (error) {
            alert('Error placing order');
        }
    };

    return (
        <div>
            <h2>Order Product</h2>
            <input type="text" placeholder="User ID" onChange={e => setUserId(e.target.value)} />
            <input type="text" placeholder="Comma-separated Product IDs" onChange={e => setProductIds(e.target.value)} />
            <button onClick={handleOrderProduct}>Order Product</button>
        </div>
    );
}

export default OrderProduct;
