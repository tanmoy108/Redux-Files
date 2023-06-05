import { combineReducers } from "redux";
import CakeReducer from "./cakes/CakeReducer";
import IcecreamReducer from "./icecream/IcecreamReducer";
import AsyncReducer from "./async_user/AsyncReducer";

const RootStore = combineReducers({
  cake: CakeReducer,
  icecream: IcecreamReducer,
  user: AsyncReducer,
});

export default RootStore;
