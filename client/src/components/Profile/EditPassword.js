import axios from 'axios';
import React, { useState } from 'react';

const EditPassword = () => {
	const [formData, setFormData] = useState({
		newPassword: '',
		confirmPassword: ''
	});

	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	// Handlers for form submission and input changes
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.newPassword !== formData.confirmPassword) {
			// Handle error: passwords do not match
			alert('Passwords do not match');
			return;
		}

		// Proceed with updating the password
		try {
			const response = await axios.put(`${process.env.REACT_APP_API_URL}/api/users/update-password`, formData, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			});
			setErrorMessage(null);
			setSuccessMessage("Password changed!");
		} catch (error) {
			setSuccessMessage(null);
			if (error.response && error.response.data && error.response.data.message) {
				setErrorMessage(error.response.data.message);
			} else {
				setErrorMessage('An error occurred. Please try again.');
			}
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};


	return (
		<div>
			<form onSubmit={e => handleSubmit(e)}>
				<input type="password" name="newPassword" value={formData.newPassword} onChange={e => handleChange(e)} required /><br></br>
				<input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={e => handleChange(e)} required /><br></br>
				<button type="submit">Update Password</button><br></br>
			</form>
			{errorMessage && <div className="error-message">{errorMessage}</div>}
			{successMessage && <div className="success-message">{successMessage}</div>}
		</div>
	);
};

export default EditPassword;
