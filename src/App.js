import React from "react";
import "./App.css";
import Container from "./component/Container";
import { Provider } from "react-redux";
import store from "./redux/Store";
import HookContainer from "./component/HookContainer";
import HookIcecreamContainer from "./component/HookIcecreamContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookContainer />
        <Container />
        <HookIcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
