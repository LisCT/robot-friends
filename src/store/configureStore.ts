import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { searchRobots, requestRobots } from "../reducers";
//import { createLogger } from 'redux-logger';

//const logger = createLogger();

export const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
