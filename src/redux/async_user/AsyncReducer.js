import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./AsyncType";

const INITIAL_STATE = {
  loading: false,
  users: [],
  error: "",
};

const AsyncReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default AsyncReducer;
