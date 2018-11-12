import SocketIOClient from "socket.io-client";
import { socketConnection, socketCommunication } from "../Redux/actions";
var socket = null;
export default async (store, action) => {
  const socketUrl = "http://192.168.0.100:3000";
  if (action === "first-call") {
    socket = SocketIOClient(socketUrl, {
      autoConnect: true,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: Infinity,
      multiplex: true
    });
  }
  socket.on("connect", () => {
    store.dispatch(socketConnection({ isConnected: true }));
  });

  socket.on("disconnect", () => {
    store.dispatch(socketConnection({ isConnected: false }));
  });
  socket.on("timer", data => {
    store.dispatch(socketCommunication(data));
  });
};
