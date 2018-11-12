import {
  SOCKET_CONNECTION,
  SOCKET_COMMUNICATION
} from "../actions/actionTypes";

const initialState = {
  connection: {},
  communication: {}
};

const socketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_CONNECTION:
      return {
        ...state,
        connection: action.payload
      };
    case SOCKET_COMMUNICATION:
      return {
        ...state,
        communication: action.payload
      };
    default:
      return state;
  }
};

export default socketReducer;
