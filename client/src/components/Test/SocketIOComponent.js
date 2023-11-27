import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function SocketIOComponent() {
    const [number, setNumber] = useState('');
    const [doubledNumber, setDoubledNumber] = useState('');

    useEffect(() => {
        socket.on('number doubled', (data) => {
            setDoubledNumber(data);
        });

        return () => {
            socket.off('number doubled');
        };
    }, []);

    const sendNumber = () => {
        socket.emit('send number', number);
    };

    return (
        <div>
            <input 
                type="number" 
                value={number} 
                onChange={(e) => setNumber(e.target.value)} 
            />
            <button onClick={sendNumber}>Send Number</button>
            <p>Doubled Number: {doubledNumber}</p>
        </div>
    );
}

export default SocketIOComponent;
