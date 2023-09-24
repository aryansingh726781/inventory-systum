import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleRegister = async () => {
        try {
            await axios.post('http://localhost:3000/register', { username, password, role });
            alert('User registered successfully');
        } catch (error) {
            alert('Error registering user');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <select onChange={e => setRole(e.target.value)}>
                <option value="user">User</option>
                <option value="vendor">Vendor</option>
            </select>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Register;
