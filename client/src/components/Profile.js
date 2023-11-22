import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { username } = useParams();
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProfile = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/profile/${username}`, {
                headers: {
                    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6InRlc3R1c2VyIiwiZW1haWwiOiJ0ZXN0dXNlckBleGFtcGxlLmNvbSIsImlhdCI6MTcwMDY4NTAzNSwiZXhwIjoxNzAxODk0NjM1fQ.peZT_2ju7j7fAVYX5H42I9ickDoaqNXT6hfEY67RQSk"}` // Replace with the actual token
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
        {/* Render your profileData here */}
        <h1>{profileData?.username}</h1>
        <p>Games played: {profileData?.games_played}</p>
        <p>Games won: {profileData?.games_won}</p>
        {/* other profile details */}
      </div>
    );
  };
  

export default Profile;
