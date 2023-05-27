import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootStore from "./RootStore";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  RootStore,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
