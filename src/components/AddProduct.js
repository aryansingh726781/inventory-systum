import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleAddProduct = async () => {
        try {
            await axios.post('http://localhost:3000/addProduct', { name, description, price });
            alert('Product added successfully');
        } catch (error) {
            alert('Error adding product');
        }
    };

    return (
        <div>
            <h2>Add Product</h2>
            <input type="text" placeholder="Product Name" onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Description" onChange={e => setDescription(e.target.value)} />
            <input type="number" placeholder="Price" onChange={e => setPrice(e.target.value)} />
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
}

export default AddProduct;
