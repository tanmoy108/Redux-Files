import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./features/product/productSlice"
import cartReducer from "./features/cart/cartSlice"

const container = document.getElementById('root');
const root = createRoot(container);

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
})

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
