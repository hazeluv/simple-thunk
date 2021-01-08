import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import ExampleReducer from "./reducer";

// combine multiple reducers into one big object
const reducers = combineReducers({ example: ExampleReducer });

export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}

export { reducers };

export const store = configureStore();
