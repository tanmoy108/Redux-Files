import React from 'react';
import './App.css';
import Container from './component/Container';
import { Provider } from 'react-redux';
import store from './redux/cakes/CakeStore';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
