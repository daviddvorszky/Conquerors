import { useEffect } from 'react';

const useSocketEvent = (socket, eventName, callback) => {
    useEffect(() => {
        if (socket) {
            socket.on(eventName, callback);

            // Cleanup
            return () => {
                socket.off(eventName, callback);
            };
        }
    }, [socket, eventName, callback]);
};

export default useSocketEvent;
