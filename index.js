const redux = require("redux"); // import redux from 'redux'
const createStore = redux.createStore; //import { createStore } from 'redux'
const combineReducers = redux.combineReducers;

//redux logger
const reduxLogger = require("redux-logger"); //import reduxLogger from 'redux-logger'
const appplyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//action ----------------------------------------------
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
};
const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    info: "Second Redux Action",
  };
};

//reducer ----------------------------------------

const CAKE_INITIAL_STATE = {
  numOfCake: 20,
};
const ICECREAM_INITIAL_STATE = {
  numOfIcecream: 30,
};

const cakeReducer = (state = CAKE_INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };

    default:
      return state;
  }
};
const icecreamReducer = (state = ICECREAM_INITIAL_STATE, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };

    default:
      return state;
  }
};

//store ---------------------------------------------

//combine reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
//1. hold the application state
const store = createStore(rootReducer, appplyMiddleWare(logger));
//2.access the state by getState()
console.log("Initial state", store.getState());

//4.Register listener . subscribe(listener) when state or store changed the subscribe function called
const unsubscribe = store.subscribe(() => {
  // console.log("update state or store", store.getState());
});

//3.Allow state to be update via dispatch(action)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

//5.unsubscribe by same to as subscribe
unsubscribe();
