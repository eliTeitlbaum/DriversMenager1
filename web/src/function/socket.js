import io from "socket.io-client";


const Socket = io("http://127.0.0.1:8080", {
    reconnectionAttempts: 1,
    reconnectionDelay: 2000,
    timeout: 5000
});

Socket.on('connect', () => {
    console.log('connect success');
});

export default Socket;