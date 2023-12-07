import { useEffect, useState } from 'react';
import io from 'socket.io-client';

// Custom hook for socket management
const useSocket = (url) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Initialize socket connection
        const socketIo = io(url);

        // Update socket state
        setSocket(socketIo);

        // Cleanup function to disconnect socket when the component unmounts
        return () => {
            socketIo.disconnect();
        };
    }, [url]);

    return socket;
};

export default useSocket;
