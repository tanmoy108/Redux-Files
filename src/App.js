import React from "react";
import "./App.css";
import Container from "./component/Container";
import { Provider } from "react-redux";
import store from "./redux/Store";
import HookCakeContainer from "./component/HookCakeContainer";
import HookIcecreamContainer from "./component/HookIcecreamContainer";
import NewCakeContainer from "./component/NewCakeContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer />
        <Container />
        <HookIcecreamContainer />
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
