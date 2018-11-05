import SocketIOClient from "socket.io-client";

function listenToSocket(cb) {
  const socket = SocketIOClient("http://192.168.1.102:3000");
  socket.on("connect", () => {
    cb({ isConnected: true });
  });
  socket.on("disconnect", () => {
    cb({ isConnected: false });
  });
  socket.on("timer", data => {
    cb(data);
  });
}

export { listenToSocket };
