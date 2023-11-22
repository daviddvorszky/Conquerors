import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const FetchProfile = () => {
	const { username } = useParams();
	const [profileData, setProfileData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const currentUser = useAuth();

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				setLoading(true);
				const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/profile/${username}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`
					}
				});
				setProfileData(response.data);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		if (username) {
			fetchProfile();
		}
	}, [username]); // Dependency array to prevent unnecessary re-fetching

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<h1>{profileData?.username}</h1>
			<p>Games played: {profileData?.games_played}</p>
			<p>Games won: {profileData?.games_won}</p>
			{currentUser?.username === profileData?.username && (
				<Link to="/edit-password">Edit Password</Link>
			)}
		</div>
	);
};


export default FetchProfile;
