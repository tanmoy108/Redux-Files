import { BUY_CAKE } from "./CakeActionType";

const INITIAL_STATE = {
  numOfCakes: 10,
};

const CakeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default CakeReducer;
