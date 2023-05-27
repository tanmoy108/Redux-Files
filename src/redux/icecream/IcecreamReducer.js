import { BUY_ICECREAM } from "./IcecreamActionType.js";
const INITIAL_STATE = {
  numOfIcecreams: 20,
};

const IcecreamReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        numOfIcecreams: state.numOfIcecreams - 1,
      };

    default:
      return state;
  }
};

export default IcecreamReducer;
