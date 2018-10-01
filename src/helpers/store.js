import thunk from "redux-thunk";
import logger from "redux-logger";
import { compose, applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(logger)
);
const store = createStore(rootReducer, enhancer);
export default store;
