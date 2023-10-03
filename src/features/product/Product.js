import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productAsyncApi } from './productSlice';
import { postCartAsyncApi } from '../cart/cartSlice';
import './Product.css';

export function Product() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.productArray)

  useEffect(() => {
    dispatch(productAsyncApi())
  }, [])

  return (
   <div className='card-container'>
    {
      items.map((value) => {
        return (
          <div className="card">
            <img src={value.thumbnail} alt={value.title} style={{ width: '100%' }} />
            <h1>{value.title}</h1>
            <p className="price">${value.price}</p>
            <p className='description'>{value.description}</p>
            <p><button onClick={()=>dispatch(postCartAsyncApi(value))}>Add to Cart</button></p>
          </div>
        )
      })
    }
   </div>
  );
}
