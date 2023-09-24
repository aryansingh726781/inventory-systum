import React, { useState } from 'react';
import axios from 'axios';

function ReviewProduct() {
    const [productId, setProductId] = useState('');
    const [status, setStatus] = useState('');

    const handleReviewProduct = async () => {
        try {
            await axios.post(`http://localhost:3000/reviewProduct/${productId}`, { status });
            alert('Product reviewed successfully');
        } catch (error) {
            alert('Error reviewing product');
        }
    };

    return (
        <div>
            <h2>Review Product</h2>
            <input type="text" placeholder="Product ID" onChange={e => setProductId(e.target.value)} />
            <select onChange={e => setStatus(e.target.value)}>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
            </select>
            <button onClick={handleReviewProduct}>Review Product</button>
        </div>
    );
}

export default ReviewProduct;
