import { SOCKET_CONNECTION, SOCKET_COMMUNICATION } from "./actionTypes";

export function socketConnection(connection) {
  return { type: SOCKET_CONNECTION, payload: connection };
}

export function socketCommunication(communication) {
  return { type: SOCKET_COMMUNICATION, payload: communication };
}
