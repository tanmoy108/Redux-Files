import React from "react";
import "./App.css";
import Container from "./component/Container";
import { Provider } from "react-redux";
import store from "./redux/Store";
import HookCakeContainer from "./component/HookCakeContainer";
import HookIcecreamContainer from "./component/HookIcecreamContainer";
import NewCakeContainer from "./component/NewCakeContainer";
import MapStateToOwn from "./component/MapStateToOwn";
import Async from "./component/Async";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
        <HookCakeContainer />
        <HookIcecreamContainer />
        <NewCakeContainer/>
        <MapStateToOwn cake/>
        <MapStateToOwn/>
        <Async/>
      </div>
    </Provider>
  );
}

export default App;
