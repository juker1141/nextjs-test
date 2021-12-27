import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import nameReducer from "./reducers/nameReducer"

const middleware = [thunk]

const rootReducer = combineReducers({
  name: nameReducer,
});

const makeStore = () => createStore(rootReducer, compose(applyMiddleware(...middleware)))
//const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore);