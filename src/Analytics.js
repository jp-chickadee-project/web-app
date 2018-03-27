
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.subscribe = (name, listener) => {
  socket.emit('subscribe', name);
  socket.on(name, listener);
};

socket.unsubscribe = (name) => {
  socket.emit('unsubscribe', name);
};

export default socket;
