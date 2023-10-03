import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCart,postCart,deleteCart,updateCart } from './cartAPI';

const initialState = {
  cartArray: [],
  status: 'idle',
};
export const getCartAsyncApi = createAsyncThunk(
  'cart/fetchCart',
  async () => {
    const response = await fetchCart();
    return response.data;
  }
);
export const postCartAsyncApi = createAsyncThunk(
  'cart/postCart',
  async (item) => {
    const {id,title,price,thumbnail} = item;
    const response = await postCart({id,title,price,thumbnail,quantity:1});
    return response.data;
  }
);
export const deleteCartAsyncApi = createAsyncThunk(
  'cart/deleteCart',
  async (id) => {
    await deleteCart(id);
    return id;
  }
);
export const updateCartAsyncApi = createAsyncThunk(
  'cart/updateCart',
  async ({id,quantity}) => {
    console.log({id,quantity})
    const response = await updateCart({id,quantity});
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCartAsyncApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCartAsyncApi.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cartArray=action.payload;
      })
      .addCase(postCartAsyncApi.fulfilled, (state, action) => {
        state.status = 'idle';
        state.cartArray.push(action.payload);
      })
      .addCase(deleteCartAsyncApi.fulfilled, (state, action) => {
        state.status = 'idle';
        const findIndex = state.cartArray.findIndex(item=>item.id===action.payload)
        state.cartArray.splice(findIndex,1);
      })
      .addCase(updateCartAsyncApi.fulfilled, (state, action) => {
        state.status = 'idle';
        const findIndex = state.cartArray.findIndex(item=>item.id===action.payload.id)
        state.cartArray.splice(findIndex,1,action.payload);
      });
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;
export default cartSlice.reducer;
