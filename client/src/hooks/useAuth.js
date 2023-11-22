import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setCurrentUser(decodedToken);
            } catch (error) {
                console.error("Invalid token");
            }
        }
    }, []);

    return currentUser;
};

export default useAuth;