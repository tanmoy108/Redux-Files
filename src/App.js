import React, { useEffect, useState } from 'react';
import './App.css';
import { Product } from './features/product/Product';
import { Cart } from './features/cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getCartAsyncApi } from './features/cart/cartSlice';

function App() {
  const dispatch = useDispatch();
  const cartLength = useSelector((state)=>state.cart.cartArray)
  const [toggle,setToggle] = useState(false)

  useEffect(()=>{
    dispatch(getCartAsyncApi())
  },[])

  return (
    <div className="App">
      <button onClick={()=>setToggle(!toggle)} >cart {cartLength.length}</button>
      {/* <Cart/> */}
      {
        toggle && cartLength.length ? <Cart/> : <div/>
      }
      <Product/>
    </div>
  );
}

export default App;
