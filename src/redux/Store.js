import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import logger from "redux-logger";
import RootStore from "./RootStore";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  RootStore,
  composeWithDevTools(applyMiddleware(logger,thunk))
);

export default store;
