import { createStore, combineReducers } from "redux";
import socketReducer from "./reducers";

const rootReducer = combineReducers({
  sockets: socketReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
