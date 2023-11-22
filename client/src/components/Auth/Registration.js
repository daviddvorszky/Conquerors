import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/register`, formData);
            //console.log(response.data);
            // Handle success (e.g., redirect, display message)
            setErrorMessage('');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('An error occurred. Please try again.');
            }
        }
    };

    return (
        <form onSubmit={e => onSubmit(e)}>
            <input type="text" name="username" value={username} onChange={e => onChange(e)} required /><br></br>
            <input type="email" name="email" value={email} onChange={e => onChange(e)} required /><br></br>
            <input type="password" name="password" value={password} onChange={e => onChange(e)} required /><br></br>
            <button type="submit">Register</button><br></br>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
    );
};

export default Registration;
