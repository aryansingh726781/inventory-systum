import React, { useState } from 'react';
import axios from 'axios';

function TrackOrder() {
    const [orderId, setOrderId] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);

    const handleTrackOrder = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/trackOrder/${orderId}`);
            setOrderDetails(response.data);
        } catch (error) {
            alert('Error fetching order details');
        }
    };

    return (
        <div>
            <h2>Track Order</h2>
            <input type="text" placeholder="Order ID" onChange={e => setOrderId(e.target.value)} />
            <button onClick={handleTrackOrder}>Track Order</button>

            {orderDetails && (
                <div>
                    {/* Display order details here */}
                    <pre>{JSON.stringify(orderDetails, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default TrackOrder;
