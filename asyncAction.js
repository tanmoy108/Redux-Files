const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;
const thunkMiddleWare = require("redux-thunk").default;
const axios = require("axios");

const INITIAL_STATE = {
  loading: true,
  users: [],
  error: "",
};

const FETCH_REQUEST = "FETCH_REQUEST";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAIL = "FETCH_FAIL";

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};
const fetchSuccess = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};
const fetchFail = (error) => {
  return {
    type: FETCH_FAIL,
    payload: error,
  };
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchUser = () => {
  return function(dispatch) {
    dispatch(fetchRequest());
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id); // only user id
        dispatch(fetchSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchFail(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchUser());
