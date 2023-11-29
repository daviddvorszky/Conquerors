import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import getApiUrl from '../../utils/apiConfig';

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(`${getApiUrl()}/api/users/login`, formData);
            //console.log(response.data);
            // Handle success (e.g., redirect, display message)
            setErrorMessage(null);
            localStorage.setItem('token', response.data.token);
            navigate(`/`);
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
            <input type="password" name="password" value={password} onChange={e => onChange(e)} required /><br></br>
            <button type="submit">Login</button><br></br>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
    );
};

export default Login;
