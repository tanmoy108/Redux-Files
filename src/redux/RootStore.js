import { combineReducers } from "redux";
import CakeReducer from "./cakes/CakeReducer";
import IcecreamReducer from "./icecream/IcecreamReducer";

const RootStore = combineReducers({
  cake : CakeReducer,
  icecream : IcecreamReducer
})

export default RootStore;