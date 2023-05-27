import { BUY_CAKE } from "./CakeActionType";

const INITIAL_STATE = {
  numOfCakes: 10,
};

const CakeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_CAKE:
      console.log(action.payload);
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return state;
  }
};

export default CakeReducer;
